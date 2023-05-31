import React from 'react';
import styled from 'styled-components';

const HeaderList = styled.div`
border: 5px solid red;
height: 300px;
`;

const Header = () => {
    return (
        <HeaderList>
            <ul>
                <li>메뉴 1</li>
                <li>메뉴 2</li>
            </ul>
        </HeaderList>
    );
};

export default Header;