import React from 'react'
import Content from './Content'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <>
    <Header></Header>
    <Content>{children}</Content>
    </>
  )
}

export default Layout