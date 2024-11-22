import React ,{useState} from 'react'

export default function Textform(props) {
    const [text , setText] = useState('enter the text');

    const OnClickFun =()=>{
        console.log("onclick button was clicked");
        let newText = text.toUpperCase();
        setText(newText); 
    }

    const OnChangeFun = (event)=>{
        console.log("onchange event has been called")
        setText(event.target.value)
    }

    const OnclickLower = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <label for="myBox" className="form-label">enter your text here for analysis</label>
                <textarea className="form-control" id="myBox" rows="3" value={text} onChange={OnChangeFun}>This text will be dynamically changed</textarea>
            </div>
        <button className="btn btn-primary mx-2" onClick={OnClickFun}>Uppercase</button>
        <button className="btn btn-danger" onClick={OnclickLower}>Lowercase</button>
    </div>
    <div className='contain'>
        <h2>Get the preview of the textForm WebPage</h2>
        <p>Word Count : {text.split(" ").length}</p>
        <p>Number of Characters : {text.length}</p>
        <p>Time taken to Read all the text is {0.008 * text.split(" ").length} seconds</p>
        
    </div>
    </>
  )
}

