import "./ResultDisplay.css";

function ResultDisplay({ result }) {
  return (
    <div className="result-display">
      <h3>Output:</h3>
      <pre>{result}</pre>
    </div>
  );
}

export default ResultDisplay;
