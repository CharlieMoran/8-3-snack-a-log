import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Edit from "./Pages/Edit";
import Home from "./Pages/Home";
import New from "./Pages/New";
import Error from "./Components/Error"

function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <main>
          main
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/snacks" element={<Index />} />
            <Route path="/snacks/:id" element={<Show />} />
            <Route path="/new" element={<New />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </BrowserRouter>
  );
}

export default App;
