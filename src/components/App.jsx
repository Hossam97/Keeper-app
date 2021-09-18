import React, { useState } from "react";
import Header from "./Header.jsx"
import Footer from "./Footer.jsx";
import NoteCard from "./NoteCard.jsx";
import TextArea from "./TextArea.jsx";

function App(){
    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        })
        
    }

    function deleteNotes(id){
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index != id;
            })
        })
        
    }

    return  <div>
        <Header />
        <TextArea onAdd={addNote} />
        {notes.map((noteItem, index) => {
            return <NoteCard 
            key={index}
            id={index}
            title={noteItem.title} 
            content={noteItem.content}
            onDelete={deleteNotes}
            />
        })}
        <div className="pageBottom">
        <Footer />
        </div>
    </div>
}

export default App;