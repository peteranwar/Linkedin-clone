import { useState } from "react";
import "./style.scss";
import Linkedin from "../../assets/images/LinkedIn.png";
import { Button } from "@material-ui/core";

import AccountCircle from "@material-ui/icons/AccountCircle";

import { firebaseApp, auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { login } from "../../features/userSlice";
import firebase from "firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          Login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profileUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => setError(error.message));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter a full name!");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            );
          });
      })
      .catch((err) => alert(err));
  };

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebaseApp
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <img src={Linkedin} alt="Linkedin" />

      {error && <p className="error">{error}</p>}
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name (required if registering) "
        />
        <input
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional) "
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button
          variant="contained"
          type="submit"
          onClick={loginToApp}
          color="primary"
          style={{ marginBottom: 25, width: 300 }}
        >
          {" "}
          Sign In
        </Button>
      </form>
      <Button
        variant="contained"
        onClick={loginWithGoogle}
        color="secondary"
        style={{ width: 300 }}
      >
        {" "}
        Login with Google
      </Button>

      <p>
        Not a member?<span onClick={register}>Register Now</span>
      </p>
    </div>
  );
}

export default Login;
