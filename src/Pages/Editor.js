import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

class Editor extends Component {
    render() {
        return (
            <div className="App">
                <h2 style={{color:'white'}}>Content Editor >></h2>
                <CKEditor
                    editor={ ClassicEditor }
                    data="<p>Content here ...</p>"
                    onReady={ editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log( 'Content Editor is ready to use!', editor );
                    } }
                    onChange={ ( event ) => {
                        console.log( event );
                    } }
                    onBlur={ ( event, editor ) => {
                        console.log( 'Blur.', editor );
                    } }
                    onFocus={ ( event, editor ) => {
                        console.log( 'Focus.', editor );
                    } }
                />
            </div>
        );
    }
}

export default Editor;
