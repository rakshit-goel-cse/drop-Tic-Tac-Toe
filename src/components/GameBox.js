import React, { useState } from "react";
import VerticalRow from "./Block";

const GameBox = (params) => {
    const [data, setdata] = useState([['*', '*', '*', '*', '*'],
                                    ['*', '*', '*', '*', '*'],
                                    ['*', '*', '*', '*', '*'],
                                    ['*', '*', '*', '*', '*'],
                                    ['*', '*', '*', '*', '*']]
                                    ) //colums

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

    return(
        <div className="flex flex-row items-center justify-center h-screen">
            {console.log("data---",data)}
            {data && data.map((el,index)=>(
                <VerticalRow key={index} index={index} elements={el} char={char} setData={setData}/>
            ))}
        </div>
    )
}

export default GameBox;