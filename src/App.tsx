import React, { FC } from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';

import { AuthProvider } from './context/AuthContext';

const App: FC = () => (
  <>
    <AuthProvider>
      <SignIn />
    </AuthProvider>
    <GlobalStyle />
  </>
);

export default App;
