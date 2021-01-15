import React, { useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Login from "./components/Login";

import { useDispatch, useSelector } from "react-redux";
import {
  login,
  logout,
  selectUser,
  selectIsLoading,
} from "./features/userSlice";
import { auth } from "./firebase";
import Widgets from "./components/Widgets";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const user = useSelector(selectUser);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  const renderApp = () => {
    if (user && !isLoading) {
      return (
        <div>
          <Header />
          <div className="app-body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      );
    } else if (!user && !isLoading) {
      return <Login />;
    } else {
      return (
        <Loader
          className="loader"
          type="ThreeDots"
          color="#00BFFF"
          height={100}
          width={100}
        />
      );
    }
  };
  return <div className="app">{renderApp()}</div>;
}

export default App;
