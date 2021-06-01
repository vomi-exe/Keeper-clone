import React from "react";

function CreateArea(props) {
  const [note, setNote] = React.useState({
    title: "",
    content: ""
  });

  function titleData(e) {
    const data = e.target.value;
    setNote((prevValue) => ({
      title: data,
      content: prevValue.content
    }));
  }

  function contentData(e) {
    const data = e.target.value;
    setNote((prevValue) => ({
      title: prevValue.title,
      content: data
    }));
  }

  return (
    <div>
      <form>
        <input
          onChange={titleData}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={contentData}
          value={note.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            props.addNote(note);
            setNote( {
              title : "",
              content : ""
            })
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
