function SettingsPage({display}){
    return (
<section className="page"style={{display:display}}>
<div className="settings-grid">
    <div className="panel profile-panel">
        <svg    className="settings-avatar"
                viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8" 
                strokeLinecap="round"><circle cx="12" cy="8" 
                r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/>
        </svg>
        <h3>Public Data </h3>
        <button className="btn-ghost danger">
            Change photo
        </button>
    </div>
    <div className="panel settings-form">
        <label className="field">
            <span>Store name</span>
            <input value="Sole & Step" readOnly/>
        </label>
        <label className="field">
            <span>Admin email</span>
            <input value="admin@soleandstep.com" readOnly/>
        </label>
        <label className="field">
            <span>Language</span>
            <select defaultValue="en">
                <option disabled value="en">English</option>
                <option disabled>العربية</option>
            </select>
        </label>
        <label className="switch-row">
            <span>Email notifications</span>
            <input type="checkbox" 
                className="switch" checked readOnly/>
        </label>
        <label className="switch-row">
            <span>Low stock alerts</span>
            <input type="checkbox" 
                className="switch" checked readOnly/>
        </label>
        <button className="btn-ghost danger">
            Edit Setting
        </button>
    </div>
</div>
</section>)
}
export default SettingsPage;