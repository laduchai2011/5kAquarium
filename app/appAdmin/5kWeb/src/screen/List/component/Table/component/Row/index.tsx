import React, { useRef, useState, useEffect } from 'react';
import './style.css';
import { 
    EditorState, 
    Editor,
    convertFromRaw 
} from 'draft-js';
import type { FishCodeField } from '@src/dataStruct/fishCode';


const Row: React.FC<{ data: FishCodeField }> = ({ data }) => {
    const parent_element = useRef<HTMLDivElement | null>(null);
    const detail_element = useRef<HTMLDivElement | null>(null);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    useEffect(() => {
        const handleShowContent = () => {
            const contentState = convertFromRaw(JSON.parse(data.detail));
            setEditorState(EditorState.createWithContent(contentState));
        };
        handleShowContent()
    }, [editorState, data.detail])

    const handleSelect = () => {
        if (parent_element.current && detail_element.current) {
            parent_element.current.classList.toggle('active');
            detail_element.current.classList.toggle('show');
        }
    }

    

    return (
        <div className="List-Table-Row" ref={parent_element} onClick={() => handleSelect()}>
            <div className='List-Row-row'>
                <div className='List-Row-row-index'>1</div>
                <div className='List-Row-row-name'>Tên</div>
                <div className='List-Row-row-size'>Kích thước</div>
                <div className='List-Row-row-remain'>Còn hàng</div>
                <div className='List-Row-row-money'>Tiền</div>
            </div>
            <div className='List-Row-detail' ref={detail_element}>
                <Editor editorState={editorState} onChange={setEditorState} />
            </div>
        </div>
    );
};

export default Row;
