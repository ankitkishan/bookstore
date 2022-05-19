import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Book from './Book'
import "./Book.css"

const URL = 'http://localhost:5000/books'
const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data)
}
function Books() {
    const [books, setBooks] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setBooks(data.books));
    },[]);
    console.log(books);
    return (
    <div>
        <ul>
            {books && books.map((item,i) => (
                <li key={i}>
                    <Book book={item} />
                </li>
            ))}
            
        </ul>
    </div>
    )
}

export default Books