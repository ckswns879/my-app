import React, { createRef, useRef, useState } from 'react';
// UseRef (디자인)
// dom을 변경할때 사용

const UseRef = () => {

const myRef = useRef(null); //이렇게만들면 한개만적용

const [list, setList] = useState(
    [{id:1, name: '홍길동'},
    {id:2, name: '이순신'},]);

    
const myRefs = Array.from({length: list.length}).map(()=> createRef()); // 배열로만들기
    
    return (
        <>
        <button onClick={()=>{
            console.log(myRef);
            console.log(myRef.current);
            //myRef.current.style.backgroundColor = 'red'; //박스 백그라운드 변경
            myRefs[0].current.style.backgroundColor = 'red'; //0번배열 '홍길동' 백그라운드 변경
            }}>색변경</button>

            <div ref={myRef}> 박스 </div>

            {list.map((user, index) => (
            <h1 ref={myRefs[index]}>{user.name}</h1>
            ))}

        </>
    );
};

export default UseRef;
