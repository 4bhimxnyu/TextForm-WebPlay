import React ,{useState} from 'react'

export default function Textform(props) {
    const [text , setText] = useState('enter the text');

    const OnClickFun =()=>{
        console.log("onclick button was clicked");
        setText('you clicked on the button already')
    }

    const OnChangeFun = (event)=>{
        console.log("onchange event has been called")
        setText(event.target.value)
    }
  return (
    <div>
        <h1>{props.heading}</h1>
            <div className="mb-3">
                <label for="myBox" className="form-label">enter your text here for analysis</label>
                <textarea className="form-control" id="myBox" rows="3" value={text} onChange={OnChangeFun}>This text will be dynamically changed</textarea>
            </div>
        <button className="btn btn-primary" onClick={OnClickFun}>Uppercase</button>
    </div>
  )
}
