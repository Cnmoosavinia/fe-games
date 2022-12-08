import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { UserContext } from "./context";
import { useState } from "react";
import Header from "./components/header.jsx";
import ReviewBoard from "./components/review-board.jsx";

function App() {
  const [user, setUser] = useState({});
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <div className="App">
          <Header />
          <ReviewBoard />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
