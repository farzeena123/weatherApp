import React, { useEffect } from 'react'
import { Nav, Navbar,Container,Image,Row,Col } from 'react-bootstrap';
import './Header.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

function Header() {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <div>
 <Container fluid  >
           
       <Navbar bg='none' variant="light">
         <Image  data-aos='fade-right' className='nav-image' src='https://i.pinimg.com/originals/b3/bf/1c/b3bf1c281806ca216c3627bfbbd63ae1.gif' ></Image>
      </Navbar>
       </Container> 
     </div>
  )
}

export default Header