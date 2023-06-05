
import { useNavigate } from 'react-router-dom';

import LoginForm from '../components/LoginForm';

function LoginPage() {

    const navigate = useNavigate();

    function loginHandler(userData) {
        fetch(
            'http://localhost:8080/login',
            {
                method: 'POST',
                body: JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then((response) => {
            if (!response.ok)
                alert("Invalid credentials!");
            else
                return response.json();
        })
        .then((data) => {
            const userData = {
                id: data,
                ...data[data]
            };
            console.log(userData);
            if (userData.id.role === 'admin')
                navigate('/admin');
            else
                if(userData.id.role === 'donor')
                    navigate(
                        '/donor',
                        { state: {userData} });
                else
                    navigate(
                        '/doctor',
                        { state: {userData} }); 
        })
    }

    return (
        <section>
            <h1>Login form</h1>
            <LoginForm loginUser={loginHandler}/>
        </section>
    );
}

export default LoginPage;