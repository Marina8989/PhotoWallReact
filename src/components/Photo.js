import React from 'react';

class Photo extends React.Component{
    render(){
      const post = this.props.post;
      return <figure className="figure">
          <img className="photo" src={post.imageLink} alt={post.description}/>
          <figcaption><p>{post.description}</p></figcaption>
          <div className="button-container">
           <button className="remove-button" onClick={() => this.props.removePhoto(post)}>Remove</button>
          </div>
      </figure>
    }
}

export default Photo