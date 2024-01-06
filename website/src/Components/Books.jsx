import React, { useState, useEffect } from "react";
import "../App.css";
const Books = (props) => {
  const [books, setBooks] = useState([]);

  useEffect (()=>{
    fetch("https://reactnd-books-api.udacity.com/books" , {headers:{
         'Authorization': 'whatever-you-want' }
    })
    .then((Response)=> Response.json())
    .then((data)=>{
        setBooks(data.books)
    })
    .catch((error)=>{
        console.log(error);
    })

    // console.log(props.check.FormSubmit);
  })
// console.log(books);
                  console.log(props.check.findBook);
                  const Newbook=books.filter((book)=>book.title.toLowerCase().includes(props.check.findBook.toLowerCase()))
  return (
    <>
      <div className="booksx">
        {props.check.FormSubmit ? (
          <div className="main1">
            {Newbook.map((book) => (
              <div className="books1">
                <div className="books2">
                  <img src={book.imageLinks.thumbnail} alt=""></img>
                  <h3>{book.title}</h3>
                  <div
                    className="RatingBox"
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    {book.averageRating == null ? (
                      <p>3⭐</p>
                    ) : (
                      <p>{book.averageRating}⭐</p>
                    )}
                    <p>Free</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h1> Kindly Register To Access The Books!</h1>
        )}
      </div>
    </>
  );
};

export default Books;
