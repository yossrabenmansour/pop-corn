import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import StarRating from './StarRating';
import App from './App';



function TestStar(){
  const [movieRate, setMovieRate]=useState(0)
  return (
  <div>
    <StarRating onSetRate={setMovieRate}/>
    <p>you rated this movie {movieRate} stars </p>
  </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating /> */}
    {/* <StarRating messages={['Terrible','Bad','Okay','Good','Excellent']}/>
    <StarRating defaultRating={3}/> */}
    {/* <StarRating maxRating={10} color='red' size={55} className='test'/> */}
    {/* <TestStar/> */}
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
