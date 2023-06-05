import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Header from "./components/Header";
import Search from "./routes/Search";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </>
  );
}

export default App;
