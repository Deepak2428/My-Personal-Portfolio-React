import React,{useState} from "react";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import Notes from "./Notes.jsx";
import Inputarea from "./inputarea.jsx";
function App()
{
    const[notes,addNotes]= useState([])

    function update(title,content)
    {
        var newobj={title:title,content:content};
        addNotes(prevValue=>{
            return [...prevValue,newobj]
        })
    }
    function deleteNote(id)
    {
        console.log(id);
        addNotes(prevValues=>{
            return prevValues.filter((items,index)=>{
                return index!==id;
            })
        })
    }
    function createNote(note,index)
    {
        return <Notes
                    key={index}
                    id={index} 
                    title={note.title}
                    content={note.content}
                    del={deleteNote}
                />
    }
    return <div>
       <Header />
       <Inputarea add={update}/>
       {(notes.length>0)?notes.map(createNote):""}
       <Footer />
    </div>
}

export default App;