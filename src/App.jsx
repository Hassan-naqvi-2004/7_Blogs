import React from 'react'
import { useEffect, useState} from 'react'
import { CiSearch } from "react-icons/ci";


const App = () => {
  const api = 'https://newsapi.org/v2/everything?q=sports&apiKey=501be82fc89140c49decf7f656298439'
   const [block, setBlock] = useState([]);
   const [search, setSearch] = useState("");
  useEffect (()=>{
    async function news (){
          const name = await fetch(api)
          const num = await name.json()
  
          setBlock(num.articles)
      }
      news()
    },[])

    const clickMe = async () =>{
      const api2 = `https://newsapi.org/v2/everything?q=${search}&apiKey=501be82fc89140c49decf7f656298439`
      const name = await fetch(api2)
      const num = await name.json()
      console.log(num)
      setBlock(num.articles)
      
    }
     

  return (
    <div>
      <nav>
      <div className='logo'>
        <h1>NewsMonkey</h1>
        <p>Home</p>
        <p>Bussiness</p>
        <p>Entertainment</p>
        <p>General</p>
        <p>Health</p>
        <p>Science</p>
        <p>Sports</p>
        <p>Technology</p>
      <div className='btn'>
    <input type="text" onChange={(e)=> setSearch(e.target.value)}/>
    <button onClick={clickMe}><CiSearch /></button>
    </div>
    </div>
      </nav>
      <div className='text'>
        <h1>NewsMonkey - Top General Headlines</h1>
      </div>
      <div className='main'>
      {block.map((e)=>{
           const {author,title,description,url,urlToImage} = e
        return(
          <>
          <div className='image'>
              <img src={urlToImage? urlToImage:`https://cdn2.vectorstock.com/i/1000x1000/88/26/no-image-available-icon-flat-vector-25898826.jpg`} alt="" />
              <h1>{`${description.slice(1,100)}...`}</h1>
              <a href={url} target='_blank'><p>{title}</p></a> 
              <h2>by {author} on Fri, 08 Mar 2024 09:56:13</h2>
              <button>Read More</button>
          </div>
          </>
       
        )
      })}
      </div>
    </div>
  )
}

export default App
