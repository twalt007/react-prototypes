import React from "react"

export default function(props){
    console.log("feild props",props)

    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input {...props} className="form-control"></input>
        </div>
    )
}