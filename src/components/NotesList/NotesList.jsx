import { useDispatch, useSelector } from "react-redux";
import { deleteNotes } from "../../redux/notesSlice";

const NotesList = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes.items);
  const filter = useSelector((state) => state.filter.text);
  const filtered = notes.filter((note) =>
    note.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filtered.map((value) => (
        <li key={value.id}>
          {value.text}
          <button
            onClick={() => {
              dispatch(deleteNotes(value.id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NotesList;
