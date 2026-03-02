import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/:id" element={<ProfilePage />} />
        <Route path="/" element={<Navigate to="/chenwei19880101" replace />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
