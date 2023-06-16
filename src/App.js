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
    <Route path="/" exact={true} element={<HomePage />} /> {/* exact={true}는 경로가 정확히 일치해야만 해당 라우트가 활성화되는 옵션 */}
    <Route path="/login" exact={true} element={<LoginPages />} />
    </Routes>
    <Footer />
    </div>

  );
}

export default App;
