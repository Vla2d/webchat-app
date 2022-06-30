import 'react-toastify/dist/ReactToastify.css';
import React, { useContext } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { Header, Container, NotificationsContainer } from './layout/index.js';
import {
  NotFound, Login, Main, SignUp,
} from './pages/index.js';
import Modal from './modals/Modal.jsx';
import { AuthProvider, ThemeProvider } from './providers/index.js';
import { authContext } from '../contexts/index.js';
import {
  logInPagePath, signUpPagePath, notFoundPagePath, chatPagePath,
} from '../routes.js';

function ChatRoute() {
  const auth = useContext(authContext);
  return auth.loggedIn ? <Main /> : <Navigate to={logInPagePath()} />;
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Container>
            <NotificationsContainer />
            <Modal />
            <Header />
            <Routes>
              <Route path={chatPagePath()} element={<ChatRoute />} />
              <Route path={logInPagePath()} element={<Login />} />
              <Route path={signUpPagePath()} element={<SignUp />} />
              <Route path={notFoundPagePath()} element={<NotFound />} />
            </Routes>
          </Container>
        </ThemeProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
