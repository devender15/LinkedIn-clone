import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../lib/firebase.js";

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      console.log("loggedin!");
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    });
};
