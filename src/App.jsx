import React from "react";
import TopBar from "./TopBar";
import Header from "./Header";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopBar />

      <Header />

      <footer className="bg-white shadow-inner py-4 text-center text-gray-500 text-sm">
        by EmrD, {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
