import './App.css';


// 실행과정 (index.html) - spa single page application
// jsx문법 html과 유샤한구조를 갖고 있어 사용하기 간편하다


// react는 하나의DOm만 리턴함
// 변수선언은 let 혹은 const로만 해야함        let은 변수 const는 상수
// if 사용 불가능 -> 삼항연산자(조건 ? 값(true) : 값(false))
// 조건부렌더링 (조건 && 값(true))   *false일땐 안나옴
// css디자인 
// 1. 내부에는방법
// 2. 외부 파일에 적는방법
// 3. 라이브러리사용 (부트스트랩, componet-styled)


let a = 10; //변수
const b = 20; //상수


function App() {
  
  let c; 
  console.log(1,c); //변수는있는데 값이없어서 undefined라고출력됨 *java = null 과 비슷

  const mystyle = {color:'red'};
  return (
    
<div>
<div style={mystyle}>if 사용 불가능 / 삼항연산자(조건 ? 값(true) : 값(false)) ex) {a === 10 ? '10입니다' : '10이아님니다'}</div> {/* css디자인 1.내부에는방법 */}
<h1 className='css2'>조건부렌더링 ex) {b === 20 && '20입니다.'}, {b === 10 && '20입니다.'}   {/*false라 출력안됨*/}</h1>
</div>

  );
}

export default App;
