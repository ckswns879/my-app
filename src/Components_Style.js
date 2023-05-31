import React from 'react';
import './Components_Style.css';
import styled from 'styled-components';

const a = {     // 단점 자바스크립트로 스타일링하기때문에 대문자, 자동완성안됨(css파일만들고 import추천)
    backgroundColor:'red'   // 함수안에 만들면안됨(디자인은 정적이기 때문에 다시그려질때마다 실행함)
};

const Title = styled.h1`    // styled-components 사이트에서 가져와서씀
  font-size: 1.5em;
  text-align: center;
  color: #BF4F74;
`;

const Components_Style = () => {
    return (
        <div>
            <h1 style={a}>안녕.js</h1>
            <h1 className='box-style'>안녕.css</h1>
            <Title>안녕.styled-components</Title>
        </div>
    );
};
export default Components_Style;