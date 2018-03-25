import React from 'react'

const Loader = props => {
  const { hidden } = props
  if (hidden) {
    return null
  }
  return (
    <div className="Loader">
      <div className="Loader-logo" title="Loading..."></div>
    </div>
  ) 
}

export default Loader