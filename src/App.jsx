import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Country from "./pages/Country";
import SearchCountry from "./pages/SearchCountry";
import Header from "./components/Header/Header";
import Notes from "./pages/Notes";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryId" element={<Country />} />
        <Route path="/searchCountry" element={<SearchCountry />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  );
}

export default App;
