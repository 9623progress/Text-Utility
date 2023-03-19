// import logo from './logo.svg';
// import './App.css';

// import About from "./components/About";
import { useState } from "react";
import Alerts from "./components/Alerts";
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   // Switch,
//   Route,
//   Routes,
//   // Link
// } from "react-router-dom";

function App() {
const [Mode, setMode] = useState('light');
// const [bg, setBg] = useState('light');
const toggle =()=> {
    if(Mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#0d1642';
      ShowAlert("Dark mode Enable,success")
      document.title="Progress Dark Mode"
      // set("x");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      ShowAlert("Light mode Enable,success")
      document.title="Progress light Mode"
    }

   
}



const [Alert, setAlert] = useState(null);

const ShowAlert=( message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null)
  }, 2000);
}


  return (
    <>
    {/* <Router> */}
    <Navbar title="Progress" about="About Us" mode={Mode}  Toggle={toggle}/>
    <Alerts alert={Alert} mode={Mode}/>
          {/* <Routes> */}
          {/* <Route exact path="/about" element={ <div className="conatainer"><About/></div>}/> */}
          {/* <Route exact path="/" element={<TextForm heading="Enter the text" mode={Mode}  ShowAlert={ShowAlert}/>}/> */}
          <TextForm heading="Enter the text" mode={Mode}  ShowAlert={ShowAlert}/>
          {/* </Routes> */}
    {/* </Router> */}
      
    </>
  );
}

export default App;
