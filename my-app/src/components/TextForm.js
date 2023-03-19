import React ,{ useState } from 'react';

//rfc
//set count and update it
export default function TextForm(props) {
    

    const uppercase= ()=>{
      // console.log(" "+text)
      let result = text.toUpperCase();
      setText(result);
      props.ShowAlert("Converted to Uppercase","success:")
      }
     const Lowercase= ()=>{
        // console.log(" "+text)
        let result = text.toLowerCase();
        setText(result);
        props.ShowAlert("Converted to Lowercase","success:")
      }
    const Replace= ()=>{
    
      let a=prompt("Find");
      let b=prompt("Replace");
      let newText = text.replaceAll(a, b);
      setText(newText);
      props.ShowAlert("All letters are Replaced","success:")
      }

    const handleOnChange=(event)=>{
      setText(event.target.value);
    }
    const [text, setText] = useState('');
    //const [variable, Setfunction] = useState("By default value");

  return (
    <>
    <div className="container">
    <h1 className={`text-${props.mode==='light'? 'dark':'light'}`}>{props.heading} </h1>
    <div className="mb-3" >
        
        <textarea className={`form-control text-${props.mode==='light'? 'dark':'light'} bg-${props.mode==='light'? 'light':'secondary'}`} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
    </div>
    <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3 mx-2"  onClick={uppercase }>Convert to Uppercase</button>
        
        <button type="submit" className="btn btn-primary mb-3 mx-2" onClick={Lowercase}>Convert to Lowercase</button>
        <button type="submit" className="btn btn-primary mb-3 mx-2" onClick={Replace}>Replace</button>

    </div>
    
    </div>
    <div className={`container text-${props.mode==='light'? 'dark':'light'}` }>
      <p>No. of words={text.split(' ').length-1}</p>
      <p>No. of Charecter={text.length}</p>
      <p>Time to read={(text.split(' ').length-1)/125}</p>
      <h3>Preview</h3>
      <h6>{text}</h6>

      </div>

    </>
  )
}
