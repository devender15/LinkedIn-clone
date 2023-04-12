import React, { useEffect, useState } from "react";
import { auth } from "./lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";

function App() {
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);

  useEffect(() => {
    const isLoggedIn = () => {
      onAuthStateChanged(auth, (user) => {
        if (user) setIsScrollEnabled(true);
        else setIsScrollEnabled(false);
      });
    };

    return () => {
      isLoggedIn();
    };
  }, []);

  return (
    <div
      className={`${
        isScrollEnabled ? "overflow-y-auto" : "overflow-y-hidden"
      } max-h-screen`}
    >
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
