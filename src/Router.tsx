import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/login/_LoginPage';
import { StartPage } from './pages/start/_StartPage';
import { SignUpPage } from './pages/sign-up/_SignUpPage';
import { HomePage } from './pages/index/_HomePage';
import { Layout } from './components/Layout';
import { NewsPage } from './pages/news/_NewsPage';
import { PostPage } from './pages/post/_PostPage';
import { SettingsPage } from './pages/settings/_SettingsPage';
import { FormPage } from './pages/form/_FormPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<PostPage />} />
          <Route path="/calendar" element={<></>} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/form/:id" element={<FormPage />} />
        </Route>
        <Route path="/start" element={<StartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up/:id" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}
