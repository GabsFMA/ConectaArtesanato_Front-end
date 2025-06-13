import React from 'react';

export default function AddressFields({ addresses, onAddressChange, onAddAddress, onRemoveAddress }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">Endereços</h3>
      {addresses.map((address, index) => (
        <div key={index} className="border p-4 rounded-md mb-4 bg-gray-50 relative">
          <h4 className="text-lg font-medium mb-3 text-gray-600">Endereço #{index + 1}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor={`street-${index}`}>
                Rua
              </label>
              <input
                type="text"
                id={`street-${index}`}
                name="street"
                value={address.street}
                onChange={(e) => onAddressChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor={`number-${index}`}>
                Número
              </label>
              <input
                type="text"
                id={`number-${index}`}
                name="number"
                value={address.number}
                onChange={(e) => onAddressChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor={`complement-${index}`}>
                Complemento
              </label>
              <input
                type="text"
                id={`complement-${index}`}
                name="complement"
                value={address.complement}
                onChange={(e) => onAddressChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor={`neighborhood-${index}`}>
                Bairro
              </label>
              <input
                type="text"
                id={`neighborhood-${index}`}
                name="neighborhood"
                value={address.neighborhood}
                onChange={(e) => onAddressChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor={`city-${index}`}>
                Cidade
              </label>
              <input
                type="text"
                id={`city-${index}`}
                name="city"
                value={address.city}
                onChange={(e) => onAddressChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor={`state-${index}`}>
                Estado
              </label>
              <input
                type="text"
                id={`state-${index}`}
                name="state"
                value={address.state}
                onChange={(e) => onAddressChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor={`zipCode-${index}`}>
                CEP
              </label>
              <input
                type="text"
                id={`zipCode-${index}`}
                name="zipCode"
                value={address.zipCode}
                onChange={(e) => onAddressChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor={`type-${index}`}>
                Tipo
              </label>
              <input
                type="text"
                id={`type-${index}`}
                name="type"
                value={address.type}
                onChange={(e) => onAddressChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
              />
            </div>
            <div className="col-span-full">
              <label className="block text-sm font-medium mb-2" htmlFor={`reference-${index}`}>
                Ponto de Referência
              </label>
              <input
                type="text"
                id={`reference-${index}`}
                name="reference"
                value={address.reference}
                onChange={(e) => onAddressChange(index, e)}
                className="w-full p-2 border border-gray-300 rounded focus:ring-[#D8671E] focus:border-[#D8671E]"
              />
            </div>
          </div>
          {addresses.length > 1 && (
            <button
              type="button"
              onClick={() => onRemoveAddress(index)}
              className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition duration-200 text-xs w-6 h-6 flex items-center justify-center"
              title="Remover Endereço"
            >
              X
            </button>
          )}
        </div>
      ))}
      <button
        type="button"
        onClick={onAddAddress}
        className="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition duration-200"
      >
        Adicionar Endereço
      </button>
    </div>
  );
}