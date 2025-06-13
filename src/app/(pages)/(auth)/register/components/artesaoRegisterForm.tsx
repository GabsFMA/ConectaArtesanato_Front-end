import React, { useState } from 'react';
import AddressFields from './addressFields'; 

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
      type: '',
      reference: '',
    }], // Start with one address
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePersonalDataChange = (e: { target: { name: any; value: any; }; }) => {
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

  const handleAddressChange = (
    index: number,
    name: string,
    value: string
  ) => {
    setFormData(prevData => {
      const newAddresses = [...prevData.addresses];
      newAddresses[index] = {
        ...newAddresses[index],
        [name]: value,
      };
      return {
        ...prevData,
        addresses: newAddresses,
      };
    });
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
        type: '',
        reference: '',
      }],
    }));
  };

  const removeAddressField = (index: number) => {
    const newAddresses = formData.addresses.filter((_, i) => i !== index);
    setFormData(prevData => ({
      ...prevData,
      addresses: newAddresses,
    }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    alert('Dados do artesão enviados! (Verifique o console para os dados)');
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-2xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#D8671E]">Registro de Artesão</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-700">Informações Básicas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="fullName">
              Nome Completo <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="brandName">
              Nome da Marca/Ateliê <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="brandName"
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="cpf_cnpj">
              CPF/CNPJ <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="cpf_cnpj"
              name="cpf_cnpj"
              value={formData.cpf_cnpj}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
              required
            />
          </div>
          <div>
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
          <div>
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
          <div>
            <label className="block text-sm font-medium mb-2" htmlFor="profilePictureURL">
              URL da Imagem de Perfil
            </label>
            <input
              type="url"
              id="profilePictureURL"
              name="profilePictureURL"
              value={formData.profilePictureURL}
              onChange={handleChange}
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
              type="date"
              id="birthDate"
              name="birthDate"
              value={formData.personalData.birthDate}
              onChange={handlePersonalDataChange}
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
                  type="text"
                  name={`phone-${index}`}
                  value={phone}
                  onChange={(e) => handlePhoneChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E] mr-2"
                  placeholder="(XX) XXXXX-XXXX"
                />
                {formData.personalData.phone.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removePhoneField(index)}
                    className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200"
                  >
                    Remover
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addPhoneField}
              className="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition duration-200"
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
            id="story"
            name="story"
            value={formData.story}
            onChange={handleChange}
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
            id="artInfo"
            name="artInfo"
            value={formData.artInfo}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
            rows={3}
            placeholder="Descreva o tipo de artesanato que você faz (Ex: Cerâmica, Crochê, Madeira, Joias, etc.)"
          />
        </div>
      </div>

      <AddressFields
        addresses={formData.addresses}
        onAddressChange={handleAddressChange}
        onAddAddress={addAddressField}
        onRemoveAddress={removeAddressField}
      />

      <button
        type="submit"
        className="w-full bg-[#D8671E] text-white py-3 rounded-md hover:bg-[#C0581A] transition duration-200 text-lg font-semibold"
      >
        Registrar Artesão
      </button>
    </form>
  );
}