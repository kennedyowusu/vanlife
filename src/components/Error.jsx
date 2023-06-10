import { useRouteError } from 'react-router-dom'

const loader = () => {
  return {
    message: "An error occurred",
    status: 500,
    path: "/path/to/route",
  };
};

const Error = () => {
  const error = useRouteError(loader)

  if (error) {
    return (
      <div>
        <h2>Error: { error.message }</h2>
        <p>
          Error Occurred
        </p>
      </div>
    )
  } else {
    return null
  }
}

export default Error
