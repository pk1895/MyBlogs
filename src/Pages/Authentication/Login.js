import classes from './Login.module.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import firebase from '../../firebase';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import { useDispatch } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import google from '../../assets/google.png';

const LogIn = () => {
    const [enteredEmail, setEnteredEmail] = useState('pn@test.com');
    const [enteredPass, setEnteredPass] = useState('12345678');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();
    const dispatch = useDispatch();

    const onAddEmail = (evt) => {
        setEnteredEmail(evt.target.value);
    }

    const onAddPass = (evt) => {
        setEnteredPass(evt.target.value);
    }

    const otherLogin = (argProvider) => {
        var provider;
        switch (argProvider) {
            case 'Google':
                provider = new firebase.auth.GoogleAuthProvider();
                break;
        }

        return firebase.auth().signInWithPopup(provider).then((result) => {
            var credential = result.credential;
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            console.log(token);
            var user = result.user;
            return user;

        }).then((res) => {
            // alert('Log In successfully!');
            dispatch(authActions.setUserData({
                userId: enteredEmail,
                isLogIn: true
            }));
            history.replace('/dashboard');
        }).catch((error) => {
            alert(error);
        });
    }

    const submitHandler = (evt) => {
        evt.preventDefault();
        setIsLoading(true);
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEuKukNRynt7pmOA1UybJ2M1jN2iUShzg',
            {
                method: 'POST',
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPass,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(res => {
            if (res.ok) {
                setIsLoading(false);
                // alert('Log In successfully!');
                dispatch(authActions.setUserData({
                    userId: enteredEmail,
                    isLogIn: true
                }));
                history.replace('/dashboard');
            } else {
                return res.json().then(data => {
                    setIsLoading(false);
                    alert(data.error.message);
                });
            }
        });
    }

    const onSignUp = () => {
        history.push('/register');
    }

    return (
        <section className={classes.auth}>
            {!isLoading && <h2 >LOG IN</h2>}
            {!isLoading && <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes.control}>
                    <input type='email' id='email' onChange={onAddEmail} value={enteredEmail} required placeholder="Enter Email" />
                </div>
                <div className={classes.control}>
                    <input type='password' id='password' onChange={onAddPass} value={enteredPass} required placeholder="Enter Password" />
                </div>
                <div className={classes.actions}>
                    <button >Submit</button>
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={onSignUp}>
                        Create new account
                    </button>
                </div>
            </form>}
            {!isLoading && <div className={classes.logo}>
                <img
                    style={{ width: '60px' }}
                    src={google}
                    alt="Google"
                    onClick={otherLogin.bind(null, 'Google')} />

            </div>}

            {/* <button onClick={otherLogin.bind(null, 'Facebook')}>Facebook</button> */}
            {isLoading && <LoadingSpinner />}
        </section>
    );
}

export default LogIn;