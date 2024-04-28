import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login/_LoginPage';
import { StartPage } from './pages/start/_StartPage';
import { MailEntryPage } from './pages/sign-up/email/_MailEntryPage';
import { InfoEntryPage } from './pages/sign-up/info/_InfoEntryPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/start" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up/email" element={<MailEntryPage />} />
        <Route path="/sign-up/info" element={<InfoEntryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
