import { NavLink, Outlet } from 'react-router-dom'

const HostLayout = () => {
  const activeLinkStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  }

  return (
    <>
      <nav className='host-nav'>
        <NavLink
          style={({ isActive }) => (isActive ? activeLinkStyle : null)}
          end
          to='.'
        >
          Dashboard
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeLinkStyle : null)}
          to='income'
        >
          Income
        </NavLink>

        <NavLink
          style={({ isActive }) => (isActive ? activeLinkStyle : null)}
          to='vans'
        >
          Vans
        </NavLink>

        {/* <NavLink
          style={({ isActive }) => (isActive ? activeLinkStyle : null)}
          to='van/:id'
        >
          Host Van Detail
        </NavLink> */}

        <NavLink
          style={({ isActive }) => (isActive ? activeLinkStyle : null)}
          to='reviews'
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default HostLayout
