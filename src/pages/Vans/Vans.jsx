import './Vans.css'
import {  useState } from 'react'
import { Link, useSearchParams, useLoaderData } from 'react-router-dom'
import { getVans } from '../../api'

export const loader = () => {
  return getVans();
}

const Vans = () => {
  const [searchParams, setSearchParams] = useSearchParams([]);
  const [error, setError] = useState(null)

  const vans = useLoaderData();

  const filterVans = searchParams.get('type');

  const displayedVans = filterVans ? vans.filter(van => van.type === filterVans) : vans;

  const data = displayedVans.map((van) => (
    <div key={van.id} className='van-tile'>
      <Link
        to={van.id} state={{ search: `?${searchParams.toString()}`, type: filterVans }}>
        <img src={van.imageUrl} />
          <div className='van-info'>
            <h3>{van.name}</h3>
            <p>
              ${van.price}
              <span>/day</span>
            </p>
          </div>
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ))

  const handleFilterChange = (key, value) => {
    setSearchParams(prevParam => {
      if (value === null) {
        prevParam.delete(key)
      } else {
        prevParam.set(key, value)
      }
      return prevParam
    });
  }


  if (error) {
    return <h1>Something went wrong! { error.message}</h1>
  }

  return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">

                <button
                  onClick={() => handleFilterChange("type", "simple")}
                  className={`van-type simple ${filterVans === "simple" ? "selected" : ""}`}
                >
                  Simple
                </button>

                <button
                  onClick={() => handleFilterChange("type", "luxury")}
                  className={`van-type luxury ${filterVans === "luxury" ? "selected" : ""}`}
                >
                  Luxury
                </button>

                  <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={`van-type rugged ${filterVans === "rugged" ? "selected" : ""}`}
                  >
                    Rugged
                  </button>

                { filterVans &&
                  (
                    <button
                    onClick={() => handleFilterChange("type", "")}
                    className="van-type clear-filters"
                    >Clear filter</button>
                  )
                }

            </div>
            <div className="van-list">
                {data}
            </div>
        </div>
    )
}


export default Vans
