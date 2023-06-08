import { NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {

  const activeLinkStyle = {
   fontWeight: "bold",
   textDecoration: "underline",
   color: "#161616"
  }

 return (
   <>
   <nav className='host-nav'>
    <NavLink
     style={({ isActive }) => isActive ? activeLinkStyle : null}
     end
     to="/host">Dashboard</NavLink>

    <NavLink
      style={({isActive}) => isActive ? activeLinkStyle : null }
     to='/host/income'>Income</NavLink>

     <NavLink
      style={({isActive}) => isActive ? activeLinkStyle : null }
     to='/host/reviews'>Reviews</NavLink>
   </nav>
   <Outlet />
  </>
  )
}

export default HostLayout
