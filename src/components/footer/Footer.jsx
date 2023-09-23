import React from "react"
import "./footer.css"

const Footer = () => {
  return (
    <>
      <section className='notify'>
        <div className='container flexSB'>
          <div className='left row'>
            <h1>Stay Updated!</h1>
            <span className="sub">Be the first one to know if we move things around a bit.</span>
          </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address' />
            <i className='fa fa-paper-plane'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
