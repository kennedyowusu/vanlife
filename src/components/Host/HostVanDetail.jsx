import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const HostVanDetail = () => {
  const { id } = useParams()
  const [van, setVan] = useState(null)

  useEffect(() => {
    const getVan = async () => {
      try {
        const response = await axios.get(`/api/vans/${id}`)
        setVan(response.data.vans)
      } catch (err) {
        console.log(err)
      }
    }

    getVan()

  }, [id])

  if (!van) return <h1>Loading...</h1>

  return (
    <section>
      <Link
        to=".."
        relative="path"
          className="back-button"
      >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={van.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${van.type}`}
                        >
                            {van.type}
                        </i>
                        <h3>{van.name}</h3>
                        <h4>${van.price}/day</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HostVanDetail