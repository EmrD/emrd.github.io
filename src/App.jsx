import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Header from "./Header";
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import OpenVideoButton from "./Iframe";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyBzaDV5SgAqKXGH26Kx2D-QwAT0FwV1bxo",
    authDomain: "emrd-personal-website.firebaseapp.com",
    projectId: "emrd-personal-website",
    storageBucket: "emrd-personal-website.firebasestorage.app",
    messagingSenderId: "341390270593",
    appId: "1:341390270593:web:ab0ea50b5e4d24bd3ced80"
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const type = urlParams.get("state");
      const key = urlParams.get("key");

        const docRef = doc(db, key, "video");
        try {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setVideoData(docSnap.data());
          } 
        } catch (err) {}
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {videoData && <OpenVideoButton iframeSrc={videoData.success} />}
      <TopBar />
      <Header />
      <footer className="bg-white shadow-inner py-4 text-center text-gray-500 text-sm">
        Made by EmrD, {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
