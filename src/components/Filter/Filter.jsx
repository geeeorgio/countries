import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filterSlice";

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <input onChange={(event) => dispatch(changeFilter(event.target.value))} />
  );
};

export default Filter;
