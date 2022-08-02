import React from "react";
import Context from "./index";

function ContextProvider({ children }) {

    const [user, setUser] = React.useState(null);
    const [role, setRole] = React.useState(null);

    React.useEffect(() => {
        let user = localStorage.getItem("token");
        let role = localStorage.getItem('role');
        if (user) {
            setUser({ token: user });
            setRole(role);
        }
    }, []);

    return (
        <Context.Provider value={{
            user,
            setUser,
            role, setRole
        }}>
            {children}
        </Context.Provider>
    );
}
export default ContextProvider;