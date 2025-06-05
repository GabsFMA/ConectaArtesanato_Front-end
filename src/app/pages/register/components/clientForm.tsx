export default function ClientForm() {
    return(
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
      <button
        type="submit"
        className="w-full bg-[#D8671E] text-white py-2 rounded hover:bg-[#C0581A] transition duration-200"
      >
        Registrar como Cliente
      </button>
    </form>
    )
}