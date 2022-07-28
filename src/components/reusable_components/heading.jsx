import React from "react";
import { HeadingMain, AniSpan } from "../../utility/styled_components/text";

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
                    return <AniSpan type= {type}> {word} </AniSpan>;
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
  let { title, aType, sx, type  } = props;

  const t_list = title.split("\n");

  return (
    <HeadingMain   sx = {sx}  type = {type} {...props} >
      <SpanList data = {t_list}   />
    </HeadingMain>
  );
}
