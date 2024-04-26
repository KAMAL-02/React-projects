import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState("8") ;
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  //useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback( () => {
    let pass = "" ;
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str += "1234567890";
    };
    if(charAllowed){
      str+="@#$%&*_"  
    };
    for (let i = 1 ; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  } , [length , numberAllowed , charAllowed])
  
  const copyPass = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  } ,[password])

  useEffect(() =>{
    passwordGenerator()
  },[length , numberAllowed , charAllowed , passwordGenerator])
  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md-rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-2'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
         <input type="text" value ={password} 
         className='outline-none w-full py-1 px-3'
         placeholder='Password'
         readOnly
         ref={passwordRef}
         />
         <button
         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPass}>copy</button>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="range"
        min={6}
        max={15}
        value={length}
        className='cursor-pointer'
        onChange={(e) =>{setlength(e.target.value)}}/>
        <label>Length : {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput' 
        onChange={() =>{setnumberAllowed((prev) => !prev);}}/>
        <label htmlFor='numberInput'>Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked={charAllowed}
        id='charInput' 
        onChange={() =>{setcharAllowed((prev) => !prev);}}/>
        <label htmlFor='charInput'>Characters</label>
      </div>

    </div>  
    </>  
  )
}
export default App
