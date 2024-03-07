import React from 'react'
import MovieDetail from "@/components/MovieDetail";

const Page = async() => {

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer afb9e0d8e87e2a1035d129252c23e6a1'
  }
}

  const res = await fetch(`https://api.themoviedb.org/3/movie/{movie_id}?language=en-US`, options)
  const data1 = await res.json();


  return (
    <div className='flex items-center justify-center flex-wrap gap-4'>
      {
        data1?.results?.map((movieDetail,index) => (
          <MovieDetail key={index} dt={movieDetail}/>
        ))
      }
    </div>
  )
};

export default Page