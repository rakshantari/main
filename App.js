import React, {useState}from 'react';
import "./App.css";

const App=()=>{

    const [result,setResult]=useState("");

    const clickhandler=(event)=>{
        setResult(result.concat(event.target.value))
    }

    const cleardisplay=()=>{
        setResult("");
    }
    const calculate = () => {
        setResult(eval(result));
    }
    const backspace = () => {
        setResult(result.slice(0, -1))
    }
    return(
        <div className='calc'>
            <input type="text" placeholder="0" id="answer" value={result}/>
            <input type="button" value="clear" className='button button1 blue' onClick={cleardisplay}/>
            <input type="button" value="c" className='button blue' onClick={backspace}/>
            <input type="button" value="&divide;" className='button blue' onClick={clickhandler}/>
            <input type="button" value="7" className='button' onClick={clickhandler}/>
            <input type="button" value="8" className='button' onClick={clickhandler}/>
            <input type="button" value="9" className='button' onClick={clickhandler}/>
            <input type="button" value="*" className='button blue' onClick={clickhandler}/>
            <input type="button" value="4" className='button' onClick={clickhandler}/>
            <input type="button" value="5" className='button' onClick={clickhandler}/>
            <input type="button" value="6" className='button' onClick={clickhandler}/>
            <input type="button" value="-" className='button blue' onClick={clickhandler}/>
            <input type="button" value="1" className='button' onClick={clickhandler}/>
            <input type="button" value="2" className='button' onClick={clickhandler}/>
            <input type="button" value="3" className='button' onClick={clickhandler}/>
            <input type="button" value="+" className='button blue' onClick={clickhandler}/>
            <input type="button" value="0" className='button' onClick={clickhandler}/>
            <input type="button" value="." className='button' onClick={clickhandler}/>
            <input type="button" value="=" className='button button1 blue' onClick={calculate}/>
        </div>
    )
}
export default App;