import React, { useState } from 'react'

export default function TextForm(props) {
    const handlUpClick = ()=>{
        setText(text.toUpperCase());
    }
    const handleLowClick = ()=>{
        setText(text.toLowerCase());
    }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const handleCopy = ()=>{
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const [text, setText] = useState("Enter text here");
  return (
    <>
    <div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
        </div>
        <div className="mb-3">
            <h1>{props.heading}</h1>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
            <textarea value={text} onChange = {handleOnChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handlUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={()=>{setText("")}}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(/[.!?]+/).length} sentences, {text.split("").length} words and {text.length} characters</p>
    </div>
    </>
  )
}
