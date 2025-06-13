import { useDispatch } from "react-redux";
import { addNotes } from "../../redux/notesSlice";
import { nanoid } from "@reduxjs/toolkit";

const NotesForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.elements.text.value;

    dispatch(addNotes({ text: value, id: nanoid() }));
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input name="text" />
      <button type="submit">Create Notes</button>
    </form>
  );
};

export default NotesForm;
