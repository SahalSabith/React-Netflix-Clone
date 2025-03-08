import React, { useEffect, useState } from 'react'
import './Player.css'
import back from '../../assets/back.png'
import { useNavigate, useParams } from 'react-router-dom'

function Player() {

  const {id} = useParams();

  const navigate = useNavigate();

  const [apiData,setApiData] = useState({
    name:"",
    key:"",
    published_at:"",
    type:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWRiZDliNTY4NGMyOWI2ZjZiZDAzODM2MTU0ZjZkNSIsIm5iZiI6MTc0MTMyNTAzNy4zOCwic3ViIjoiNjdjYTgyZWRmNzA4NDQwMzM2Y2I1NDllIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.b3xDYmOquT2wCAqedb0XRoL0YXuKG_F6ACcDUAU69Pg'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  },[])

  return (
    <div className='player'>
      <img onClick={() => navigate(-2)} src={back} alt="" />
      <iframe width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`}
      title='trailer' frameBorder={0} allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
