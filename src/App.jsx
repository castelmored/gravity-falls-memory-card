import { useState } from "react";
import "./App.css";
import LoadingPage from "./pages/LoadingPage";
import { useEffect } from "react";
import StartPage from "./pages/StartPage";

function App() {
  const [loading, setLoading] = useState(true);

  //Loading
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <>
      <div>
        <StartPage />
      </div>
    </>
  );
}

export default App;
