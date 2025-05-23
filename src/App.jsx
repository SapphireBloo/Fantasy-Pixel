// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import QuizPage from './components/QuizPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<QuizPage />} />
    </Routes>
  );
}
