import React, { useState } from 'react';

function UseStateTest(){
console.log("App실행됨")

const [num, setNum] = useState(5);// num은 최초5로 시작
//기존데이터 세팅
let sample =[
    {id:1, name:"홍길동"},
    {id:2, name:"임꺽정"},
    {id:3, name:"장보고"},
    {id:4, name:"이순신"},
];

    
const [users, setUsers] = useState(sample); // 래퍼런스가 변경되야 실행함

const download = () => {
    //추가할 데이터 세팅
    // const a = sample.concat({id:5, name:"조자룡"}); //concat으로추가하기
    // console.log(a);
    // setUsers(a);

    setUsers([...sample,{id:num, name:"조자룡"}]); // 전개연산자사용후 추가하기
    setNum(num+1); // 재랜더링마다 +1 //...sample는 변경x
};

    
    
// 랜더링 시점 = 상태값 변경
    return (
        <div>
            <button onClick={download}>다운로드</button>
            {users.map(u =>
                <h1>{u.id},{u.name}</h1>)}
        </div>
    );
};

export default UseStateTest;
