import { useState } from "react";

const defaultSettings = JSON.parse(
    localStorage.getItem("currentAdmin")
);

function SettingsPage({display}){

    const [settings,setSettings] = useState(()=>{
        const saved = JSON.parse(
            localStorage.getItem("storeSettings")
        );
        return saved || defaultSettings;
    });

    const [isEditing,setIsEditing] = useState(false);

    function updateField(field,value){
        setSettings(prev => (
            {...prev, [field]: value}
        ));
    }

    function toggleField(field){
        setSettings(prev => (
            {...prev, [field]: !prev[field]}
        ));
    }

    function handleSubmit(){
        if(isEditing){
            localStorage.setItem(
                "storeSettings", 
                JSON.stringify(settings)
            );
        }
        setIsEditing(prev => !prev);
    }


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
            <span>Admin Email</span>
             <input 
                   type="email"
                   value={settings.email}
                   readOnly={!isEditing}
                   onChange={e=>updateField("email",e.target.value)}/>
        </label>
        <label className="field">
            <span>Admin Password</span>
             <input 
                   type="password"
                   value={settings.password}
                   readOnly={!isEditing}
                   onChange={e=>updateField("password",e.target.value)}/>
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
                 onClick={handleSubmit}>
            {isEditing ? "Save settings" : "Edit Setting"}
        </button>
    </div>
</div>
</section>)
}
export default SettingsPage;