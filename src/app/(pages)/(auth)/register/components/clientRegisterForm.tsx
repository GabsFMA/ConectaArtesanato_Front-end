import React, { useState } from 'react';
interface ClientFormData {
  name: string;
  email: string;
  password: string;
}

const INITIAL_CLIENT_FORM_DATA: ClientFormData = {
  name: '',
  email: '',
  password: '',
};

export default function ClientForm() {

  const [formData, setFormData] = useState<ClientFormData>(INITIAL_CLIENT_FORM_DATA);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); 
    console.log('Client Form Data Submitted:', formData);
    alert('Dados do cliente enviados! (Verifique o console para os dados)');

 
    setFormData(INITIAL_CLIENT_FORM_DATA);
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-sm mx-auto bg-white rounded-lg shadow-md">

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="name">
          Nome <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="email">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email" 
          value={formData.email}
          onChange={handleChange} 
          className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="password">
          Senha <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          id="password"
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-[#D8671E] text-white py-2 rounded hover:bg-[#C0581A] transition duration-200"
      >
        Registrar
      </button>
    </form>
  );
}