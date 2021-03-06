import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import "./TinyMCE.css"

const TinyMce = () => {
    const editorRef = useRef(null);
   const log = () => {
     if (editorRef.current) {
       console.log(editorRef.current.getContent());
     }
   };
    return <div className="mcebox">
       <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         initialValue=""
         init={{
           height: 200,
           width: 760,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat ',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />
    </div>

}
export default TinyMce;