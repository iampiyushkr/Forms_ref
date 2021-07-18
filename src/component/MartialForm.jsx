import { useState } from "react"
import {v4 as uuid} from "uuid"

export default function Martial({handleSubmit1}) {
    const [name, setName] = useState("")
    const [age, setAge] = useState()
    const [add, setAdd] = useState("")
    const [dep, setDep] = useState("")
    const [salary, setSalary] = useState()
    const [check, setCheck] = useState(false)
    const [img, setImg] = useState("")
    
    return <div>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /><br></br><br></br>
        <input type="Number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} /><br></br><br></br>
        <input type="text" placeholder="Address" value={add} onChange={(e) => setAdd(e.target.value)} /><br></br><br></br>
        <select onChange={(e) => setDep(e.target.value)}>
            <option value="CHE">Chemical</option>
            <option value="CSE">Computer</option>
            <option value="ME">Mechanical</option>
            <option value="ECE">Electrical</option>
        </select><br></br><br></br>
        <input type="number" placeholder="salary" value={salary} onChange={(e) => setSalary(e.target.value)} /><br></br><br></br>
        <label>Martial Status</label>
        <input type="checkbox" onChange={(e) => setCheck(true)} /><br></br><br></br>
        <input type="text" placeholder="Image Url" value={img} onChange={(e) => setImg(e.target.value)} /><br></br><br></br>
        <button onClick={() => {
            const payload={
                name: name,
                age: age,
                address: add,
                dep: dep,
                salary: salary,
                martial: check,
                img: img,
                id:uuid()

            }
            handleSubmit1(payload)
            setName("")
            setAge("")
            setAdd("")
            setDep("")
            setSalary("")
            setCheck(false)
            setImg("")
        }}>Submit</button>
        
    </div>
}