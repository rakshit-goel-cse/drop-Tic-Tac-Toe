import React, { useEffect, useState } from "react";
import VerticalRow from "./Block";
import GameOver from "./gameOver";

const iniData=(k)=>{
    if(null===k || k===undefined ||k<1){
        return ([['*', '*', '*', '*', '*'],
                ['*', '*', '*', '*', '*'],
                ['*', '*', '*', '*', '*'],
                ['*', '*', '*', '*', '*'],
                ['*', '*', '*', '*', '*']]);
    }
}

const GameBox = (params) => {
    const [data, setdata] = useState([]); //colums
    useEffect(() => {
        setdata(iniData());
    }, [])
    
    const [char,setChar] = useState("X");

    const setData = (ele,index) =>{
        const newData = data.map((col, colIndex) => (colIndex === index ? ele : col));
    setdata(newData);
    if(char==='X'){
        setChar("O")
    }
    else{
        setChar("X")
    }
    }

    const checkGame=()=>{
        if(GameOver(data)){
            alert("game over");
            setdata(iniData);
        }
    }

    return(
        <div className="flex flex-col items-center justify-center h-full">
            <div>
                Chance of {char==='X'?'Player 1':'Player 2'}
            </div>
        <div className="flex flex-row items-center mt-20 space-x-2 justify-center bg-slate-600 p-2">
            
            {data && data.map((el,index)=>(
                <VerticalRow key={index} index={index} elements={el} char={char} setData={setData} checkGame={checkGame}/>
            ))}
        </div>
        </div>
    )
}

export default GameBox;