import {  useState } from "react";
import { AuthContext } from "../context/authContext";
//import { AuthContext } from "../context/AuthContext";


export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    //const [user, setUser] = useState<string | null>(null);

    //const login = (username: string) => setUser(username);
    //const logout = () => setUser(null);

    const [ isAuthtenticated ] = useState(false)

    return (
        <AuthContext.Provider value={{ isAuthtenticated }}>
            {children}
        </AuthContext.Provider>
    );
};