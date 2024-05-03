import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login/_LoginPage';
import { StartPage } from './pages/start/_StartPage';
import { SignUpPage } from './pages/sign-up/_SignUpPage';
import { HomePage } from './pages/index/_HomePage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up/:id" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
