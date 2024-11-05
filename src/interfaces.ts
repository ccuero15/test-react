export interface AuthContextType {
    //user: string | null;
    //login: (username: string) => void;
    //logout: () => void;
    isAuthtenticated: boolean
}


export interface LayoutProps {
    children: React.ReactNode
}

export interface SignupFormData {
    username: string;
    email: string;
    password: string;
    confirmPassword: string; // Asegúrate de tener este campo también
}