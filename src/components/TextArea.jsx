import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';


function TextArea(props){
    const [note, setNote] = useState({
        title: "",
        content: ""
    })


    const [isWriting, setIsWriting] = useState(false);

    function handleChange(event){
        const {name, value} = event.target;
        setNote(prevNote =>{
            return {
                ...prevNote,
                [name]: value
            }
        })
        
    }

    

    function expanding(event){
        setIsWriting(true);

    }

    function submittingNote(event){
        props.onAdd(note);
        setNote({
            title:"",
            content:""
        })
        event.preventDefault();
    }

    return (
        <div>


            <form className="create-note">
            {/* //////////////////////////  Title   ///////////////////// */}
            {isWriting? 
                <div>
                <input
                 name="title"
                  type="text" 
                  value={note.title} 
                  onChange={handleChange} 
                  placeholder="Title"
                  autoComplete="off"></input>
                <hr />
                </div> : null}

                {/* //////////////////////////  Content   ///////////////////// */}

                <textarea 
                name="content"
                value={note.content}
                onClick={expanding} 
                onChange={handleChange} 
                placeholder="Write a note"
                rows={isWriting? "3": "1"}
                >
                
                </textarea>

                
                <Zoom in={isWriting}>
                    <Fab onClick={submittingNote} type="submit">
                        <AddIcon />
                    </Fab>
                </Zoom>
                
            </form>
        </div>
    )
}

export default TextArea;