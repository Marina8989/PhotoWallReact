import React from 'react';

class Photo extends React.Component{
    render(){
        return(
            <li>
             <h3>{this.props.description}</h3>
             <img src={this.props.imageLink} style={{width: '150px'}}/>
            </li>
        )
    }
}

export default Photo