"use client";

import { useState, FormEvent } from 'react';
import api from '@/services/api';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function ClientForm() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false); 
    const router = useRouter();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setIsLoading(true);

        try {
            await api.post('/auth/register', {
                fullName,
                email,
                password,
                role: 'client'
            });
            setIsSuccess(true); 
        } catch (err: any) {
            const errorMessage = err.response?.data?.message || 'Ocorreu um erro ao tentar se cadastrar. Tente novamente.';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    };
    
    if (isSuccess) {
      return (
        <div className="text-center">
          <h3 className="text-xl font-bold text-green-600 mb-4">Cadastro realizado com sucesso!</h3>
          <p className="text-gray-700">Você já pode fazer o login na plataforma.</p>
          <Link href="/login" className="mt-6 inline-block bg-[#D8671E] text-white px-6 py-2 rounded font-semibold">
            Ir para Login
          </Link>
        </div>
      )
    }
    
    return (
        <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="name">Nome Completo</label>
                <input type="text" id="name" value={fullName} onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded" required disabled={isLoading}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded" required disabled={isLoading}
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="password">Senha</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded" required disabled={isLoading}
                />
            </div>
            <button type="submit" disabled={isLoading}
                className="w-full bg-[#D8671E] text-white py-2 rounded hover:bg-[#C0581A] transition duration-200 disabled:bg-gray-400">
                {isLoading ? 'Registrando...' : 'Registrar'}
            </button>
        </form>
    );
}