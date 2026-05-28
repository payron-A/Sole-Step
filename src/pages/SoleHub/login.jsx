import Button from '../../components/button.jsx'
function LoginPage(){
    return (
<div className="login-screen">
  <div className="login-visual">
    <div className="shoe-badge">
      <img src="/icon.png" alt="Logo"/>
    </div>
    <h1 className="brand-title">Sole &amp; <em>Step</em></h1>
    <p className="brand-tag">Manage your business smarter.</p>
  </div>
  <div className="login-panel">
    <form className="login-form" action="dashboard.html">
        <h2>Login</h2>
        <label className="field">
            <span>Email</span>
            <input type="text"
                placeholder='name@gmail.com'/>
        </label>
        <label className="field">
            <span>Password</span>
            <input type="password"/>
        </label>
        <div className="field-row">
            <label className="remember">
                <input  className='switch'
                        type="checkbox"/>
                <span>Remember me</span>
            </label>
            <a href="#" className="forgot">
                Don't have account ?
            </a>
        </div>
        <Button type="submit" 
                variant="btn-rose">
                Login
        </Button>
    </form>
  </div>
</div>
    )
}
export default LoginPage;