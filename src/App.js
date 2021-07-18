//import logo from './logo.svg';
import axios from "axios"
import Name from "./component/ref.jsx"
import Form1 from "./component/form1.jsx"
import './App.css';
import { useState } from "react";
import Show1 from "./component/res.jsx"
import Martial from "./component/MartialForm.jsx"
import Marr from "./component/marrgRes.jsx"
function App() {
  const [printres, setPrintRes] = useState([])
  const [show,setShow]=useState([])
  const handleSubmit = (item) => {
    setPrintRes([...printres,item])
    
  }
  const handleToggle = (id) => {
   const newTodo = printres.map(el => (
            el.id === id ? { ...el, Private: false } : el
      ))
        setPrintRes(newTodo)
  }
  console.log(2)
  const handleSubmit1 = (item) => {
   axios.post("http://localhost:3001/form", item).then(() => {

            getData();
        });
  }

  const getData = () => {
    axios.get("http://localhost:3001/form").then(({ data }) => {
      setShow(data)
    })
    console.log(show)
  }
  return (
    <div className="App">
      <Name />
      <Form1 handleSubmit={handleSubmit} />
      <Show1 handleToggle={handleToggle} itemList={printres} />
      <Martial handleSubmit1={handleSubmit1} />
      <Marr marrList={ show}/>
    </div>
  );
}

export default App;
