import {useRef, useState, useEffect, useInsertionEffect} from 'react'
import '../App.css'
import {Link} from 'react-router-dom'
import Register from './Register';

const Login = () => {
    const userRef=useRef();
    const errRef=useRef();

    const[user,setUser]=useState('');
    const[pwd,setPwd]=useState('');
    const[errMsg,setErrMsg]=useState('');
    const[success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user,pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user,pwd);
        setUser('');
        setPwd('');
        setSuccess(true);
    }

  return (
      <>
        {success ? (
            <section>
                <h1>You have succesfully logged in!</h1>
                <br />
                <p>
                    <a href="#">Go to home</a>
                </p>
            </section>
        ) : (
    <section>
        {/* <p ref={errRef}className={errMsg?"errmsg":
        "offscreen"}aria-live="assertive">{errmsg}</p> */}
        <div className='container'>
        <h1 className='form__title'>Sign in</h1>
        <form className='form' onSubmit={handleSubmit}>
            <div className='form__input-group'>
            <label htmlFor="username"></label>
            <input
                className='form__input'
                autoFocus placeholder='username or email'
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
            />
            </div>
            <label htmlFor="password"></label>
            <input
                className='form__input'
                autoFocus placeholder='password'
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
            />
        </form>
        <br />
        <button className='form__button'>Sign In</button>
        <p>
            <br />
            Don't have an account?<br />
            <span>
            <u><Link to='/register'>Create an account</Link></u>
            </span>
        </p>
        </div>
    </section>
        )}
    </>          
  )
}

export default Login