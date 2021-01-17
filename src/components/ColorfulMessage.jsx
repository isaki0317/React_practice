import React from "react";

//props.～～ または、childrenで要素を取り出す
export const ColorfulMessage = (props) => {
  //分割代入で記述量を減らす(props.color等)
  const { color, children } = props;
  const contentStyle = {
    //変数名がプロパティ名と同じなら省略できる(color: color,)
    color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

//export default ColorfulMessage;
