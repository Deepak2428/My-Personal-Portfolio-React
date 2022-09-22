import React from "react";
function Notes(Props)
{
    function del()
    {
        var id=Props.id;
        Props.del(id);
    }
    return <div className="notes">
        <h1>{Props.title}</h1>
        <p>{Props.content}</p>

        <button onClick={del}>Delete</button>
    </div>
}

export default Notes