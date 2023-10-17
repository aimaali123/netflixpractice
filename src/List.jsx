import React, { useEffect, useState } from 'react'
import { fetchapi } from './api';
const List = ({title,param}) => {
 const [list,setList]=useState([]);

  useEffect(()=>{
    fetchapi(param).then(res=>
      setList(res.data.results))
    },[]);

    console.log(list)
    return (
    <>
    <div className='list'>
        <div className='row'>
                <h2 className='list-title'>{title}</h2>
            <div className='col-12'>
            <div className='row-posters'>
{
  list.map(item=>
  <img 
                    className="row-poster row-posterLarge"
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                alt={item.title}

  />)
}
                
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default List;
