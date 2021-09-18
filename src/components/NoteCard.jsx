import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';


function NoteCard(props){
    
    function deletingNote(){
        props.onDelete(props.id);
    }
    return (
        <div className="note">
            <h1 className="title">{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={deletingNote}>
                <DeleteIcon />
            </button>
        </div>
    )
}

export default NoteCard;