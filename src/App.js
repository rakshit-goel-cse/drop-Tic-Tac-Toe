import logo from "./logo.svg";
import "./App.css";
import GameBox from "./components/GameBox";
import { useState } from "react";

import Modal from "react-modal";
function App() {
  const [model, setmodel] = useState(true);
  const [size, setsize] = useState(3);

  const ResetGame=()=>{
    setsize(3);
    setmodel(true);
  }

  const modal = () => {
    return (
      <Modal
        isOpen={model}
        onRequestClose={() => setmodel(false)}
        contentLabel="ABD"
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-40"
      >
        <div className="bg-white p-8 rounded shadow-lg w-60 h-36 relative flex flex-col items-center justify-center">
          <h2 className="text-xl">Select Game Size</h2>
          <input
            className="mt-2"
            type="number"
            value={size}
            max={6}
            min={3}
            onChange={(e) =>{
              2 < e.currentTarget.value < 7 ? setsize(e.currentTarget.value) : setsize(0)
            }}
          ></input>
          <button
            className="mt-4 px-4 py-2 text-white bg-blue-500 rounded"
            onClick={() => {
              setmodel(false);
            }}
          >
            Submit
          </button>
        </div>
      </Modal>
    );
  };

  return (
    <div className="App">
      {modal()}
      {console.log(size)}
      <GameBox size={size} ResetGame={ResetGame} />
    </div>
  );
}

export default App;
