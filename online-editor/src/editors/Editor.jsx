import {Controlled as ControlledEditor} from "react-codemirror2";


import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";

import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

function Editor(props){
    const {
        language,
        displayName,
        value,
        onChange
    } = props

    function handleChange(editor,data,value){
        onChange(value)
    }
    return(
        <div className = "editor-container">
            <div className="editor-title">
                {displayName}
                <button>O/C</button>
            </div>
            <ControlledEditor
                onBeforeChange = {handleChange}
                value = {value}
                className = "code-mirro-options"
                options = {{
                    lineWrapping:true,
                    lineNumbers:true,
                    mode:language,
                    theme:'material',

                }}
           />
        </div>
    )
}
export default Editor;