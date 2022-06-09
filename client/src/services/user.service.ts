import { IForm } from "../components/shared/types.forms";

const userService = {
    register: async (data: IForm) => {
        const res = await fetch('http://localhost:3001/api/auth/register', {
            body: JSON.stringify(data),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await res.json();
    },
    isAuthenticated: () => {
        return localStorage.getItem('auth-token') !== null;
    }
} 

export default userService;