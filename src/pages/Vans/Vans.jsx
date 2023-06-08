import './Vans.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Vans = () => {
  const [vans, setVans] = useState([])

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

  const data = vans.map((van) => (
    <div key={van.id} className='van-tile'>
      <Link
        to={`/vans/${van.id}`}>
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

  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      <div className='van-list'>{data}</div>
    </div>
  )
}

export default Vans
