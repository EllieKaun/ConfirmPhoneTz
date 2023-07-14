import React from "react";
import { auth } from "config/firebase/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { MainPage, LoginPage } from "pages";

function App() {
  const [user] = useAuthState(auth);
  return user ? <MainPage /> : <LoginPage />;
}

export default App;
