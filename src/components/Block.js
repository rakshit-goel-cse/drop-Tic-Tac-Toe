import React, { useEffect, useState } from 'react';
//import './App.css';  // Ensure to import the Tailwind CSS

const VerticalRow = ({elements,char,setData,index}) => {
  // Initial state with 5 'X' elements
  //const [elements, setElements] = useState(['*', '*', '*', '*', '*']);
  //console.log("ele- ",elements);
  const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        let timeout=null;
        if(isAnimating){
        timeout = setTimeout(() => {
          setIsAnimating(false);
        }, 1000); // Duration should match the animation duration
        }
        return ()=> clearTimeout(timeout);
        
    }, [isAnimating]);
    

  const handleClick = () => {

    // Create a new array with 'O' at the top and rest elements shifted down
    if(elements[elements.length - 1] =='*' && !isAnimating){
    const newElements = [char, ...elements.slice(0, elements.length - 1)];
    setData(newElements,index);
    setIsAnimating(true);
    }
  };

  return (
    
      <div 
        className="flex flex-col items-center space-y-2 cursor-pointer" 
        onClick={handleClick}
      >
        {elements && elements.map((el, index) => (
          <div 
            key={index} 
            className={`w-16 h-16 flex items-center justify-center border border-gray-300`}
          >
             <div className={`pt-14 absolute h-32 ${isAnimating ? 'animate-drop' : ''}`}>
              {el}
            </div>
          </div>
        ))}
      </div>
  );
};

export default VerticalRow;
