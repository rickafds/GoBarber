import React, { FC } from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';

const App: FC = () => (
  <>
    <SignIn />
    <GlobalStyle />
  </>
);

export default App;
