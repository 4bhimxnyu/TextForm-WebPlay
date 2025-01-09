import React ,{useState} from 'react'

export default function Textform(props) {
    const [text , setText] = useState('enter the text');

    const OnClickFun =()=>{
        console.log("onclick button was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const OnChangeFun = (event)=>{
        console.log("onchange event has been called")
        setText(event.target.value);
        
    }

    const OnclickLower = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const OnclickClear = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const OnclickEncode=()=>{
        let encodedText = btoa(text).trim();
        let newText = encodedText;
        setText(newText)
        console.log(setText);
        props.showAlert("The text is Encoded", "success");
    }

    const OnclickDecode=()=>{
        let decodedText = atob(text).trim();
        let newText = decodedText;
        setText(newText)
        console.log(setText);
        props.showAlert("The text is Decoded", "success");
    }



  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label" >enter your text here for analysis</label>
                <textarea className={`form-control text-${props.mode==='light'?'dark':'light'} `} id="myBox" rows="3" value={text} onChange={OnChangeFun} style={{backgroundColor:props.mode==='dark'?'#212530':'white'}}>This text will be dynamically changed</textarea>
            </div>
        <button className="btn btn-primary mx-1" onClick={OnClickFun}>Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={OnclickLower}>Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={OnclickClear}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={OnclickEncode}>Encode</button>
        <button className="btn btn-primary mx-1" onClick={OnclickDecode}>Decode</button>
        {/* <button className="btn btn-success mx-1" onClick={OnclickTrim}>Trim</button> */}
        {/* <button className="btn btn-alert mx-1 " onClick={InvereCase}>Inverse Case</button> */}
        {/* <!-- Example single danger button --> */}
     
        <div className="btn-group">
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Bold</a></li>
            <li><a className="dropdown-item" href="/">Normal</a></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Separated link</a></li>
        </ul>
        </div>
    </div>
    <div className='contain' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Get the preview of the textForm WebPage</h2>
        <p>Word Count : {text.split(" ").length}</p>
        <p>Number of Characters : {text.length}</p>
        <p>Time taken to Read all the text is {0.008 * text.split(" ").length} seconds</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"enter something to preview"}</p>
        {/* style={{color:props.mode==='dark'?'white':'black'}} */}

        

    </div>
    </>
  )
}

