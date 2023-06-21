import { Button } from 'react-bootstrap';
import React from 'react';
import styled from 'styled-components';

const StyledDeleteButton = styled.button`
background-color: ${(props) => (props.user.username === 'ssar'?'blue':'red')};
color: white;
;`
const StyledAddButton = styled(StyledDeleteButton)`  //스타일확장(위에 스타일을 받아오기 때문에 순서중요)
background-color: ${(props) => (props.user.username === 'ssar'?'yellow':'red')};
color: black;
;`

// Function 방식
// class 방식
const Home = (props) => {
    
    
    // 구조분할 할당
    const {boards, setBoards, number, setNumber, user} = props;

    return (
        <div>
            <h1>홈 : {number}</h1>
            <Button variant="primary">Primary</Button>
            <StyledAddButton user={user} onClick={(e) => setNumber(number +1)}>번호증가</StyledAddButton>
            <StyledDeleteButton user={user} onClick={() => setBoards([])} >전체삭제</StyledDeleteButton>
            {boards.map((board) => (<h3 key={board.id}>제목 : {board.title} 내용 : {board.contant}</h3>))}
        </div>
    );
};

export default Home;
