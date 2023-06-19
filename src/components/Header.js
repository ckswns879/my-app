import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderList = styled.div`
border: 5px solid red;
height: 300px;
`;

const Header = () => {
    return (
        <HeaderList>
            <ul>
                <li>
                    <Link to="/">홈페이지</Link>
                </li>
                <li>
                <Link to="/login/10">로그인페이지</Link>
                </li>
            </ul>
        </HeaderList>
    );
};

export default Header;