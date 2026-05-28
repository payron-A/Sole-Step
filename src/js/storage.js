// Tiny helper so every piece of SoleHub data survives a refresh.
// Reads a saved value from localStorage, or falls back to seed data
// the very first time the app runs.
export function loadOrSeed(key, seedData){
    try{
        const saved = localStorage.getItem(key);
        if(saved) return JSON.parse(saved);
    }catch(err){
        console.warn(`Could not read "${key}" from storage`, err);
    }
    return seedData;
}

export function save(key, value){
    try{
        localStorage.setItem(key, JSON.stringify(value));
    }catch(err){
        console.warn(`Could not save "${key}" to storage`, err);
    }
}
