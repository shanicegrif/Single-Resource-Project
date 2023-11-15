import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import BountyPoster from "../Components/BountyPoster.jsx";
import Index from "../Components/Index";
import Nav from "../Components/NavBar";
import Home from "../Components/Home.jsx";
import New from "../Components/New";
import Show from "../Components/Show";
import Update from "../Components/Update";

function App() {
  return (
    <>
      <div>
        <Router>
          <Nav />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/characters" element={<Index />} />
              <Route path="/characters/new" element={<New />} />
              <Route path="/characters/:id" element={<Show />} />
              <Route path="/characters/:id/edit" element={<Update />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
