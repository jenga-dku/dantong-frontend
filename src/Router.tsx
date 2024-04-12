import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login/_LoginPage';

export default function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/login" element={<LoginPage />} />
         </Routes>
      </BrowserRouter>
   );
}
