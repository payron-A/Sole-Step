import { useEffect, useRef, useState } from 'react';
import Button from '../../components/button.jsx';
import { Link } from 'react-router-dom';

function LoginPage({display,setPage,setAdmin,setIsLogin}){

// _____ STATE _____
// _____ Inputs Value 
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

// _____ Admins : JSON File
    const [admins,setAdmins] = useState();

// _____ Get Current Admin after Fetching Admins Json file
    const [currentAdmin , setCurrentAdmin] = useState();


// _____ Check if still Fetching
    const [isLoading,setIsLoading] = useState(false)

// _____ Error Message when filed Fetching Admins file 
    const [errorMsg,setErrorMsg] = useState();

// _____ Change Page && Get Admin Info after success LogIn
    function goToDashboard(){
      emailRef.current.value = "";
      passwordRef.current.value = "";
      setErrorMsg(null)
      setAdmin(currentAdmin);
      setIsLogin(true);
      setPage("Dashboard");
    }

// _____ Login 
    function checkAccount(){
      const emailIpt = emailRef.current.value.trim();
      const passwordIpt = passwordRef.current.value.trim();
      if(!admins) return setErrorMsg("Network Error");
      if(emailIpt && passwordIpt){
          setCurrentAdmin(
            admins.find(admin => admin.email === emailIpt)
          )
          if(!currentAdmin)return setErrorMsg("Check you Email");
          if(emailIpt === currentAdmin.email){
            if(passwordIpt === currentAdmin.password){
              return goToDashboard();
            }else{
              return setErrorMsg("Check you Password")
            }
          }
      }
      return setErrorMsg("FillOut your Data")
    }

// _____ Fetching Api
    async function fetchApi(){
          try{
            setIsLoading(true)
            const  rs = await fetch("/admin.json");
            if(!rs.ok)return setErrorMsg("Field Fetch Files")
            const data = await rs.json();
            return data;
          }
          catch(error){
            setErrorMsg(error.message)
          }
          finally{
            setIsLoading(false)
          }
      }
    useEffect(()=>{
      async function load(){
          const data = await fetchApi()
          setAdmins(data);
      };
      load();
    },[]);


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
                        />
                <span>Remember me</span>
            </label>
            <Link to="/"className="forgot">
                I'm Customer
            </Link>
        </div>
        <Button type="submit" 
                variant="btn-rose">
                {isLoading?"Loading":"Login"}
        </Button>
    </form>
  </div>
</div>
</section>    )
}
export default LoginPage;
export function Error({msg = "Invalid Data"}){
  return (
    <div>Error: {msg}</div>
  )
}