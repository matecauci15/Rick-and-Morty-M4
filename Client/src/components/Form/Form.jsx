import { useState } from "react";
import validation from "../Validation/Validation";
import './Form.css'

const Form = ({login} ) => {
    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });
     
    const handleChange = (event) => {
        setUserData({
            ...userData,    
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        })) 
    }

    const handleSubmit = (event) => {
        event.preventDefault(); 
        login(userData);
    }
   
    return(
        <div className="centered-form">
        <form className="principal_back">
            <h1>Sign In</h1>
                <div className="email_back">
                    <label className="label_back" htmlFor="email">Email:</label> <br/>
                    <input type="email" name="email" value={userData.email} onChange={handleChange} />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="password_back">
                    <label className="label_back" htmlFor="password">Password:</label><br/>
                    <input type="password" name="password" value={userData.password} onChange={handleChange}/>
                    {errors.password && <p>{errors.password}</p>}
                </div>

            <button className='button_submit' onClick={handleSubmit}>Submit</button>

        </form>
            </div>
    )
}
 
export default Form;