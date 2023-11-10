import Home from "./components/Home";
import NoPage from "./components/NoPage";
import SignUp from "./components/SignUp";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
