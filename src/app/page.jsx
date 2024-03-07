import Movies from "@/components/Movies";
import React from "react";

const Page = async({searchParams}) => {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZWJiM2RhMmMzMzBlYzFlZTA2MzAwNDI4NTFlNGZiOSIsInN1YiI6IjY1ZTk4YjgzNmEyMjI3MDE4Njk2MWNiOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.10QzCd7d4m0yH-HAFShjdHKf0xBTpDTXSs6goDwuqHc'
    }
  };
  
   const res = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1 ${searchParams.genre ? "movie/" + searchParams.genre : "trending/all/day"}`, options, {next: {revalidate:10000}})
   const data = await res.json();


  return (
    <div className='flex items-center justify-center flex-wrap gap-4'>
      {
        data?.results?.map((dt,i) => (
          <Movies key={i} dt={dt}/>
        ))
      }
    </div>
  )
};

export default Page;
