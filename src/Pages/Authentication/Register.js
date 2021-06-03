import classes from './Login.module.css';
import { useState } from 'react';
import { useHistory } from 'react-router';
import firebase from '../../firebase';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

const LogIn = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPass, setEnteredPass] = useState('');
    const [enteredfName, setEnteredfName] = useState('');
    const [enteredMobile, setEnteredMobile] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const onAddName = (evt) => {
        setEnteredfName(evt.target.value);
    }

    const onAddMobile = (evt) => {
        setEnteredMobile(evt.target.value);
    }

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
            alert('Log In successfully!');
            history.push('/dashboard');
        }).catch((error) => {
            console.log(error)
        });
    }

    const submitHandler = (evt) => {
        evt.preventDefault();
        setIsLoading(true);
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEuKukNRynt7pmOA1UybJ2M1jN2iUShzg',
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
                setIsLoading(true);
                console.log(res);
                // isLoggedIn = true;
                // dispatch(authActions.setUserData({
                //     userId: enteredEmail,
                //     isLoggedIn
                // }));
                history.push('/login');
            } else {
                return res.json().then(data => {
                    setIsLoading(false);
                    alert(data.error.message);
                });
            }
        });
    }

    const onLogIn = () => {
        history.push('/login');
    }

    return (
        <section className={classes.auth}>
            {!isLoading && <h2 >Sign Up</h2>}
            {!isLoading && <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes.control}>
                    <input type='text' id='fname' onChange={onAddName} value={enteredfName} required placeholder="First Name" />
                </div>
                <div className={classes.control}>
                    <input type='number' id='mobile' onChange={onAddMobile} value={enteredMobile} required placeholder="Mobile Number" />
                </div>
                <div className={classes.control}>
                    <input type='email' id='email' onChange={onAddEmail} value={enteredEmail} required placeholder="Enter Email" />
                </div>
                <div className={classes.control}>
                    <input type='text' id='password' onChange={onAddPass} value={enteredPass} required placeholder="Enter Password" />
                </div>
                <div className={classes.actions}>
                    <button >Submit</button>
                    <button
                        type='button'
                        className={classes.toggle}
                        onClick={onLogIn}>
                        Log In
                    </button>
                </div>
            </form>}
            {!isLoading && <div className={classes.logo}>
                <button onClick={otherLogin.bind(null, 'Google')}>Google</button>
            </div>}

            {/* <button onClick={otherLogin.bind(null, 'Facebook')}>Facebook</button> */}
            {isLoading && <LoadingSpinner />}
        </section>
    );
}

export default LogIn;