import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPages from './pages/LoginPages';
//import LoginPages from './pages/LoginPages';
// import UseRef from './UseRef';
// import UseMemo from './UseMemo';
// import UseEffect from './UseEffect';
// import UseState from './UseState';
// import UseStateTest from './UseStateTest';
// import Apptest from './Apptest';
// import ComponentsStyle from './Components_Style';


function App() {
  return (
    
    <div>
    {/* <Apptest /> */}
    {/* <UseState /> */}
    {/* <UseStateTest /> */}
    {/* <UseEffect /> */}
    {/* <UseMemo /> */}

    {/* <UseRef /> */}
    {/* <ComponentsStyle /> */}
    {/* <LoginPages /> */}

    <Header />
    <Routes>
    <Route path="/" exact={true} element={<HomePage />} />             {/* exact={true}는 경로가 정확히 일치해야만 해당 라우트가 활성화되는 옵션 */}
    <Route path="/login" exact={true} element={<LoginPages />} />     {/* element prop을 사용하여 렌더링할 요소를 지정 <HomePage /> 컴포넌트가 <Route>에 의해 렌더링됩니다. 이것은 React Router v6에서 도입된 새로운 문법 */}
    </Routes>                                                         {/* component prop은 <Route> 컴포넌트에서 사용되는 prop으로, 해당 경로에 매칭되었을 때 렌더링할 컴포넌트를 지정하는 역할을 합니다 */}
    <Footer />
    </div>

  );
}

export default App;
