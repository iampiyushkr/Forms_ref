import "./form1.css"
export default function Marr({ marrList }) {
    return <div>
        {marrList.map(e =>
            <table key={e.id} className="table">
                 <tr>
                    <td>
                        <img src={ e.img} alt="good"/>
                    </td>
                </tr>
                <tr>
                    <td>Name</td>
                    <td>{e.name }</td>
                </tr>
                 <tr>
                    <td>Age</td>
                    <td>{e.age }</td>
                </tr>
                 <tr>
                    <td>Address</td>
                    <td>{e.address }</td>
                </tr>
                 <tr>
                    <td>Depatment</td>
                    <td>{e.dep }</td>
                </tr>
                 <tr>
                    <td>Salary</td>
                    <td>{e.salary }</td>
                </tr>
                 <tr>
                    <td>Martial status</td>
                    { e.martial?<td>Marride</td>:<td>Not Marride</td>}
                </tr>
               
            </table>
            )}
    </div>
}