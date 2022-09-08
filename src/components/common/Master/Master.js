import React  from 'react'
import Home from '../../../containers/Home/Home'
 
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
 

const Master = ({children}) => {
  return (
    <>
        <Header/>
          {children} 
        <Footer/>
    </>
  )
}

export default Master