import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from '../src/Components/Layout';
import News from '../src/Components/News';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<News />} /> {/* Render News by default at root path */}
          <Route path='news' element={<News/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
