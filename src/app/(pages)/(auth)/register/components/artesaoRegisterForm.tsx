"use client";

import React, { useState } from 'react';
import AddressFields from './addressFields';
import api from '@/services/api';
import { useRouter } from 'next/navigation';

export default function ArtesaoForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    brandName: '',
    cpf_cnpj: '',
    email: '',
    password: '',
    profilePictureURL: '',
    personalData: {
      birthDate: '',
      phone: [''], 
    },
    story: '',
    artInfo: '',
    addresses: [{
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      zipCode: '',
      type: 'Comercial',
      reference: '',
    }],
  });

  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePersonalDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      personalData: {
        ...prevData.personalData,
        [name]: value,
      },
    }));
  };

  const handlePhoneChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newPhones = [...formData.personalData.phone];
    newPhones[index] = e.target.value;
    setFormData(prevData => ({
      ...prevData,
      personalData: {
        ...prevData.personalData,
        phone: newPhones,
      },
    }));
  };

  const addPhoneField = () => {
    setFormData(prevData => ({
      ...prevData,
      personalData: {
        ...prevData.personalData,
        phone: [...prevData.personalData.phone, ''],
      },
    }));
  };

  const removePhoneField = (index: number) => {
    const newPhones = formData.personalData.phone.filter((_, i) => i !== index);
    setFormData(prevData => ({
      ...prevData,
      personalData: {
        ...prevData.personalData,
        phone: newPhones,
      },
    }));
  };

  const handleAddressChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newAddresses = [...formData.addresses];
    newAddresses[index] = {
      ...newAddresses[index],
      [name]: value,
    };
    setFormData(prevData => ({
      ...prevData,
      addresses: newAddresses,
    }));
  };

  const addAddressField = () => {
    setFormData(prevData => ({
      ...prevData,
      addresses: [...prevData.addresses, {
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        zipCode: '',
        type: 'Comercial',
        reference: '',
      }],
    }));
  };

  const removeAddressField = (index: number) => {
  const removeAddressField = (index: number) => {
    const newAddresses = formData.addresses.filter((_, i) => i !== index);
    setFormData(prevData => ({
      ...prevData,
      addresses: newAddresses,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const payload = {
        ...formData,
        role: 'artisan',
        personalData: {
            ...formData.personalData,
            phone: formData.personalData.phone.filter(p => p.trim() !== ''),
        }
    };
    
    // O backend pode não esperar um campo vazio, então removemos se não for preenchido
    if (!payload.profilePictureURL) {
      delete (payload as any).profilePictureURL;
    }

    try {
        const response = await api.post('/auth/register', payload);
        console.log('Form Data Submitted:', response.data);
        alert('Cadastro de artesão realizado com sucesso! Você será redirecionado para o login.');
        router.push('/login');

    } catch (err: any) {
        console.error('Erro no registro do artesão:', err);
        const errorMessage = err.response?.data?.message || 'Ocorreu um erro ao cadastrar o artesão. Verifique os dados e tente novamente.';
        setError(errorMessage);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#D8671E]">Registro de Artesão</h2>
      {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
      
      <fieldset disabled={isLoading}>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Informações Básicas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="fullName">
                Nome Completo <span className="text-red-500">*</span>
              </label>
              <input
                type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="brandName">
                Nome da Marca/Ateliê <span className="text-red-500">*</span>
              </label>
              <input
                type="text" id="brandName" name="brandName" value={formData.brandName} onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="cpf_cnpj">
                CPF/CNPJ <span className="text-red-500">*</span>
              </label>
              <input
                type="text" id="cpf_cnpj" name="cpf_cnpj" value={formData.cpf_cnpj} onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="password">
                Senha <span className="text-red-500">*</span>
              </label>
              <input
                type="password" id="password" name="password" value={formData.password} onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="profilePictureURL">
                URL da Imagem de Perfil
              </label>
              <input
                type="url" id="profilePictureURL" name="profilePictureURL" value={formData.profilePictureURL} onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
                placeholder="Ex: https://minhaimagem.com/foto.jpg"
              />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Dados Pessoais</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="birthDate">
                Data de Nascimento
              </label>
              <input
                type="date" id="birthDate" name="birthDate" value={formData.personalData.birthDate} onChange={handlePersonalDataChange}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
              />
            </div>
            <div className="col-span-full">
              <label className="block text-sm font-medium mb-2">
                Telefones
              </label>
              {formData.personalData.phone.map((phone, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="text" name={`phone-${index}`} value={phone} onChange={(e) => handlePhoneChange(index, e)}
                    className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E] mr-2"
                    placeholder="(XX) XXXXX-XXXX"
                  />
                  {formData.personalData.phone.length > 1 && (
                    <button
                      type="button" onClick={() => removePhoneField(index)} disabled={isLoading}
                      className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 disabled:bg-gray-400"
                    >
                      Remover
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button" onClick={addPhoneField} disabled={isLoading}
                className="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Adicionar Telefone
              </button>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Sobre Seu Trabalho</h3>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="story">
              Sua História (biografia)
            </label>
            <textarea
              id="story" name="story" value={formData.story} onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
              rows={4}
              placeholder="Conte um pouco sobre sua jornada como artesão, sua inspiração, etc."
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="artInfo">
              Informações sobre Sua Arte (tipo de artesanato)
            </label>
            <textarea
              id="artInfo" name="artInfo" value={formData.artInfo} onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
              rows={3}
              placeholder="Descreva o tipo de artesanato que você faz (Ex: Cerâmica, Crochê, Madeira, Joias, etc.)"
            />
          </div>
        </div>
      </fieldset>
      
      <AddressFields
        addresses={formData.addresses}
        onAddressChange={handleAddressChange}
        onAddAddress={addAddressField}
        onRemoveAddress={removeAddressField}
        isLoading={isLoading}
      />

      <button
        type="submit"
        className="w-full bg-[#D8671E] text-white py-3 rounded-md hover:bg-[#C0581A] transition duration-200 text-lg font-semibold disabled:bg-gray-400"
        disabled={isLoading}
      >
        {isLoading ? 'Registrando...' : 'Registrar Artesão'}
      </button>
    </form>
  );
  }
}