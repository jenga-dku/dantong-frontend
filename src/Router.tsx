import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login/_LoginPage';
import { StartPage } from './pages/start/_StartPage';
import { EmailEntryPage } from './pages/sign-up/email/_EmailEntryPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/start" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up/email" element={<EmailEntryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
