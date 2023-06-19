import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
import Login from '../components/login/Login';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const LoginPages = (props) => {
//     return (
//         <div>
//             <Header />
//             <Login />
//             <Footer />
//         </div>
//     );
// };

const navigate = useNavigate();
const location = useLocation();
const { id } = useParams();

console.log('LoginPage', {
    history: navigate,
    location,
})
console.log('LoginPage', {
    id,
});

const handleGoBack = () => {
    navigate(-1); // 한칸 뒤로 가기
};
const handlePush = () => {
    navigate('/HomePage'); //원하는 페이지로가기
  };

// 라우팅하기(로그인페이지)
return (
    <>
        <Login />
        <button onClick={handleGoBack}>뒤로 가기</button>
        <button onClick={handlePush}>홈페이지로</button>
    </>
    );
};
export default LoginPages;