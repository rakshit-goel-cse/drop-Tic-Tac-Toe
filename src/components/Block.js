import React, { useEffect, useState } from "react";
//import './App.css';  // Ensure to import the Tailwind CSS

const VerticalRow = ({ elements, char, setData, index, checkGame }) => {
  // Initial state with 5 'X' elements
  //const [elements, setElements] = useState(['*', '*', '*', '*', '*']);
  //console.log("ele- ",elements);

  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    let timeout = null;
    if (isAnimating) {
      timeout = setTimeout(() => {
        setIsAnimating(false);
        checkGame();
      }, 1000); // Duration should match the animation duration
    }
    return () => clearTimeout(timeout);
  }, [isAnimating]);

  const handleClick = () => {
    // Create a new array with 'O' at the top and rest elements shifted down
    if (elements[elements.length - 1] === "*" && !isAnimating) {
      const newElements = [char, ...elements.slice(0, elements.length - 1)];
      setData(newElements, index);
      setIsAnimating(true);
    }
  };

  return (
    <div
      className="flex flex-col items-center space-y-2 cursor-pointer hover:bg-blue-500 active:bg-blue-700"
      onClick={handleClick}
    >
      {elements &&
        Array.isArray(elements) &&
        elements.map((el, index) => (
          <div
            key={index}
            className={`bg-opacity-25 bg-white z-10 w-16 h-16 flex items-center justify-center border border-gray-300`}
          >
            <div
              className={`font-extrabold text-xl mb-4 pt-14 absolute h-32 select-none ${
                isAnimating ? "animate-drop" : ""
              }`}
            >
              {el}
            </div>
          </div>
        ))}
    </div>
  );
};

export default VerticalRow;
