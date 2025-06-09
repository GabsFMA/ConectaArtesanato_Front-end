export default function ArtesaoForm() {
  return (
    <form>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="name">
          Nome
        </label>
        <input
          type="text"
          id="name"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="password">
          Senha
        </label>
        <input
          type="password"
          id="password"
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="craft">
          Tipo de Artesanato
        </label>
        <input
          type="text"
          id="craft"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Ex: Cerâmica, Crochê, Madeira..."
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2" htmlFor="bio">
          Breve descrição sobre você
        </label>
        <textarea
          id="bio"
          className="w-full p-2 border border-gray-300 rounded"
          rows={3}
          placeholder="Conte um pouco sobre seu trabalho"
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