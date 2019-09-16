// Renders a textarea component with a character limit.
import React, { useState } from 'react';

const LimitedTextarea = ({ rows, cols, value, limit }) => {
    const [content, setContent] = useState(value); // the content of the text area 
    const [danger, setDanger] = useState(false);

    const setFormattedContent = (val) => { // val is the value of the content in the text area 
        if (val.length > limit) {
            setContent(val.substring(0, limit)); // trim it to the limit
        } else {
            if (limit - val.length <= 10) {
                setDanger(true);
            } else {
                setDanger(false);
            }
            setContent(val); // set the content of what's in the box 
        }
        console.log();
    }

    return (
        <div>
            <p>Characters remaining: <span style={{ color: `${danger ? 'red' : 'black'}` }}>{content ? limit - content.length : limit}</span></p>
            <textarea value={content} rows={rows} cols={cols} onChange={(event) => setFormattedContent(event.target.value)} />
        </div>);
}

export default LimitedTextarea; 
