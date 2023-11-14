import React from 'react'
export default function Filter(props) {
    const filterhandler=(title)=>{
        props.setmycategory(title);
        // console.log("clicked");
    }
    return (
        <div className="great">
            <div className="filter">
                {
                    props.data.map((element) => {
                        return <div className="grandparent" key={element.id}>
                            <button onClick={()=>filterhandler(element.title)}>{element.title}</button>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
