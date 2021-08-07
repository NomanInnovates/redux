
import StudentList from './StudentList'
import {useStudent} from './useStudent'
function Students() {
 const [students,name,stuClass,roll,batch,errorMessage,flag,updatedIndex,deleteHandler,ctaHandler,ctaUpdateHandler,updateHandler,setName,setBatch,setRoll,setStuClass]
 = useStudent();
    return (
        <div>
            <h3>New Students Add</h3>
            <input type='text' value={name} name="Name" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
            <input type='text' value={ batch} name="Batch" placeholder="Batch" onChange={(e)=>setBatch(e.target.value)} />
            <input type='text' value={roll} name="Roll No" placeholder="Roll No" onChange={(e)=>setRoll(e.target.value)} />
            <input type='text' value={ stuClass} name="Class" placeholder="Class" onChange={(e)=>setStuClass(e.target.value)} />
           {
               flag ? 
               <button onClick={ctaUpdateHandler}>update</button>
               :
               <button onClick={ctaHandler}>Submint</button>
           }
            <p style={{backgroundColor:'red',color:'white'}}>
                {
                errorMessage
                }
            </p>

            <hr></hr>
            <h3>List of Students</h3>
            <table>
        
                <tr>
                <th>index</th>
                    <th>Name</th>
                    <th>Batch</th>
                    <th>Roll</th>
                    <th>Class</th>
                </tr>
                {
                    students.map((item,index)=>{
                        return <StudentList index={index} student={item} deleteHandler={deleteHandler} updateHandler={updateHandler} />
                    })
                }
         
            </table>
        </div>
    )
}

export default Students
