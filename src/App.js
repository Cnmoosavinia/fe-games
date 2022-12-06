import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header.jsx";
import ReviewBoard from "./components/review-board.jsx";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ReviewBoard />
      </div>
    </BrowserRouter>
  );
}

export default App;
