import { Component } from "react";



class TableTask extends Component{

constructor(){
    super();
    this.state={
        products:[]
    }
    fetch("https://fakestoreapi.com/products").then(response=>response.json()).then(response=>
    
    this.setState(
        {
        products:response
        }
    )
    )

    
    }
    render(){
        console.log(this.state.products);
        return(
            <>
              <table border={2} style={{borderCollapse:"collapse"}}>
                {
                    this.state.products.map((eachobject=>
                        <tr>
                            <td>{eachobject.id}</td>
                            <td>{eachobject.title}</td>
                            <td>{eachobject.price}</td>
                            <td>{eachobject.description}</td>
                            <td><img src={eachobject.image} height={100} width={50}></img></td>
                        </tr>))
                }
                </table>  
            </>
        )
    }
}

export default TableTask;