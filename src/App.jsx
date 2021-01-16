import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  //アロ―関数(state)
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  // [stateの変数名,stateを更新する関数名(set~が一般的)] = (初期値)
  const [num, setNum] = useState(0);
  return (
    <>
      {/* styleは直記入も可能だが、書き方注意 */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* コンポーネントへpropsを渡して共通化 */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
    </>
  );
};

export default App;
