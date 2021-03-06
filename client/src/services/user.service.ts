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
    login: async (data: IForm) => {
        const res = await fetch('http://localhost:3001/api/auth/login', {
            body: JSON.stringify({ 
                email: data.email, 
                password: data.password 
            }),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await res.json();
    },
    logout: async (token: object) => {
        const res = await fetch('http://localhost:3001/api/auth/logout', {
            body: JSON.stringify(token),
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await res.json();
    },
    isAuthenticated: () => {
        return localStorage.getItem('auth-token') !== null;
    },
    getUser: async (token: string) => {
        const res = await fetch('http://localhost:3001/api/auth/user-info', {
            headers: { 
                'Authorization': `Bearer ${token}` 
            }
        });

        return await res.json()
    }
} 

export default userService;