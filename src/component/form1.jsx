import {  useState } from "react"
import "./form1.css"
import {v4 as uuid} from "uuid"
export default function Form1({ handleSubmit }) {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [check, setCheck] = useState(false)
    const [author,setAuthor]=useState("")
    //const counterRef = useRef()
    // const handleToggle =()=> {
    //     counterRef.current.focus()
    // }
    return <div className="form1">
        <label>Title</label>
        <input type="text" placeholder="Title"  onChange={(e) => setTitle(e.target.value)}/><br></br><br></br>
        <label >Body</label>
        <input type="text" placeholder="Body" onChange={(e) => setBody(e.target.value)} /><br></br><br></br>
         <label >author</label>
        <input type="text" placeholder="Author"  onChange={(e) => setAuthor(e.target.value)}/><br></br><br></br>
        <label >Private</label>
        <input type="checkbox" onChange={() => setCheck(true)} />
        
        
        <label >Choose blog file</label>
        <input type="file" id="blogFile" /><br></br><br></br>
        <button onClick={() => {
           const payload = {
                Title:title,
               Body: body,
               Author:author,
               Private:check,
                id: uuid()
               
            }
             handleSubmit(payload)
            setTitle("")
             setBody("")
        }} >subbmit</button>
    </div>
} 