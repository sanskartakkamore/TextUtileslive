import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log('Upper Case button was clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case" , "success");
    }

    const handleloClick = ()=>{
        //console.log('Lower Case button was clicked');
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case" , "success");
    }
    const handleClearClick = ()=>{
        //console.log('Clear the text Area');
        let newText = ("");
        setText(newText);
        props.showAlert("Your Text Has Been Cleared" , "success");
        
    }

    const handleOnChange = (event)=>{
        //console.log('On change');
        setText(event.target.value)
        
    }
    
    const handleCopy = ()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        // document.getSelection().removeAllRange();

        props.showAlert("Copied to Clipboard" , "success");
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Your ExtraSpace Has Been Removed" , "success");
    }

    const[text, setText]= useState('')
  return (
      <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <div className="mb-3">
            <h3 className='my-2'>{props.heading}</h3> 
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'black':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"/>
        </div>
            <button  disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Covert to UpperCase</button>
            <button  disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleloClick}>Covert to LowerCase</button>
            <button  disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
            <button  disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
            <button  disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Space</button>


    </div>

    <div className="container my-3">
        <h3 style={{color:props.mode==='dark'?'white':'black'}}>Your Text Summary</h3>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} Charcerters</p>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minute read </p>
        <h4 style={{color:props.mode==='dark'?'white':'black'}}>Preview</h4>
        <p style={{color:props.mode==='dark'?'white':'black'}}>{text.length>0?text:"Enter Somethiong in the above text box to preview here..."}</p>
    </div>
    

    </>
  )
}

