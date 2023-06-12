import React from 'react';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
background-color: ${(props) => (props.user.username === 'ssar'?'blue':'red')};
color: white;
;`

// Function 방식
// class 방식
const Home = (props) => {
    
    
    // 구조분할 할당
    const {boards, setBoards, number, setNumber, user} = props;

    return (
        <div>
            <h1>홈 : {number}</h1>
            <button onClick={(e) => setNumber(number +1)}>번호증가</button>
            <StyledDeleteButton user={user} onClick={() => setBoards([])}>전체삭제</StyledDeleteButton>
            {boards.map((board) => <h3>제목 : {board.title} 내용 : {board.contant}</h3>)}
        </div>
    );
};

export default Home;
