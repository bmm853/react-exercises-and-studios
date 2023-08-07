import data from './../data.json';
import { useState } from 'react';

export default function MyProjects() {
    const [index, setIndex] = useState(0);
    let books = data.projects; 
    let individualBook = books[index];

    function handleClick() {
        if (index < data.projects.length-1)
        {
           setIndex(index + 1);
        }
        else 
        {
           setIndex(0);
        }
     }

    return (
        <div>
            <h3>Books I'll be reading next:</h3>
            <button onClick={handleClick}>Next</button>
            <h4>{individualBook.title}</h4>
            <p>by {individualBook.author}</p>
            <img src={individualBook.image} alt={individualBook.altText}/>
        </div>
    ); 
    
}