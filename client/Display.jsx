import React from 'react';

function Display (props) {
    // const arr = []
    // for (let i = 0; i < props.images.length; i++) {
    //     arr.push(<img key={i} src={props.images[i]}></img>)
    // }

    // return arr;
    return <img src={props.images}></img>
    
}

export default Display;