import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@layout/Layout';
import { FallbackLayout } from '@layout/FallbackLayout';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:id" element={<PostPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/form/:id" element={<FormPage />} />
          <Route path="/form/list" element={<FormListPage />} />
          <Route path="/form/upload" element={<FormUploadPage />} />
          <Route path="/form/list/response" element={<FormResponsePage />} />
          <Route path="/news/upload" element={<NewsUploadPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/form/my" element={<MyFormPage />} />
          <Route path="/form/my/response" element={<MyResponsePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/" element={<FallbackLayout />}>
          <Route path="/start" element={<StartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign-up/:id" element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const HomePage = lazy(() =>
  import('./pages/index/_HomePage').then(({ HomePage }) => ({
    default: HomePage,
  })),
);

const LoginPage = lazy(() =>
  import('./pages/login/_LoginPage').then(({ LoginPage }) => ({
    default: LoginPage,
  })),
);
const StartPage = lazy(() =>
  import('./pages/start/_StartPage').then(({ StartPage }) => ({
    default: StartPage,
  })),
);
const SignUpPage = lazy(() =>
  import('./pages/sign-up/_SignUpPage').then(({ SignUpPage }) => ({
    default: SignUpPage,
  })),
);
const NewsPage = lazy(() =>
  import('./pages/news/index/_NewsPage').then(({ NewsPage }) => ({
    default: NewsPage,
  })),
);
const PostPage = lazy(() =>
  import('./pages/post/_PostPage').then(({ PostPage }) => ({
    default: PostPage,
  })),
);
const SettingsPage = lazy(() =>
  import('./pages/settings/_SettingsPage').then(({ SettingsPage }) => ({
    default: SettingsPage,
  })),
);
const FormPage = lazy(() =>
  import('./pages/form/id/_FormPage').then(({ FormPage }) => ({
    default: FormPage,
  })),
);
const FormUploadPage = lazy(() =>
  import('./pages/form/upload/_FormUploadPage').then(({ FormUploadPage }) => ({
    default: FormUploadPage,
  })),
);
const NewsUploadPage = lazy(() =>
  import('./pages/news/upload/_NewsUploadPage').then(({ NewsUploadPage }) => ({
    default: NewsUploadPage,
  })),
);
const CalendarPage = lazy(() =>
  import('./pages/calendar/_CalendarPage').then(({ CalendarPage }) => ({
    default: CalendarPage,
  })),
);
const AdminPage = lazy(() =>
  import('./pages/admin/_AdminPage').then(({ AdminPage }) => ({
    default: AdminPage,
  })),
);
const FormListPage = lazy(() =>
  import('./pages/form/list/index/_FormListPage').then(({ FormListPage }) => ({
    default: FormListPage,
  })),
);
const FormResponsePage = lazy(() =>
  import('./pages/form/list/response/_FormResponsePage').then(
    ({ FormResponsePage }) => ({
      default: FormResponsePage,
    }),
  ),
);
const MyFormPage = lazy(() =>
  import('./pages/form/my/index/_MyFormPage').then(({ MyFormPage }) => ({
    default: MyFormPage,
  })),
);
const ProfilePage = lazy(() =>
  import('./pages/profile/_ProfilePage').then(({ ProfilePage }) => ({
    default: ProfilePage,
  })),
);
const MyResponsePage = lazy(() =>
  import('./pages/form/my/response/_MyResponsePage').then(
    ({ MyResponsePage }) => ({
      default: MyResponsePage,
    }),
  ),
);
