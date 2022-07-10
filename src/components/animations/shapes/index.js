import { Circle, ShapeBox, Ring } from "./shapes";
import styled from "styled-components";

const SelectShape = (props) => {
  const { shape } = props;  
  const choice = {
    "circle" : <Circle {...props} />,
    "ring" : <Ring {...props} />

  };

  return choice[shape];
};

export const Shape = (props) => {
  const { shape, sx } = props;

  return <ShapeBox {...props}>

    <SelectShape {...props} />

  </ShapeBox>;
};

