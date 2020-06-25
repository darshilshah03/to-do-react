import React from 'react';
import Radium from 'radium';

class AddTodo extends React.Component{

    state = {
        title : ''
    }

    changeVal = (e) =>  {
        this.setState({
            title : e.target.value
        })
    }


    render() {
        return(
            <div>
                <form>
                    <input type="text" placeholder="Add todo" style={style} value={this.state.title} onChange={this.changeVal}></input>
                    <button style={btnStyle} onClick = {this.props.addTodo.bind(this,this.state.title)} type="button">Submit</button>

                </form>
            </div>
        )
    }
}

const style = {
    border : '2px black solid',
    boxShadow : '1px 2px 2px grey',
    margin : '20px',
    padding : '10px',
    width : '80%'
}

const btnStyle = {
    margin : '20px',
    height : '40px',
    width : '60px',
    color:'white',
    backgroundColor : 'black',
    float : 'right',
    [':hover'] : {
        animation : 'grow infinite 2s linear',
    }
}

export default Radium(AddTodo);