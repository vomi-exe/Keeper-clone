import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = React.useState([]);

  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }


  function itemDelete(id) {
    setNotes(prevItems => {
      return notes.filter((note, index) => {
        return index !== id;
      });
    });
  }


  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      <div>
        {notes.map((note, index) => (
          <Note
            key={index}
            index={index}
            title={note.title}
            content={note.content}
            itemDelete = {itemDelete}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;
