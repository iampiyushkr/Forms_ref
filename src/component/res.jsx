import "./form1.css"

export default function Show1({ itemList,handleToggle }) {
        console.log(itemList.Title)
    return <div className="list">
        {itemList.map(e => <div key={e.id} >
            <table style={{border:1,marginLeft:270}}>
                <tr>
                    <td>Title</td>
                    <td>{e.Title }</td>
                </tr>
                 <tr>
                    <td>Body</td>
                    <td>{e.Body }</td>
                </tr>
                 <tr>
                    <td>Author</td>
                    <td>{e.Author }</td>
                </tr>
           
           
            
            {e.Private ? <tr>
                <td>Private</td>
                <td>Private</td>
            </tr> : <tr>
                <td>Private</td>
                <td>Not-Private</td>
                </tr>
                }
                 </table>
            <button onClick={()=>handleToggle(e.id)}>Toggle</button><br></br><br></br>
        </div>)}
    </div>
}
