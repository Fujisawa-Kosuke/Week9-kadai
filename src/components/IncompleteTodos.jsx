import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            //仮想DOMは変更前後で差分のみを再レンダリングするので、
            //ループでレンダリングした際に何個目の要素か
            //正確に比較するために、
            //目印を付ける必要がある。それがkey
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              {/*関数に引数を渡す場合、
               関数呼び出し時はアロー関数で呼ぶ。
               このようにしないと、初期表示時に関数が呼ばれてしまう。*/}
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
