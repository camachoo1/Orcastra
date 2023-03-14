import './LoginModal.css';
import { useState, useEffect } from 'react';
import { login, clearSessionErrors } from '../../../store/session';
import { useDispatch } from 'react-redux';
export default function LoginForm(props) {
    const dispatch = useDispatch()
    const showLoginModal = props.showLoginModal
    const setShowLoginModal = props.setShowLoginModal
    const setShowSignUpModal = props.setShowSignUpModal
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        return () => {
            dispatch(clearSessionErrors());
        };
    }, [dispatch]);

    const handleOutsideClick = () => {
        setShowLoginModal(false)
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login({ email, password }))
    }

    return (
        <div className='login-modal-background'>
            <div className="login-modal">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 style={{ fontSize: '36px', textAlign: 'center', paddingBottom: '15px' }}>Welcome to Orcastra</h2>
                    <div className="login-input-text-wrapper">
                        <div>
                            <label> Username or Email </label>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <button onClick={handleSubmit}>Log in</button>
                        </div>
                    </div>
                </form>
                <button
                    style={{marginTop:'20px'}}
                    type='submit'
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(
                            login({ email: 'demo@gmail.com', password: 'password' })
                        );
                    }}>
                    Login as Demo User
                </button>
            </div>
        </div>
    )
}