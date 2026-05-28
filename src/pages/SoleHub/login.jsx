import { useEffect, useRef, useState } from 'react';
import Button from '../../components/button.jsx';

function LoginPage({display}){
    const password ="azzedine.007";
    const email = "az.zi.mo.fa@gmail.com";
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
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
          onSubmit={(e)=> e.preventDefault()}>
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
        </label>
        <div className="field-row">
            <label className="remember">
                <input  className='switch'
                        type="checkbox"/>
                <span>Remember me</span>
            </label>
            <a className="forgot">
                I'm Customer
            </a>
        </div>
        <Button type="submit" 
                variant="btn-rose">
                Login
        </Button>
    </form>
  </div>
</div>
</section>    )
}
export default LoginPage;