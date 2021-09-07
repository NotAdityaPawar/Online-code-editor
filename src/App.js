import { useState } from "react";
import Editor from "./editors/Editor";

function App() {
  const [html,sethtml] = useState('')
  const [js,setjs] = useState('')
  const [css,setcss] = useState('')

  const srcDoc = `
    <html>
      <body>${html}</body>
      <script>${js}</script>
      <style>${css}</style>
    </html>
  `
  return (
    <div>
      <div className="pane top-pane">
        <Editor
          language = "xml"
          displayName = "HTML"
          value = {html}
          onChange = {sethtml}
        />
        <Editor
          language = "css"
          displayName = "CSS"
          value = {css}
          onChange = {setcss}
        />
        <Editor
          language = "javascript"
          displayName = "JAVASCRIPT"
          value = {js}
          onChange = {setjs}
        />
      </div>
      <div className="pane botton">
        <iframe
          srcDoc = {srcDoc}
          title = "Output"
          sandbox ="allow-scripts"
          frameBorder = "0"
          width = "100%"
          height = "100%"
        />
      </div>
    </div>
  );
}

export default App;
