import Filter from "../components/Filter/Filter";
import NotesForm from "../components/NotesForm/NotesForm";
import NotesList from "../components/NotesList/NotesList";

const Notes = () => {
  return (
    <div>
      Notes
      <NotesForm />
      <Filter />
      <NotesList />
    </div>
  );
};

export default Notes;
