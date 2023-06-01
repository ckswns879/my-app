import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../components/home/Home';


const HomePage = () => {

// http요청 (fetch, axios(다운))
const [boards, setBoards] = useState([]);
const [number, setNumber] = useState(0);
// 빈 배열은 최초 한번만 실행
useEffect(() => {
// 다운로드가정  = fetch(),axios(), ajax()
let data = [
    {id : 1, title : "제목1", contant : "내용1"},
    {id : 2, title : "제목2", contant : "내용2"},
    {id : 3, title : "제목3", contant : "내용3"},
];

setBoards([...data]);
},[]);

useEffect(() => {
    setNumber(0);
},[]);

// props // boards={boards}  {boards}는 상태 데이터만가능
// setboards 함수를 패싱해서 자식(Home.js)에게넘김
    return (
        <div>
            <Header />
            <Home boards={boards} setBoards={setBoards} number={number} setNumber={setNumber}/>
            <Footer />
        </div>
    );
};

export default HomePage;