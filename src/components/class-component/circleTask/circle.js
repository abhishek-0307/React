import { Component } from "react";



class CircleTask extends Component{
    state={
        circles:[]
    }
    addCircles=()=>{
        this.setState(
            {
                circles:[...this.state.circles,false]
            }
        )
    }
    changeColor=(index)=>{
        //console.log(index,this.state.circles);
        this.setState({
            circles: this.state.circles.map((circle, i) => {
                if (i === index) {
                    return true; 
                } else {
                    return circle; 
                }
            })
        });
    }
    countColoredCircles = () => {
        return this.state.circles.filter(circle => circle).length;
    }
    render(){
        return(
            <div>
                <button onClick={this.addCircles}>click to  add circles</button>
                <h3>count of circles---{this.state.circles.length}</h3>
                <h3>Count of Colored Circles: {this.countColoredCircles()}</h3>
                {
                    this.state.circles.map((element,index)=><Circle bgcolr={element} changeColor={this.changeColor} index={index}/>)
                }
                
            </div>
        )
    }
}
export default CircleTask

class Circle extends Component{
    
    render(){
        return(
            <div style={{width:100,height:100,border:"2px solid black",borderRadius:"50%",backgroundColor:this.props.bgcolr?"black":null}} onClick={()=>this.props.changeColor(this.props.index)}></div>
        )
    }
}