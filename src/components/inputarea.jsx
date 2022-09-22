import React, { useState } from "react";
//import notes from "./Allnotes";



function Inputarea(props)
{
    function update(event)
    {
        event.preventDefault();
        var title=event.target.title.value;
        var content=event.target.content.value;
        event.target.title.value="";
        event.target.content.value="";
        props.add(title,content);
    }
    return (
        <div className="inputForm">
            <form className="form" onSubmit={update}>
                <input  placeholder="Title" name="title" />
                <textarea  placeholder="Take a Note here .." rows="3" name="content"/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}


export default Inputarea