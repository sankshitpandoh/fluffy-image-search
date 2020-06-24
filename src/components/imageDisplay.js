import React from 'react';
import SingleImageItem from './singleImageItem.js';
import './stylesheets/imageDisplay.css'
import Loader from './Loader.js';

class ImageDisplay extends React.Component{
    render(){
        const items = this.props.data.map((x, index) => {
            return <SingleImageItem data = {x} key={index} />
        })
        return(
            <div className="image-display">
                {this.props.loading ? 
                    <Loader />
                    :
                    items   
                }
            </div>
        )
    }
}

export default ImageDisplay;