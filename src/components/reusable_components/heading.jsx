import React from "react";
import { HeadingMain, AniSpan, Span, PText } from "../../utility/styled_components/text";

const SpanList = function (props) {
  const { data = [], type } = props;

  return (
    data.length &&
    data.map((item) => {
      return (
        <>
          {" "}
          {item && item.trim().split(" ").map((words) => {
              return(
                <>
              {   words.trim().split("").map(word =>{
                    return <AniSpan sx = "word-break : keep-all;" type= {type}>{word} </AniSpan>;
                     })
               
               }
               &nbsp;
                 </>
                
                )


            })}

            {"    "}
          <br />
        </>
      );
    })
  );
};

export default function AniHeading(props) {
  let { title, aType, sx, type , braces = false } = props;

  const t_list = title.split("\n");

  return (
    <HeadingMain   sx = {sx}  type = {type} {...props} >
      {braces ? 
      <Span type = "t" family = "Comfortaa" size = "1.5rem"  > {"title : "} &nbsp;  </Span > 
      :"" 
    }
      <SpanList data = {t_list}   />
    </HeadingMain>
  );
}
