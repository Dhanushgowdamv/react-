import { useState, useCallback , useEffect } from 'react';


function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [letter, setLetter] = useState(false);
  const [password, setPassword] = useState("");
  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllow) str += "0123456789";
    if (letter) str += "!@#$%^&*()_+=-{}::<>/.,?/*-";
  
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllow, letter]);

useEffect(()=>{passwordGenerator()},[length,numberAllow,letter,passwordGenerator])
  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-3 py-5 my-20
      text-orange-500 bg-gray-800">
  <h1 className="text-white text-center my-5">password passwordGenerator</h1>
  <div className="flex shadow rounded-lg overflow-hidden mb-4">
    <input
      type="text"
      value={password}
      className="outline-none w-full py-1 px-3"
      placeholder="password"
      readOnly
    />

    <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
  </div>
  <div className='flex text-sm gap-x-5'>
    <div className="flex items-center gap-x-1">
      <input 
      type="range" 
      min={6}
      max={100}
      value={length}
      className='cursor-pointer'
      onChange={(e)=>{setLength(e.target.value)}}
      />
      <label >Length:{length}</label>
    </div>
    <div className="flex items-center gap-x-1">
      <input
        type='checkbox'
        defaultChecked={numberAllow}
        id='numberInput'
        onChange={() => {
          setNumberAllow((prev)=>!prev)
      }}      
      
      />
      <label htmlFor="numberInput">Number</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
        type='checkbox'
        defaultChecked={letter}
        id='charInput'
        onChange={() => {
          setLetter((prev)=>!prev)
      }}      
      
      />
      <label htmlFor="chatInput">SpecialCharacter</label>
      </div>

  </div>
</div>

      
    </>
  );
}

export default App;
