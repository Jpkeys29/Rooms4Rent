import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

const Signup = ({ setUser }) => {
    const [emailError, setEmailError] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState("")
    const auth = getAuth();

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.currentTarget)
        let email = data.get("email")
        let password = data.get("password")
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                setUser(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error", error)
                // ..
            });
    }

    const validateInputs = () => {
        const email = document.getElementById("email")
        const password = document.getElementById("password")

        let isValid = true

        if(!email.value || !/\S+@\S+\.\S+/.test(email.value)){
            isValid = false
        }else {
            setEmailError(false)
        }
        return isValid
    }



    return(
        <div>
            SignUp
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                type="email"
                name="email"
                id="email"
                placeholder="your@email.com"
                required
                />
                <label>Password</label>
                <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••"
                autoFocus
                required
                />
            <button type="submit" onClick={validateInputs}>Register</button>
            </form>
        </div>
    )
}


export default Signup;