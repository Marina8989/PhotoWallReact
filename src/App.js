import React, {Component} from 'react';
import Title from './components/Title';
import PhotoGallery from './components/PhotoGallery';

class App extends Component{
    render(){
        return(
            <div>
               <Title title={'Photowall'} />
               <PhotoGallery />
            </div>
        )
    }
}

export default App