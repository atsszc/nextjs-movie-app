"use client"
import React from 'react'
import Image from 'next/image'


const MovieDetail = ({movieDetail}) => {

  return (
    <div className='min-w-[450px] relative cursor-pointer'>
      <Image fill src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`}/>
    </div>
  )
}

export default MovieDetail