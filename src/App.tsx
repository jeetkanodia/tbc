import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<p>hi</p>} />
          <Route path="/about" element={<h1>About</h1>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
