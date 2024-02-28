import { Component } from "react";


class ListTask extends Component{
    constructor(){
        super();
        this.state={
            Product:[]
        }

    fetch("https://fakestoreapi.com/products").then(response=>response.json()).then(response=>
    
    this.setState(
        {
        Product:response
        }
    )
    )
    }
    render(){
        //console.log(this.state.Product);
        return(
            <>
                <ul>
                    {
                        this.state.Product.map((eachobj=>
                            <>
                            
                           <li>
                            <ol>
                                <li>
                                    {eachobj.title}
                                </li>
                                <li>
                                    <img src={eachobj.image} height={50} width={50}></img>
                                </li>
                                <li>
                                    {eachobj.price}
                                </li>
                            </ol>
                           </li>
                            
                            </>
                            ))
                        
                    }
                </ul>
            </>
        )
    }
}

export default ListTask