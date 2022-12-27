import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Jobs from "./pages/Jobs";
import Job from "./pages/Job";
import AddNewJob from "./pages/AddNewJob";

function App() {
  return (
    <div className=" w-screen">
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/jobs" element={<Jobs />} />
          <Route exact path="/jobs/:id" element={<Job />} />
          <Route exact path="/jobs/new" element={<AddNewJob />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;