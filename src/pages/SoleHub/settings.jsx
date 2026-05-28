import { useRef, useState } from "react";
import { save } from '../../js/storage';
function SettingsPage({display,admin,setAdmin,admins,setAdmins,isLogin}){
    const [isEditing,setIsEditing] = useState(false);
    const [pwMsg,setPwMsg] = useState(null);

    const currentPwRef = useRef(null);
    const newPwRef = useRef(null);
    const confirmPwRef = useRef(null);

    function updateField(field,value){
        setAdmin(prev => ({...prev, [field]: value}));
        const updateEmail = admins.map(a =>
                a.password === admin.password?
                    { ...a, [field]:value }
                    : a
        )
        setAdmins(updateEmail);
    }
    function toggleField(field){
        setAdmin(prev => ({...prev, [field]: !prev[field]}));
        
    }
    function handleEditToggle(){
        setIsEditing(prev => !prev);
    }
    // _____ Change Password _____
    function changePassword(currentPassword, newPassword){
        if(!admin || !isLogin) return { ok:false, message:"You're not logged in." };
        if(admin.password !== currentPassword){
          return { ok:false, message:"Current password is incorrect." };
        }
        const updatedAdmins = admins.map(a =>
          a.email === admin.email ? { ...a, password:newPassword } : a
        );
        setAdmins(updatedAdmins);
        save("admins", updatedAdmins);
        const updatedAdmin = { ...admin, password:newPassword };
        setAdmin(updatedAdmin);
        save("currentAdmin", updatedAdmin);
        return { ok:true, message:"Password updated." };
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
        let result = changePassword(current, next);
        setPwMsg({ ok:result.ok, text:result.message });
        if(result.ok){
            currentPwRef.current.value = "";
            newPwRef.current.value = "";
            confirmPwRef.current.value = "";
            setTimeout(() => {
                setPwMsg("")
            }, 1000);
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
            <input value={admin.email}
                   readOnly={!isEditing}
                   onChange={e=>updateField("email",e.target.value)}/>
        </label>
        <label className="switch-row">
            <span>Email notifications</span>
            <input type="checkbox"
                className="switch"
                checked={admin.emailNotifications}
                disabled={!isEditing}
                onChange={()=>toggleField("emailNotifications")}/>
        </label>
        <label className="switch-row">
            <span>Low stock alerts</span>
            <input type="checkbox"
                className="switch"
                checked={admin.lowStockAlerts}
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
                <small style={{color: pwMsg.ok ? "#48b43a" : "#c91212"}}>
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
