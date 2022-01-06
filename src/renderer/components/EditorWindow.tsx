import React, {useState} from 'react'
import MonacoEditor from 'react-monaco-editor';

const options = {
  selectOnLineNumbers: true,
  roundedSelection: false,
  readOnly: false,
  cursorStyle: "line",
  automaticLayout: false,
};

export default function EditorWindow() {

  let [editor, setEditor] = useState(null)


  let onChange = (editor_text, e) => {
    console.log('onChange', editor_text, e);

    localStorage.editorSavedText = editor_text;
  }

  let monacoEditorLoaded = (__editor__, monaco) => {
    console.log("__Editor__ loaded")
    __editor__.focus();
    setEditor(__editor__)

    // if (localStorage.editorSavedText === undefined) {
    //   localStorage.editorSavedText = EXAMPLE_TEXT;
    //   console.log("loaded example text")
    //   return
    // }
  }
  return (
    <>
       <MonacoEditor
                      height="100vh"
                      width="100vw"
                      language="javascript"
                      theme="vs-dark"
                      defaultValue={localStorage.editorSavedText}
                      // options={options}

                      onChange={onChange}
                      // editorDidMount={monacoEditorLoaded}
                      // theme="myCoolTheme"
                    />
    </>
  )
}
