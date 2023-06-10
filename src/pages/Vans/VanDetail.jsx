import './Vans.css'
import { Link, useParams, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const VanDetail = () => {
  const { id } = useParams()
  const [van, setVan] = useState(null)
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/vans/${id}`)
        setVan(response.data.vans)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [id])

  const search = location.state?.search || '';
  const type = location.state?.type || 'all';

  return (
    <div className='van-detail-container'>
      <Link
        to={`..${search}`}
        relative="path"
          className="back-button"
      >&larr; <span>Back to {type} vans
        </span></Link>
      {van ? (
        <div className='van-detail'>
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className='van-price'>
            <span>${van.price}</span>
            /day
          </p>
          <p>{van.description}</p>
          <button className='link-button'>Book now</button>
        </div>
      ) : (
        <h2 className='loading'>Loading...</h2>
      )}
    </div>
  )
}

export default VanDetail
