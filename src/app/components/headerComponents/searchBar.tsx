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
    <div className="relative w-xl flex flex-col items-center">
      <div className="relative w-full">
        <input
          className="bg-white p-2 pr-10 pl-4 w-full rounded-3xl text-black placeholder:text-black focus:outline-none"
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => onQueryChange(e.target.value)} 
        />
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
      </div>
    </div>
  );
}