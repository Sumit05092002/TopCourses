import React from 'react'

export default function Button(props) {
    const filterhandler=(title)=>{
        props.setmycategory(title)
    }
    return (
        <button onClick={filterhandler(props.title)} >{props.buttonname}</button>
    )
}
