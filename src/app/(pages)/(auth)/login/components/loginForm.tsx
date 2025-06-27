"use client";

import { useState, FormEvent } from 'react';
import api from '@/services/api';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            const response = await api.post('/auth/login', { email, password });
            const { token, user } = response.data;
            if (token && user) {
                login(token, user); 
            } else {
                setError('Token ou dados do usuário não recebidos do servidor.');
            }
        } catch (err: any) {
            console.error('Erro de login:', err);
            const errorMessage = err.response?.data?.message || 'Falha no login. Verifique suas credenciais.';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded" required disabled={isLoading}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="password">
                    Senha
                </label>
                <input
                    type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded" required disabled={isLoading}
                />
            </div>
            <button
                type="submit" disabled={isLoading}
                className="w-full bg-[#D8671E] text-white py-2 rounded hover:bg-[#C0581A] transition duration-200 disabled:bg-gray-400"
            >
                {isLoading ? 'Entrando...' : 'Entrar'}
            </button>
        </form>
    );
}