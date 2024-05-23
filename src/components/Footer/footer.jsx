import './footer.scss'
import logoFooter from '../../../public/logofooter.png'

function Footer() {
  return (
    <div className='footer'>
        <img src={logoFooter} className="logoFooter" alt="logo" />
        <p className='textfooter'>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer