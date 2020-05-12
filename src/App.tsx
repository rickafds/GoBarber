import React, { FC } from "react";

import GlobalStyle from "./styles/global";
import SignUp from "./pages/SignUp";

const App: FC = () => (
  <>
    <SignUp />
    <GlobalStyle />
  </>
);

export default App;
