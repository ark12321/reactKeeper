import React from 'react';
import './styles.css';

function Notes(props)
{
    return (
        <div className='note'>
           
            <h1>{props.title}</h1>
            <p>{props.content}</p>
           <button onClick={()=>props.deleteOne(props.id)}>delete</button>
        </div>
    );
}
export default Notes;