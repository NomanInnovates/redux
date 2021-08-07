import {useState} from 'react'
import {data} from './data';

export function useStudent(){

const [students,setStudents] = useState(data);
const [name, setName] = useState("")
const [stuClass, setStuClass] = useState("")
const [roll, setRoll] = useState("")
const [batch, setBatch] = useState("")
const [errorMessage, setErrorMessage] = useState('')
const [flag, setFlag] = useState(false)
const [updatedIndex, setUpdatedIndex] = useState(0)
const deleteHandler = (index) =>{
        let newStud = students.filter((stu,i)=> {
            if( i !== index){
                return stu
            }
        })
    console.log(newStud)
    }
const updateHandler = (student,index) =>{
    
    console.log("update stu",student)
    setUpdatedIndex(index)
    setName(student.name);
setStuClass(student.class);
setRoll(student.roll);
setBatch(student.batch);
setFlag(true)
    
}
// 
const ctaUpdateHandler = (student,index) =>{
if(name !== "" && batch !== "" && roll !== "" && stuClass !== ""){
    let student ={
    name,
    batch,
    roll,
    class:stuClass,
}
let updateStud = students.map((stud,index) => {
    if (updatedIndex === index) {
        return student
    } else {
        return stud
    }
})
console.log("student" ,student);
setStudents([...updateStud]);
setName('');
setStuClass('');
setRoll('');
setBatch('');
setFlag()
}
else{
setErrorMessage('Invalid inputs');
alert("wron");
}


}
// 
const ctaHandler = () => {
    if(name !== "" && batch !== "" && roll !== "" && stuClass !== ""){
    let student ={
    name,
    batch,
    roll,
    class:stuClass,
}
console.log("student" ,student);
setStudents([...students,student]);
setName('');
setStuClass('');
setRoll('');
setBatch('');
setErrorMessage('');
}
else{
setErrorMessage('Invalid inputs');
alert("wron");
}

}
return [students,name,stuClass,roll,batch,errorMessage,flag,updatedIndex,deleteHandler,ctaHandler,ctaUpdateHandler,updateHandler,setName,setBatch,setRoll,setStuClass]
}