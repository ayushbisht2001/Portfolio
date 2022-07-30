import React from "react";
import { LinkBox } from "../../utility/styled_components/box";
import { Span, PText } from "../../utility/styled_components/text";

export function PArray(props) {
  const { data = [], children } = props;
  return (
    <>
      {" "}
      <LinkBox type="t" family="Comfortaa">
        <Span > {"["} </Span>
        {data.length &&
          data.map((val, key) => {
            return (
              <>
                <Span p="0" m = "5px 4px" type="s">{val}</Span>
                <Span  p="0" m = "auto 12px auto 3px "  >{","}</Span>
              </>
            );
          })}
        <Span p="0" m = "0">{"]"}</Span>
          {children}
      </LinkBox>
    </>
  );
}

export function PJson(props) {
  const { data = [], children } = props;
  return (
    <>
      <LinkBox type="t" family="Comfortaa">
        <Span> {" { "} </Span>
        {data.length &&
          data.map((val, key) => {
            return (
              <>
                <Span type="s">{val}</Span>
                <Span>{","}</Span>
              </>
            );
          })}
        <Span>{"}"}</Span>
        {children}
      </LinkBox>
    </>
  );
}
