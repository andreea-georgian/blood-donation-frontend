import { useNavigate } from "react-router-dom";

import RegisterForm from "../components/RegisterForm";

function RegisterPage() {
    const navigate = useNavigate();

    function registerHandler(userData) {
        fetch(
            'http://localhost:8080/donors',
            {
                method: 'POST',
                body:JSON.stringify(userData),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        ).then((response) => {
            if(!response.ok)
                alert("This email already exists!");
            else
                return response.json()
        })
        .then((data) => {
            const userData = {
                id: data,
                ...data[data]
            };
            alert('User created!');
            navigate('/');
            console.log(userData);
        })
    }

    return (
        <section>
            <h1>Register form</h1>
            <RegisterForm registerUser={registerHandler}/>
        </section>
    );
}

export default RegisterPage;