import { useEffect, useState } from "react";

const getPersistenceValue = (key: string, defaultValue: string) => {
    // get stored value
    const saved = localStorage.getItem(key) as string;
    
    return saved ? JSON.parse(saved) : defaultValue;
}

const getPlayerSettings = () => {
    return JSON.parse(localStorage.getItem('appSettings') as string);
}

const getUserIdentity = () => {
    return JSON.parse(localStorage.getItem('username') as string)
}

const getPersistedValue = (key: string) => {

    if (localStorage.hasOwnProperty('username') && localStorage.hasOwnProperty('appSettings')) {
        let playerSettings = getPlayerSettings();
        let userIdentity = getUserIdentity();
        let currentUserObj = playerSettings.find((x:any) => x[userIdentity] !== undefined);

        return currentUserObj[userIdentity][key] != null ? currentUserObj[userIdentity][key] : null;
    }
}

const setPersistenceValue = (key: string, value: any) => {
    // store the value
    
    // find logged-in user in LocalStorage
    if (localStorage.hasOwnProperty('username') && localStorage.hasOwnProperty('appSettings')) {
        let playerSettings = getPlayerSettings();
        let userIdentity = getUserIdentity();
        let currentUserObj = playerSettings.find((x:any) => x[userIdentity] !== undefined);
        currentUserObj[userIdentity][key] = value;

        localStorage.setItem('appSettings', JSON.stringify(playerSettings))
    }
}

const usePersistence = (key: string, defaultValue: any) => {

    const [value, setValue] = useState(() => {
        return getPersistenceValue(key, defaultValue);
    });

    const updateSetValue = (val: any) => {
        setValue(val);
    }

    useEffect(() => {
        // storing input
        setPersistenceValue(key, value)
    }, [key, value]);

    return [value, updateSetValue];
}

export { getPersistenceValue, usePersistence, getPersistedValue, setPersistenceValue };