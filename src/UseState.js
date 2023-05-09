import { useState } from "react";
import Sub from "./Sub";



function UseState() {

//let number = 1; // 이렇게 하면 상태값 아님
const [number, setNumber] = useState(1);  //상태값 //React안에 hooks라이브러리

const add = () => {
setNumber(number+1); // 리엑트한테 number 값 변경한다고 요청 number++는안됨
console.log('add',number);
};
// 랜더링 시점 = 상태값이 변경될때
return (
<>
    <div>
        <h1>숫자 : {number}</h1>
        <button onClick={add}>더하기</button>
        <Sub />
    </div>
</>
);
};

export default UseState;