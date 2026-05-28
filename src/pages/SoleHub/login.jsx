import { useRef, useState } from 'react';
import Button from '../../components/button.jsx';
import { Link } from 'react-router-dom';

function LoginPage({display,setPage,setAdmin,setIsLogin,admins}){

// _____ STATE _____
// _____ Inputs Value
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const rememberRef = useRef(null);

// _____ Error Message when login fails
  const [errorMsg,setErrorMsg] = useState(null);

// _____ Change Page && Get Admin Info after success LogIn
  function goToDashboard(foundAdmin, remember){
    emailRef.current.value = "";
    passwordRef.current.value = "";
    setErrorMsg(null);
    setAdmin(foundAdmin);
    setIsLogin(remember);
    setPage("Dashboard");
  }

// _____ Login
  function checkAccount(){
    const emailIpt = emailRef.current.value.trim();
    const passwordIpt = passwordRef.current.value.trim();
    const remember = rememberRef.current.checked;

    if(!emailIpt || !passwordIpt){
      return setErrorMsg("Fill out your data");
    }
    if(!admins){
      return setErrorMsg("Still loading, try again in a second");
    }

    const foundAdmin = admins.find(a => a.email === emailIpt);
    if(!foundAdmin) return setErrorMsg("Check your email");
    if(foundAdmin.password !== passwordIpt){
      return setErrorMsg("Check your password");
    }
    return goToDashboard(foundAdmin, remember);
  }

    return (
<section className="page"style={{display:display}}>
<div className="login-screen">
  <div className="login-visual">
    <div className="shoe-badge">
      <img src="/icon.png" alt="Logo"/>
    </div>
    <h1 className="brand-title">Sole &amp; <em>Step</em></h1>
    <p className="brand-tag">Manage your business smarter.</p>
  </div>
  <div className="login-panel">
    <form className="login-form"
          onSubmit={(e)=> {
            e.preventDefault();
            checkAccount();
            }}>
        <h2>Login</h2>
        <label className="field">
            <span>Email</span>
            <input type="email"
                   ref={emailRef}
                   placeholder='name@gmail.com'/>
        </label>

        <label className="field">
            <span>Password</span>
            <input type="password"
                   ref={passwordRef}/>
            {errorMsg && <Error msg={errorMsg}/>}
        </label>
        <div className="field-row">
            <label className="remember">
                <input  className='switch'
                        type="checkbox"
                        ref={rememberRef}/>
                <span>Remember me</span>
            </label>
            <Link to="/"className="forgot">
                I'm Customer
            </Link>
        </div>
        <Button type="submit"
                variant="btn-rose">
                {admins === null ? "Loading" : "Login"}
        </Button>
    </form>
  </div>
</div>
</section>    )
}
export default LoginPage;
export function Error({msg = "Invalid Data"}){
  return (
    <small style={{
      color:"#c0392b",fontSize:"14px",
      display:"flex",gap:"8px",alignItems:"center"}}>
        <div className="error-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 24 24" height="20" fill="none"><path fill="#393a37" d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z"></path></svg>
    </div>
      {msg}
    </small>

  )
}
