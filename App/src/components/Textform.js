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

    const OnclickDecode =()=>{
        let decodedText = atob(text).trim();
        let newText = decodedText;
        setText(newText)
        console.log(setText);
        props.showAlert("The text is Decoded", "success");
    }
    

    // const inverseCase =()=>{
    //     let inverse = text;
    //     const inversed =(parameter)=>{
    //     let word = "";
    //     var len = parameter.length;
    //     for (let i = 0 ; i < len ; i++ ){
    //         let ch = parameter.charCodeAt(i);
    //         if(ch >='65' && ch <= '90'){
    //             ch = ch.Capatalise();
    //         }
    //         else{
    //             ch = ch + 32;
    //         }
    //         var inverseChar  = String.fromCharCode(ch);
    //         word += inverseChar;
    //     }
    //     return word;
    // }
    //     let newText = inversed(inverse);
    //     setText(newText);
    //     props.showAlert("Inverse Case is done","success");
    // }

    // const copyFun = async () =>{
    //     var text = document.getElementById("myBox");
    //     text.select();
    //     await navigator.clipboard.writeText(text.value);
    //     console.log("text has been copied to your clipboard");
    //     props.showAlert("Copied to clipboard", "success");
    // }
    


  return (
    <>
    <div className='container ' style={{color:props.mode==='dark'?'white':'black'}}>
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
        {/* <button className="btn btn-primary mx-1" onClick={inverseCase}>Inverse-Case</button> */}
        {/* <button className="btn btn-primary mx-1" Onclick={copyFun}>Copy Text</button> */}

    </div>
    <div className='contain mt-3 p-3' style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Get the preview of the <u>TextForm WebPage</u></h2>
        <p>Word Count : {text.split(" ").length}</p>
        <p>Number of Characters : {text.length}</p>
        <p>Time taken to Read all the text is {0.008 * text.split(" ").length} seconds</p>
        <h2><b>Preview</b></h2>
        <p>{text.length>0?text:"enter something to preview"}</p>
        {/* style={{color:props.mode==='dark'?'white':'black'}} */}

        

    </div>
    </>
  )
}

