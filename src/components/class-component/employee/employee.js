import { Component } from "react";



class EmployeesComponent extends Component{
    constructor(){
        super()
        this.state={
            employees:[
                {
                    name:"Abhi",
                    designation:"React",
                    salary:20000
                },
                {
                    name:"Amjad",
                    designation:"Angular",
                    salary:25000

                },
                {
                    name:"sai",
                    designation:"Javascript",
                    salary:30000

                },
                {
                    name:"Raju",
                    designation:"React",
                    salary:20000

                },
                {
                    name:"Pradeep",
                    designation:"Angular",
                    salary:25000

                },
                {
                    name:"Deepthi",
                    designation:"Javascript",
                    salary:30000

                },
                {
                    name:"Akhil",
                    designation:"React",
                    salary:35000

                },
                {
                    name:"Laxmi",
                    designation:"Angular",
                    salary:28000

                },
                {
                    name:"Shiva",
                    designation:"Javascript",
                    salary:35000

                },
                {
                    name:"chintu",
                    designation:"React",
                    salary:20000

                }

            ]
        }
    }
    reactFunction=()=>{
        let result=this.state.employees.filter((val)=>val.designation=="React")
        this.setState({
            employees:result
        })
    }
    angularFunction=()=>{
        let result=this.state.employees.filter((val)=>val.designation=="Angular")
        this.setState({
            employees:result
        })
    }
    javascriptFunction=()=>{
        let result=this.state.employees.filter((val)=>val.designation=="Javascript")
        this.setState({
            employees:result
        })
    }
    
    render(){
        return(
            <div>
                <button onClick={this.reactFunction}>React</button>
                <button onClick={this.angularFunction}>Angular</button>
                <button onClick={this.javascriptFunction}>Javascript</button>
                <table border={2}>
                    <tr>
                        <td>name</td>
                        <td>designation</td>
                        <td>salary</td>
                    </tr>
                    {
                        this.state.employees.map((eachobject=>{
                            return(
                                <tr>
                                    <td>{eachobject.name}</td>
                                    <td>{eachobject.designation}</td>
                                    <td>{eachobject.salary}</td>
                                </tr>
                            )
                        }))
                    }
                    
                </table>

            </div>
        )
           
        
        
    }
}
export default EmployeesComponent