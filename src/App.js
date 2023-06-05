import { Route, Routes } from 'react-router-dom';

import LoginPage from './pages/Login';
import DonorPage from './pages/Donor';
import DoctorPage from './pages/Doctor';
import AdminPage from './pages/Admin';
import RegisterPage from './pages/Register';


function App() {
  return (
    <Routes>
      <Route path='/' exact element={<LoginPage />} />
      <Route path='/donor' element={<DonorPage />} />
      <Route path='/doctor' element={<DoctorPage />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
