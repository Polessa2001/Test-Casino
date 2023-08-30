import React from 'react'
import Button from '../../components/buttons/Button'
const Announcments = () => {
  return (
    <div className="announcments">
      <div className="announcment">
        <div><img /></div>
        <div className="announcment-content">
          <h1>Grand casino battle: $15,000</h1>
          <p>It’s time to hunt for the casino Multiplier</p>
          <Button title = "View Details" width = '500px' />
        </div>
      </div>
      <div className="announcment">
        <div className="announcment-content">
            <h1>Cash Bombs: $1,000,000</h1>
            <p>$1Mil Explosion for cash drops and more</p>
            <Button title = "View Details" width = '500px' />
          </div>
        </div>
    </div>
  )
}

export default Announcments
