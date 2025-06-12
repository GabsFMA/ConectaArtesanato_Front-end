import { Search } from "lucide-react";

interface SearchBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({
  query,
  onQueryChange,
  placeholder = "Pesquise por artesanato..."
}: SearchBarProps) {
  return (
    <div className="relative w-xl flex flex-col items-center p-1 rounded-3xl bg-orange-300"> {/* Adicionado p-1, rounded-3xl e bg-orange-300 */}
      <div className="relative w-full">
        <input
          className="bg-orange-50 p-2 pr-10 pl-4 w-full rounded-3xl text-black placeholder:text-gray-500 focus:outline-none border border-orange-200" // Cor de fundo, placeholder e borda ajustados
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" /> {/* Cor do ícone ajustada */}
      </div>
    </div>
  );
}