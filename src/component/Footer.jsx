import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
    <div className='footer '>
    <p className=' font container justify-content-center text-center mt-5 fs-1'>Interested In Delving Deeper Into The Project?</p>
     <p className='  font text-center container justify-content-center fs-5'>If you'd like to explore further details about our initiatives or any of our <br/>affiliated brands, don't hesitate to connect. You can reach out to us via<br/> email at <b>hello@abc.com</b> or give us a call at <b>+91 480 20802730</b>.</p>
    </div>
<div className='Button1 d-flex justify-content-center gap-5'><button className=' btn ' >Ring us on Skype</button> <button className='btn1 ' style={{background:"white", color:"black"}}>Contact Us</button></div>
    
    <div>
    <p className='copy text-center'>© 2019-2023 abcTechnology Solutions ----. Ltd. All Rights Reserved</p>
    </div>
    </>
  )
}

export default Footer