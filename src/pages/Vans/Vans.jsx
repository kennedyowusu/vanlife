import './Vans.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useSearchParams } from 'react-router-dom'

const Vans = () => {
  const [vans, setVans] = useState([])
  const [searchParams, setSearchParams] = useSearchParams([]);
  console.log(searchParams.get('type'));

  const filterVans = searchParams.get('type');

  console.log(filterVans);

  const displayedVans = filterVans ? vans.filter(van => van.type === filterVans) : vans;


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/vans')
        setVans(response.data.vans)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [])

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
