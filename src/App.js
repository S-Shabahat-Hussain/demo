import { useState } from "react";
import './App.css';

function App() {
  return (
    <div className='w-[100vw] h-[100vh] flex bg-[#378ef9] text-white'>
      <div>Increment && Decrement</div>
      <div>
        <button> - </button>
        <div>

        </div>
        <button> + </button>
      </div>
        <button>Reset</button>
    </div>
  );
}

export default App;
