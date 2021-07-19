import { useEffect, useState } from "react";
import { getStudents } from "../../services/api";


const StudentsList = ()=>{

  const [students, setStudents] = useState([]);
 

  useEffect(()=>{
    
      const fetchStudents = async ()=>{
        const res = await getStudents();
        setStudents(res);

      }
      
      fetchStudents();
    

  },[])


  return <div>{
  students.map(s=><div>
    <span>name: </span>
    <span>{s.name}</span>


  </div>)}</div>;  
}



export default StudentsList

