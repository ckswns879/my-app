import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// bootstrap navbar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const HeaderList = styled.div`
border: 5px solid red;
height: 300px;
`;

const StyledHeadLink = styled(Link)`
color:red;
`;

const Header = () => {
    return (
        <>
        <div>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
           {/* 재랜더링안되게 href를 link to로 바꾸고 css 먹히게 className에 값을넣으면됨(ex: Nav.Link = nav-link, Navbar.Brand = navbar-brand)*/}
            <Link to="/" className='nav-link'>Home</Link>
            <Link to="/login/10" className='nav-link'>login</Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
        </Container>
      </Navbar>
        </div>
        <HeaderList>
            <ul>
                <li>
                    <StyledHeadLink to="/">홈페이지</StyledHeadLink>
                </li>
                <li>
                <StyledHeadLink to="/login/10">로그인페이지</StyledHeadLink>
                </li>
            </ul>
        </HeaderList>
</>
    );
};
export default Header;