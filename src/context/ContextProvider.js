import React from "react";
import Context from "./index";

function ContextProvider({ children }) {

    const [user, setUser] = React.useState(null);

    React.useEffect(() => {
        let user = localStorage.getItem("token");
        if (user) {
            setUser({ token: user })
        }
    }, [])

    return (
        <Context.Provider value={{
            user,
            setUser
        }}>
            {children}
        </Context.Provider>
    );
}
export default ContextProvider;