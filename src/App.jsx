import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  // [stateの変数名,stateを更新する関数名(set~が一般的)] = (初期値)
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  //アロ―関数(state)
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  //stateを更新するアロー関数
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  //関心の分離
  //最初のレンダリング時だけなら[],[]の変数が変化したい場合のみ読み込まれる
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      {/* styleは直記入も可能だが、書き方注意 */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* コンポーネントへpropsを渡して共通化 */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です!</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {/* trueの場合に右側の要素を返す */}
      {faceShowFlag && <p>(^^;)</p>}
    </>
  );
};

export default App;
