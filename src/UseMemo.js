import React, { useState, useMemo } from 'react';

function UseMemo() { 
//useMemo를 사용하면, 특정 값이나 함수를 이전에 계산한 결과를 재사용할 수 있습니다. 이를 통해 불필요한 계산을 피하고, 컴포넌트의 렌더링 성능을 향상시킬 수 있습니다.

const [list,setList] = useState([1,2,3,4]);
const [str,setStr] = useState('합계');


const getaddresult = () => {
    let sum = 0;
    list.forEach((i) => (sum = sum + i));
    console.log('sum 함수 실행됨 : ', sum);
    return sum;
};

//위치중요
const addresult = useMemo(() => getaddresult(), [list]); // [의존성 배열] 리스트가 변경될때 실행됨

// 문자 변경할 땐 리스트값을 안 바꿔도 되니 useMemo()에 getaddresult()를 저장하여 재사용(랜더링하지 않음)
    return (
        <>
        <button onClick={() => {setList([...list,10])}}>리스트 값추가</button>
        <button onClick={() => {setStr('안녕')}}>문자변경</button>
        <div>
        {list.map((i) =>
        (<h1>{i}</h1>)
        )}</div>
        <div>{str} : {addresult}</div>
        </>
    );
};

export default UseMemo;