import { Routes, Route } from "react-router-dom";
//import Home from "./pages/Home";
import News from "./pages/news.tsx";

function App() {
  return (
    <Routes>
      {/*<Route path="/" element={<Home />} />*/}
      <Route path="/news" element={<News />} />
    </Routes>
  );
}

export default App;