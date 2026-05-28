import { useRef, useState } from "react";

function SettingsPage({display,settings,setSettings,changePassword}){

    const [isEditing,setIsEditing] = useState(false);
    const [pwMsg,setPwMsg] = useState(null);

    const currentPwRef = useRef(null);
    const newPwRef = useRef(null);
    const confirmPwRef = useRef(null);

    function updateField(field,value){
        setSettings(prev => ({...prev, [field]: value}));
    }
    function toggleField(field){
        setSettings(prev => ({...prev, [field]: !prev[field]}));
    }
    function handleEditToggle(){
        setIsEditing(prev => !prev);
    }

    function handlePasswordSubmit(e){
        e.preventDefault();
        const current = currentPwRef.current.value;
        const next = newPwRef.current.value;
        const confirm = confirmPwRef.current.value;

        if(!current || !next || !confirm){
            return setPwMsg({ ok:false, text:"Fill out all password fields." });
        }
        if(next !== confirm){
            return setPwMsg({ ok:false, text:"New passwords don't match." });
        }
        const result = changePassword(current, next);
        setPwMsg({ ok:result.ok, text:result.message });
        if(result.ok){
            currentPwRef.current.value = "";
            newPwRef.current.value = "";
            confirmPwRef.current.value = "";
        }
    }
    return (
<section className="page" style={{display:display}}>
<div className="settings-grid">
    <div className="panel profile-panel">
        <svg    className="settings-avatar"
                viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.8"
                strokeLinecap="round"><circle cx="12" cy="8"
                r="4"/><path d="M4 21v-1a8 8 0 0 1 16 0v1"/>
        </svg>
        <h3>Public Data</h3>
        <button className="btn-ghost danger">
            Change photo
        </button>
    </div>

    <div className="panel settings-form">
        <label className="field">
            <span>Admin email</span>
            <input value={settings.email}
                   readOnly={!isEditing}
                   onChange={e=>updateField("email",e.target.value)}/>
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
                className="switch"
                checked={settings.emailNotifications}
                disabled={!isEditing}
                onChange={()=>toggleField("emailNotifications")}/>
        </label>
        <label className="switch-row">
            <span>Low stock alerts</span>
            <input type="checkbox"
                className="switch"
                checked={settings.lowStockAlerts}
                disabled={!isEditing}
                onChange={()=>toggleField("lowStockAlerts")}/>
        </label>
        <button className={`btn-ghost 
                    ${isEditing?"save":"danger"}`} 
                onClick={handleEditToggle}>
            {isEditing ? "Save settings" : "Edit Setting"}
        </button>
    </div>

    <div className="panel settings-form" style={{gridColumn:"1 / -1"}}>
        <form onSubmit={handlePasswordSubmit}
              style={{display:"flex",flexDirection:"column",gap:"14px"}}>
            <label className="field">
                <span>Current password</span>
                <input type="password" ref={currentPwRef}/>
            </label>
            <label className="field">
                <span>New password</span>
                <input type="password" ref={newPwRef}/>
            </label>
            <label className="field">
                <span>Confirm new password</span>
                <input type="password" ref={confirmPwRef}/>
            </label>
            {pwMsg &&
                <small style={{color: pwMsg.ok ? "var(--rose,#c2705f)" : "#c91212"}}>
                    {pwMsg.text}
                </small>
            }
            <button className="btn-ghost danger" type="submit">
                Update password
            </button>
        </form>
    </div>
</div>
</section>)
}
export default SettingsPage;
