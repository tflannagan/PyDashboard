import { useState } from "react";
import PythonEditor from "./components/PythonEditor";
import "./App.css";
import Header from "./components/Header";
import ResultDisplay from "./components/ResultDisplay";

function App() {
  const [result, setResult] = useState("");

  const handleCodeExecute = async (codeToRun) => {
    try {
      const response = await fetch("http://localhost:3001/execute-python", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: codeToRun }),
      });
      const data = await response.json();
      if (data.stderr) {
        setResult(`Error: ${data.stderr}`);
      } else {
        setResult(data.stdout);
      }
    } catch (error) {
      console.error("Error executing Python code:", error);
      setResult("Error executing code. See console for details.");
    }
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  return (
    <div className="App">
      <Header />
      <PythonEditor onCodeChange={handleCodeChange} />
      <ResultDisplay result={result} />
    </div>
  );
}

export default App;
