import Editor from "@monaco-editor/react";
import "./PythonEditor.css";

function PythonEditor({ onCodeChange }) {
  const [code, setCode] = useState("");

  const handleEditorChange = (value) => {
    setCode(value);
  };

  return (
    <div className="python-editor">
      <Editor
        height="400px"
        width="400px"
        defaultLanguage="python"
        defaultValue="# Write your Python code here"
        onChange={onCodeChange}
        theme="vs-dark"
      />

      <button onClick={() => onCodeExecute(code)} className="execute-button">
        Run Code
      </button>
    </div>
  );
}

export default PythonEditor;
