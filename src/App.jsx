import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from '../src/Components/Layout';
import News from '../src/Components/News';
import './App.css';

function App() {
  return (
    <Router basename="/NewsAPI_With_ViteJs">
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<News />} /> {/* Render News by default at root path */}
          <Route path='categories' element={<News />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
