import React, { useEffect, useState } from 'react';

function UseEffect(){

const [data,setData] = useState(0);
const [serch,setSerch] = useState(0);

const download = () => {
    //다운로드 받고(통신하고)
let downloadData = 5;// 가정
setData(downloadData);
};


// 실행시점 
// 1. UseEffect()함수가 최초 실행될 때(그림이 최도로 그려질 때)
// 2. 상태변수가 변경될때(그게 dependencyList에 등록되어 있어야함 //[]< 이거안에)

useEffect(()=>{
console.log("useEffect실행됨")
download();
},[]); 
// []안에 상태변수 적어주면됨 [data] data가 변경될때마다 실행
// [] <<어디에도 의존하지 않음(최초 한번만 실행)

useEffect(() => {
console.log("serch에의존한 useEffect 실행됨")
download();
},[serch]) // serch에 의존해서 useEffect()함수를 실행함//download(5)로 돌아감

    return (
        <div>
        <button onClick={() => {setSerch(2);}}>검색하기</button>
        <h1>데이터{data}</h1>
        <button onClick={() => {setData(data + 1);}}>더하기</button>
        </div>
    );
};

export default UseEffect;