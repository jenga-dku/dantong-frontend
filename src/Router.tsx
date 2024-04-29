import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login/_LoginPage';
import { StartPage } from './pages/start/_StartPage';
import { SignUpPage } from './pages/sign-up/_SignUpPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/start" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />}>
          <Route path="/sign-up/email" element={<></>} />
          <Route path="/sign-up/info" element={<></>} />
          <Route path="/sign-up/password" element={<></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
