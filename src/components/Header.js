import React from 'react'
import { Navbar, Container, NavbarBrand } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar className='m-auto' bg="dark" variant='dark' expand='lg' collapseOnSelect>
            <Container>
                <LinkContainer to="/">
                    <NavbarBrand>Pokédex</NavbarBrand>
                </LinkContainer>
            </Container>
        </Navbar>
    </header>
  )
}

export default Header