import React, { createContext, useState } from 'react';

export const StepperContext = createContext();

export const StepperProvider = ({ children }) => {
    const [state1, setState1] = useState(false);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);
    const [state4, setState4] = useState(false);
    const [state5, setState5] = useState(false);

    // user data
    const [userData, setUserData] = useState({
        gender: null,
        age: null,
        height: null,
        weight: null,
        activityLevel: null,
        goal: null,
        transformation: null
    });

    // Values for the context
    const stepperInfo = { 
        state1, 
        setState1, 
        state2, 
        setState2, 
        state3, 
        setState3, 
        state4, 
        setState4, 
        state5, 
        setState5,
        userData,
        setUserData
    }

    return (
        <StepperContext.Provider value={stepperInfo}>
            {children}
        </StepperContext.Provider>
    );
};