"use client";

import { useState, useEffect } from "react";
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Heart, 
  ShoppingCart,
  MapPin,
  SlidersHorizontal,
  X
} from "lucide-react";

interface Product {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  precoOriginal?: number;
  imagem: string;
  artesao: {
    id: string;
    nome: string;
    localizacao: string;
    avaliacao: number;
  };
  categoria: string;
  avaliacao: number;
  totalAvaliacoes: number;
  isFavorito: boolean;
  isPromocao: boolean;
  tags: string[];
}

const mockProducts: Product[] = [
  {
    id: "1",
    nome: "Vaso de Cerâmica Artesanal",
    descricao: "Vaso decorativo feito à mão com técnicas tradicionais de cerâmica.",
    preco: 45.90,
    precoOriginal: 55.90,
    imagem: "/images/Art1.jpg",
    artesao: {
      id: "1",
      nome: "Maria Silva",
      localizacao: "São Paulo, SP",
      avaliacao: 4.8
    },
    categoria: "Cerâmica",
    avaliacao: 4.7,
    totalAvaliacoes: 23,
    isFavorito: false,
    isPromocao: true,
    tags: ["decoração", "casa", "artesanal"]
  },
  {
    id: "2",
    nome: "Bordado Floral Tradicional",
    descricao: "Bordado feito à mão com motivos florais tradicionais brasileiros.",
    preco: 89.90,
    imagem: "/images/Art2.jpg",
    artesao: {
      id: "2",
      nome: "Ana Costa",
      localizacao: "Minas Gerais, MG",
      avaliacao: 4.9
    },
    categoria: "Bordados",
    avaliacao: 4.8,
    totalAvaliacoes: 15,
    isFavorito: true,
    isPromocao: false,
    tags: ["bordado", "tradicional", "decoração"]
  },
  {
    id: "3",
    nome: "Cesta Artesanal de Palha",
    descricao: "Cesta feita com palha natural, perfeita para organização e decoração.",
    preco: 67.50,
    imagem: "/images/Art3.jpg",
    artesao: {
      id: "3",
      nome: "Carlos Lima",
      localizacao: "Bahia, BA",
      avaliacao: 4.6
    },
    categoria: "Cestaria",
    avaliacao: 4.5,
    totalAvaliacoes: 8,
    isFavorito: false,
    isPromocao: false,
    tags: ["palha", "organização", "sustentável"]
  },
  {
    id: "4",
    nome: "Tapete Artesanal Colorido",
    descricao: "Tapete tecido à mão com cores vibrantes e padrões únicos.",
    preco: 125.90,
    imagem: "/images/Art4.jpg",
    artesao: {
      id: "4",
      nome: "Lucia Fernandes",
      localizacao: "Ceará, CE",
      avaliacao: 4.9
    },
    categoria: "Tecelagem",
    avaliacao: 4.9,
    totalAvaliacoes: 31,
    isFavorito: false,
    isPromocao: false,
    tags: ["tapete", "colorido", "decoração"]
  },
  {
    id: "5",
    nome: "Luminária de Bambu",
    descricao: "Luminária sustentável feita com bambu natural e design moderno.",
    preco: 78.50,
    precoOriginal: 95.00,
    imagem: "/images/Art5.jpg",
    artesao: {
      id: "5",
      nome: "Pedro Oliveira",
      localizacao: "Rio de Janeiro, RJ",
      avaliacao: 4.7
    },
    categoria: "Iluminação",
    avaliacao: 4.7,
    totalAvaliacoes: 19,
    isFavorito: true,
    isPromocao: true,
    tags: ["bambu", "sustentável", "iluminação"]
  },
  {
    id: "6",
    nome: "Quadro Pintado à Mão",
    descricao: "Pintura original em tela com paisagem brasileira.",
    preco: 156.00,
    imagem: "/images/Art6.jpg",
    artesao: {
      id: "6",
      nome: "Sofia Martins",
      localizacao: "Paraná, PR",
      avaliacao: 4.8
    },
    categoria: "Pintura",
    avaliacao: 4.8,
    totalAvaliacoes: 12,
    isFavorito: false,
    isPromocao: false,
    tags: ["pintura", "paisagem", "arte"]
  }
];

const categorias = ["Todas", "Cerâmica", "Bordados", "Cestaria", "Tecelagem", "Iluminação", "Pintura"];
const ordenacaoOpcoes = [
  { value: "relevancia", label: "Relevância" },
  { value: "preco-menor", label: "Menor preço" },
  { value: "preco-maior", label: "Maior preço" },
  { value: "avaliacao", label: "Melhor avaliação" },
  { value: "mais-vendidos", label: "Mais vendidos" }
];

export default function ProductListPage() {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [sortBy, setSortBy] = useState("relevancia");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });
  const [showPromocaoOnly, setShowPromocaoOnly] = useState(false);

  useEffect(() => {
    let filtered = [...products];

    // Filtro por busca
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.descricao.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.artesao.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filtro por categoria
    if (selectedCategory !== "Todas") {
      filtered = filtered.filter(product => product.categoria === selectedCategory);
    }

    // Filtro por faixa de preço
    filtered = filtered.filter(product => 
      product.preco >= priceRange.min && product.preco <= priceRange.max
    );

    // Filtro por promoção
    if (showPromocaoOnly) {
      filtered = filtered.filter(product => product.isPromocao);
    }

    // Ordenação
    switch (sortBy) {
      case "preco-menor":
        filtered.sort((a, b) => a.preco - b.preco);
        break;
      case "preco-maior":
        filtered.sort((a, b) => b.preco - a.preco);
        break;
      case "avaliacao":
        filtered.sort((a, b) => b.avaliacao - a.avaliacao);
        break;
      case "mais-vendidos":
        filtered.sort((a, b) => b.totalAvaliacoes - a.totalAvaliacoes);
        break;
      default:
        // Relevância (ordem original)
        break;
    }

    setFilteredProducts(filtered);
  }, [products, searchTerm, selectedCategory, sortBy, priceRange, showPromocaoOnly]);

  const toggleFavorite = (productId: string) => {
    setProducts(prev => prev.map(product => 
      product.id === productId 
        ? { ...product, isFavorito: !product.isFavorito }
        : product
    ));
  };

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={product.imagem} 
          alt={product.nome}
          className="w-full h-48 object-cover"
        />
        {product.isPromocao && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
            Promoção
          </span>
        )}
        <button 
          onClick={() => toggleFavorite(product.id)}
          className={`absolute top-2 right-2 p-2 rounded-full ${
            product.isFavorito 
              ? 'bg-red-500 text-white' 
              : 'bg-white text-gray-600 hover:text-red-500'
          } transition-colors`}
        >
          <Heart className={`w-4 h-4 ${product.isFavorito ? 'fill-current' : ''}`} />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{product.nome}</h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.descricao}</p>
        
        <div className="flex items-center mb-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="ml-1 text-sm text-gray-600">
            {product.avaliacao} ({product.totalAvaliacoes})
          </span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span>{product.artesao.nome} • {product.artesao.localizacao}</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-[#C08B74]">
              R$ {product.preco.toFixed(2)}
            </span>
            {product.precoOriginal && (
              <span className="text-sm text-gray-500 line-through">
                R$ {product.precoOriginal.toFixed(2)}
              </span>
            )}
          </div>
          <button className="bg-[#C08B74] text-white p-2 rounded-lg hover:bg-[#A67A63] transition-colors">
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );

  const ProductListItem = ({ product }: { product: Product }) => (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4 hover:shadow-lg transition-shadow">
      <div className="relative">
        <img 
          src={product.imagem} 
          alt={product.nome}
          className="w-24 h-24 object-cover rounded-lg"
        />
        {product.isPromocao && (
          <span className="absolute -top-1 -left-1 bg-red-500 text-white px-1 py-0.5 rounded text-xs font-medium">
            Promoção
          </span>
        )}
      </div>
      
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 mb-1">{product.nome}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{product.descricao}</p>
        
        <div className="flex items-center space-x-4 text-sm text-gray-600">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
            {product.avaliacao} ({product.totalAvaliacoes})
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {product.artesao.nome}
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-3">
        <div className="text-right">
          <div className="text-lg font-bold text-[#C08B74]">
            R$ {product.preco.toFixed(2)}
          </div>
          {product.precoOriginal && (
            <div className="text-sm text-gray-500 line-through">
              R$ {product.precoOriginal.toFixed(2)}
            </div>
          )}
        </div>
        
        <button 
          onClick={() => toggleFavorite(product.id)}
          className={`p-2 rounded-full ${
            product.isFavorito 
              ? 'bg-red-500 text-white' 
              : 'bg-gray-100 text-gray-600 hover:text-red-500'
          } transition-colors`}
        >
          <Heart className={`w-4 h-4 ${product.isFavorito ? 'fill-current' : ''}`} />
        </button>
        
        <button className="bg-[#C08B74] text-white p-2 rounded-lg hover:bg-[#A67A63] transition-colors">
          <ShoppingCart className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Produtos Artesanais</h1>
          <p className="text-gray-600">Descubra peças únicas feitas à mão pelos melhores artesãos do Brasil</p>
        </div>

        {/* Barra de Busca e Filtros */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Busca */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar produtos, artesãos ou categorias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C08B74] focus:border-transparent"
              />
            </div>

            {/* Categoria */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C08B74] focus:border-transparent"
            >
              {categorias.map(categoria => (
                <option key={categoria} value={categoria}>{categoria}</option>
              ))}
            </select>

            {/* Ordenação */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C08B74] focus:border-transparent"
            >
              {ordenacaoOpcoes.map(opcao => (
                <option key={opcao.value} value={opcao.value}>{opcao.label}</option>
              ))}
            </select>

            {/* Botões */}
            <div className="flex space-x-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                Filtros
              </button>
              
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 ${viewMode === "grid" ? 'bg-[#C08B74] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 ${viewMode === "list" ? 'bg-[#C08B74] text-white' : 'bg-white text-gray-600 hover:bg-gray-50'} transition-colors`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Filtros Avançados */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Faixa de Preço
                  </label>
                  <div className="flex items-center space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange.min}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, min: Number(e.target.value) }))}
                      className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                    <span>-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange.max}
                      onChange={(e) => setPriceRange(prev => ({ ...prev, max: Number(e.target.value) }))}
                      className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={showPromocaoOnly}
                      onChange={(e) => setShowPromocaoOnly(e.target.checked)}
                      className="rounded border-gray-300 text-[#C08B74] focus:ring-[#C08B74]"
                    />
                    <span className="text-sm text-gray-700">Apenas promoções</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Resultados */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            {filteredProducts.length} produto{filteredProducts.length !== 1 ? 's' : ''} encontrado{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Lista de Produtos */}
        {filteredProducts.length > 0 ? (
          <div className={
            viewMode === "grid" 
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
          }>
            {filteredProducts.map(product => (
              viewMode === "grid" 
                ? <ProductCard key={product.id} product={product} />
                : <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Nenhum produto encontrado</h3>
            <p className="text-gray-600">Tente ajustar os filtros ou buscar por outros termos.</p>
          </div>
        )}
      </div>
    </div>
  );
}

