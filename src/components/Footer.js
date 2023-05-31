import React from 'react';
import styled from 'styled-components';

const FooterList = styled.div`
border: 5px solid black;
height: 300px;
`;

const Footer = () => {
    return (
        <FooterList>
            <ul>
                <li>오시는길 : 부산시</li>
                <li>전화번호 : 010</li>
            </ul>
        </FooterList>
    );
};

export default Footer;