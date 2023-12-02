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
