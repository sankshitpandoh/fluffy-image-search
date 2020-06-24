import React from 'react';
import './stylesheets/SingleImageItem.css';
import Loader from './Loader';

class SingleImageItem extends React.Component{
    state = {
        imageLoading: true
    }

    handleImageLoad = () => {
        this.setState({
            imageLoading: false
        })
    }

    render(){
        return(
            <div className="single-image-container">
                {this.state.imageLoading &&
                    <div className="image-loader-container">
                        <Loader />
                    </div>
                }
                <img  src={this.props.data.webformatURL} onLoad ={this.handleImageLoad} alt="single-result" />
            </div>
        )
    }
}

export default SingleImageItem;