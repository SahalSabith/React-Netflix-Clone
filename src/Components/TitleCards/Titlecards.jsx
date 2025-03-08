import React, { useRef } from 'react'
import { useEffect , useState } from 'react';
import './Titlecards.css'
import { Link } from 'react-router-dom';

function Titlecards({title,category}) {

  const [apiData,setApiData] = useState([])

  const cardsRef = useRef()

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWRiZDliNTY4NGMyOWI2ZjZiZDAzODM2MTU0ZjZkNSIsIm5iZiI6MTc0MTMyNTAzNy4zOCwic3ViIjoiNjdjYTgyZWRmNzA4NDQwMzM2Y2I1NDllIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.b3xDYmOquT2wCAqedb0XRoL0YXuKG_F6ACcDUAU69Pg'
    }
  };

  const handleWheel = (event) => {
    event.preventDefalut();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel',handleWheel);
  },[])

  return (
    <div className='titlecards'>
      <h2>{title ? title : "Popular On Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card,index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default Titlecards
