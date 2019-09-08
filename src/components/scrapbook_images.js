import React from 'react';

export default props => {
    console.log("scrapbook images props",props);
    const {src,style} = props.about;
    return (
        <img className="scrapbook-image" src={src} style={style}/>
    )
}