import React from 'react'
import Particles from 'react-tsparticles'
import {maskOption} from '../../utility/particle_js/options.js'

export default function Home() {
    return (
        <div>
            <Particles 
            options={{...maskOption}}
            
            />
        </div>
    )
}
