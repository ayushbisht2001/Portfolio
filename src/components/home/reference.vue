<template lang="html">
	<div class="slider" style="opacity: 1">
		<slide-indicator></slide-indicator>
		<div class="slide-container" ref="slideContainer">
			<slide
				v-for="(slide, index) in slides"
				:title="slide.title"
				:titleColor="slide.titleColor"
				:textColor="slide.textColor"
				:description="slide.description"
				:context="slide.context"
				:role="slide.role"
				:period="slide.period"
				:shapePath="slide.shapePath"
				:shapePath2x="slide.shapePath2x"
				:illustrationPath="slide.illustrationPath"
				:illustrationPath2x="slide.illustrationPath2x"
				:caseStudy="slide['case-study']"
				:url="slide.url"
				:rotationX="rotationX"
				:rotationY="rotationY"
				:slideId="index">
			</slide>
		</div>
	</div>
</template>

<script>

	import {EventBus} from '../../event-bus.js'
	import {TweenLite, Expo} from 'gsap'
	import Slide from './Slide.vue'
	import SlideIndicator from './SlideIndicator.vue'
	import _ from 'lodash'

	import SliderStore from '../../stores/SliderStore.js'
	import VirtualScroll from 'virtual-scroll'
	import MenuStore from '../../stores/MenuStore.js'
	import LoaderStore from '../../stores/LoaderStore.js'

	const slides = require('./slides.json').slides

	export default {

		beforeCreate(){
			this.slides = slides
		},

		mounted(){
			this.vs = new VirtualScroll({
				el: this.$el,
				mouseMultiplier: .4,
				keyStep: 400
			})
			this.events()
			this.loaderReady()
			this.debouncedBackToSlide = _.debounce(this.backToSlide, 200)
		},

		beforeDestroy(){
			this.unlistenEvents()
			SliderStore.reset()
			SliderStore.setInactive()
		},

		data(){
			return {
				state: SliderStore.state,
				menuState: MenuStore.state,
				loaderState: LoaderStore.state,
				targetPosY: 0,
				slideTransform: 0,
				oldSlideTransform: 0,
				oldDeltaY: 0,
				leave: false,
				directionQueue: '',
				mousemoveIsActive: false,
				rotationX: 0,
				rotationY: 0,
			}
		},

		computed: {
			pageReady(){
				return this.loaderState.pageReady
			},
			currentSlideId(){
				return this.state.currentSlideId
			},
			sliderIsAnimated(){
				return this.state.isAnimated
			},
			sliderIsActive(){
				return this.state.isActive
			},
			menuIsClosed(){
				return this.menuState.isClosed
			},
			menuIsAnimated(){
				return this.menuState.isAnimated
			},
			getSliderPosY(){
				return this.state.posY
			},
			isSliding(){
				return this.state.isSliding
			}
		},

		methods: {

			events(){
				this.vs.on(this.wheel)
				EventBus.$on('appear-slide', this.appearSlide)
				EventBus.$on('add-mousemove', this.addMousemove)
				EventBus.$on('leave-page', this.leavePage)
				EventBus.$on('go-to-case-study', this.goToCaseStudy)
				EventBus.$on('close-case-study', this.closeCaseStudy)
				EventBus.$on('case-study-closed', this.caseStudyClosed)
				EventBus.$on('page-ready', this.loaderReady)
			},

			unlistenEvents(){
				this.removeMousemove()
				this.vs.destroy()
				EventBus.$off('add-mousemove', this.addMousemove)
				EventBus.$off('appear-slide', this.wheelLoop)
				EventBus.$off('leave-page', this.leavePage)
				EventBus.$off('go-to-case-study', this.goToCaseStudy)
				EventBus.$off('close-case-study', this.closeCaseStudy)
				EventBus.$off('case-study-closed', this.caseStudyClosed)
				EventBus.$off('page-ready', this.loaderReady)
			},

			leavePage(){
				this.leave = true
			},

			mousemove(e){
				e.preventDefault()

				let centroX = e.clientX - window.innerWidth / 2
				let centroY = window.innerHeight / 2 - (e.clientY + 100)
				let degX = centroX * .01
				let degY = centroY * .02

				if (this.menuIsClosed) {

					TweenLite.killTweensOf(this.$refs.slideContainer, false, {rotationX: true, rotationY: true})

					if (this.menuIsClosed && !this.isSliding) {
						TweenLite.to(this.$refs.slideContainer, .8,{rotationX: degY})
					}

					TweenLite.to(this.$refs.slideContainer, .8,{rotationY: degX})

				}

			},

			loaderReady(){
				this.$route.name === 'case-study' && this.pageReady ? this.goToCaseStudy(): undefined
			},

			addMousemove(){
				!this.mousemoveIsActive ? window.addEventListener('mousemove', this.mousemove) : undefined
				this.mousemoveIsActive = true
			},

			removeMousemove(){
				window.removeEventListener('mousemove', this.mousemove)
			},

			goToCaseStudy(){
				this.caseStudyOpen = true
				this.vs.off(this.wheel)
				this.wheelCaseStudy()
				this.leave = true

				this.removeMousemove()
				this.mousemoveIsActive = false
				TweenLite.to(this.$refs.slideContainer, 2, {
					rotationY: 0,
					rotationX: 0
				})

			},

			closeCaseStudy(){
				this.addMousemove()
			},

			caseStudyClosed(loadNextProject){
				if (!loadNextProject || !slides[this.currentSlideId]['case-study']) {
					_.delay( ()=>{
						this.caseStudyOpen = false
						this.vs.on(this.wheel)
						SliderStore.setActive()
						this.leave = false
						this.wheelLoop()
					},100)
				}
			},

			wheel(event){
				let targetModifier = event.deltaY

				if (!this.menuIsClosed) {
					return undefined
				}

				if (!this.sliderIsAnimated) {
					this.targetPosY += targetModifier
					this.oldDeltaY = event.deltaY
				}

				this.debouncedBackToSlide()
			},

			backToSlide(){
				this.targetPosY = 0
			},

			wheelCaseStudy(){
				let newSlideTransform = this.getSliderPosY
				this.slideTransform = newSlideTransform
				TweenLite.set(this.$refs.slideContainer, {y: this.slideTransform, force3D: true})
				this.caseStudyOpen ? requestAnimationFrame(this.wheelCaseStudy) : undefined
			},

			appearSlide(){
				this.addMousemove()
				this.wheelLoop()
			},

			wheelLoop(){ 
				let slideLimit = 165
				let newSlideTransform = this.slideTransform + (this.targetPosY - this.slideTransform) * .09
						newSlideTransform = this.getRoundedValue(newSlideTransform)

				if (newSlideTransform !== this.oldSlideTransform) {
					this.oldSlideTransform = this.slideTransform
					this.slideTransform = newSlideTransform
					TweenLite.set(this.$refs.slideContainer, {y: this.slideTransform, force3D: true})
					SliderStore.setPosY(this.slideTransform)
				}

				if (this.slideTransform <= -slideLimit || this.directionQueue === 'next') {
					this.nextSlide()
					_.delay(this.resetWheel.bind(this), 1000)
				}
				else if (this.slideTransform >= slideLimit || this.directionQueue === 'prev'){
					this.prevSlide()
					_.delay(this.resetWheel.bind(this), 1000)
				}
				else if (!this.leave) {
					requestAnimationFrame(this.wheelLoop)
				}
			},

			getRoundedValue(valueToRound){
				let roundedValue = valueToRound * 1000
					roundedValue = Math.round(roundedValue)
					roundedValue = roundedValue / 1000

					return roundedValue
			},

			resetWheel(){
				this.targetPosY = 0
				this.slideTransform = 0
				this.oldDeltaY = 0
				this.directionQueue = ''
				TweenLite.set(this.$refs.slideContainer, {y: 0, force3D: true})
			},

			containSlide(slideId){
				if (slideId >= 0 && slideId <= slides.length - 1) {
					return true
				}
				else {
					return false
				}
			},

			nextSlide(){
				this.goToSlide(this.currentSlideId + 1)
			},

			prevSlide(){
				this.goToSlide(this.currentSlideId - 1)
			},

			goToSlide(slideId){
				let lastSlideId = this.currentSlideId
				let direction

				if (slideId >= slides.length) {
					direction = 'next'
					SliderStore.reset()
				}
				else if (slideId < 0) {
					direction = 'prev'
					SliderStore.setSlideId(slides.length-1)
				}
				else {
					this.currentSlideId < slideId ? direction = 'next' : direction= 'prev'
					direction === 'next' ? SliderStore.increment() : SliderStore.decrement()
				}

				this.mousemoveIsActive = false
				this.removeMousemove()

				EventBus.$emit('slide-'+direction, lastSlideId)
				SliderStore.sliderIsAnimated()

			}
		},
		components: {
			Slide,
			SlideIndicator
		}
	}
</script>

<style lang="scss">
	.slider {
		position: absolute;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
		z-index: 0;
		perspective: 1000px;
	}

	.slide-container {
		width: 100%;
		height: 100%;
		position: absolute;
		transform-style: preserve-3d;
	}

</style>



// WEBPACK FOOTER //
// Slider.vue?64b8b72a