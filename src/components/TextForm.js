import React, {useState} from 'react';



function TextForm(props) {
    const handelUpCase =()=>{
        //console.log("jai mata di");
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handelClearText =()=>{
      //console.log("jai mata di");
      let newText = " ";
      setText(newText);
    }
    const handelLowCase = ()=>{
      //console.log("jai mata di");
      let newText = text.toLowerCase();
      setText(newText);
    }
    const handelOnChange=(event)=>{
        //console.log("jai shree ram")
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Your Name");
  return (
    <>
    <div className='container' style={{color: props.mode === 'light'? 'black': 'white'}}>
      <h1>{props.title}</h1>
      <div className='mb-3'>
        <textarea className='form-control' value={text} style= {{backgroundColor: props.mode === 'light'? 'white': 'gray', color: props.mode === 'light'? 'black': 'white'}} onChange={handelOnChange} id='mybox' rows='8'></textarea>
      </div>
      <button onClick={handelUpCase} className='btn btn-primary mx-1'>Convert UpperCase</button>
      <button onClick={handelLowCase} className='btn btn-primary mx-1'>Convert LowerCase</button>
      <button onClick={handelClearText} className='btn btn-primary mx-1'>Clear Text</button>
    </div>
    <div style={{color: props.mode === 'light'? 'black': 'white'}}>
      <h1>Yor Text Summery</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    <h2>Preview</h2>
    <p>{text}</p>
    </>
  );
}

export default TextForm;
