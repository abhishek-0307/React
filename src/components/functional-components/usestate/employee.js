import React, { useState } from "react"



const EmployeeTask=()=>{
    const [currentEmployee,setEmployee]=useState([
        {name:"abhi",age:22,designation:"React"},
        {name:"amjad",age:22,designation:"Angular"},
        {name:"chintu",age:22,designation:"Javascript"}]);
        const addEmployee = () => {
            const newEmployee = {
                
                name: `sai `,
                age: 25,
                designation: "html"
            };
            setEmployee([...currentEmployee, newEmployee]);
        };
        const deleteEmployee=(index)=>{
            const updatedEmployees = currentEmployee.filter((emp,i) => i !== index);
            setEmployee(updatedEmployees);
        }
    return (
        <>
            <h2>Employee List</h2>
            <ol>
            {currentEmployee.map((employee,index)=>
            (<li key={employee.index}>Name:{employee.name},Age:{employee.age},Designation:{employee.designation}
            <button onClick={() => deleteEmployee(index)}>Delete</button></li>
            ))}
            </ol>
            <button onClick={addEmployee}>add</button>
        </>
    )
}
export default EmployeeTask