import React, { useEffect, useState } from "react";
import VerticalRow from "./Block";
import GameOver, { GameDraw } from "./gameOver";

import Modal from "react-modal";

function iniData(k){
    console.log(k)
  if (null === k || k === undefined || k < 1) {
    return [
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
      ["*", "*", "*", "*", "*"],
    ];
  }
  return Array.from({ length: k }, () => Array.from({ length: k }, () => "*"));

};

const GameBox = ({size}) => {
  const [data, setdata] = useState([]); //colums
  useEffect(() => {
    setdata(iniData(size));
  }, []);
  const [openmodal, setopenmodal] = useState(false);
  const [winDraw, setwinDraw] = useState("");
  const [char, setChar] = useState("X");

  const setData = (ele, index) => {
    const newData = data.map((col, colIndex) =>
      colIndex === index ? ele : col
    );
    setdata(newData);
    if (char === "X") {
      setChar("O");
    } else {
      setChar("X");
    }
  };

  const checkGame = () => {
    if (!openmodal) {
      if (GameOver(data)) {
        //alert("Game Over Player-" + (char==="O"?"1":"2") + " wins");
        setopenmodal(true);
        setwinDraw("win");
        setChar("X");
        setdata(iniData(size));
      }
      if (GameDraw(data)) {
        //alert("game over/n Match Draw");
        setopenmodal(true);
        setwinDraw("draw");
        setChar("X");
        setdata(iniData(size));
      }
    }
  };

  const modal = () => {
    /* return(
            <Modal className="fixed h-36 w-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " isOpen={openmodal} 
                onRequestClose={()=>setopenmodal(false)}
                contentLabel="ABD">
                <div className="justify-center items-center">
                     <h2>Modal Content</h2>
                    <button onClick={() => setopenmodal(false)}>Close Modal</button>
                </div>
                </Modal>
        );*/

    return (
      <Modal
        isOpen={openmodal}
        onRequestClose={() => setopenmodal(false)}
        contentLabel="ABD"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <div className="bg-white p-8 rounded shadow-lg w-60 h-36 relative flex flex-col items-center justify-center">
          <h2>
            {winDraw === "win" &&
              "Game Over Player-" + (char === "X" ? "1" : "2") + " wins"}
            {winDraw === "draw" && "Game Over Match Draw"}
          </h2>
          <button
            className="mt-4 px-4 py-2 text-white bg-blue-500 rounded"
            onClick={() => setopenmodal(false)}
          >
            Close Modal
          </button>
        </div>
      </Modal>
    );
  };

  return (
    <div className="flex flex-col items-center justify-around h-screen">
      {modal()}
        {/* mt-6*/}
      <div className="text-4xl p-1 text-teal-100 bg-gradient-to-bl from-sky-300 to-blue-950 select-none">
        Drop TIC TAC TOE
      </div>
        {/* mt-5*/}
      <div className="text-4xl p-1 text-teal-100 bg-gradient-to-br from-sky-300 to-blue-950 select-none">
        Chance of <br />
        {char === "X" ? "Player 1" : "Player 2"}
      </div>
      {/* mt-16*/}
      <div className="flex flex-row items-center space-x-2 justify-center bg-gradient-to-bl from-rose-500 via-orange-500 to-yellow-400 p-2">
        {data &&
          data.map((el, index) => (
            <VerticalRow
              key={index}
              index={index}
              elements={el}
              char={char}
              setData={setData}
              checkGame={checkGame}
            />
          ))}
      </div>
      {/* mt-3 mb-5*/}
      <button className="z-10 px-4 py-2 bg-amber-400 rounded-xl"
      onClick={()=>{
        setopenmodal(false);
        setwinDraw("");
        setChar("X");
        setdata(iniData(size));
      }}>
        Reset
      </button>
    </div>
  );
};

export default GameBox;
