"use client";

import { useState } from "react";
import { 
  User, 
  ShoppingBag, 
  Heart, 
  Settings, 
  Star,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Package,
  Truck,
  CheckCircle,
  Eye,
  Trash2
} from "lucide-react";

export default function ClientePage() {
  const [activeTab, setActiveTab] = useState("perfil");

  // Mock data - será substituído por dados reais do backend
  const cliente = {
    nome: "João Santos",
    email: "joao.santos@email.com",
    telefone: "(11) 88888-8888",
    endereco: "Rua das Flores, 123 - São Paulo, SP",
    dataNascimento: "15/03/1985",
    avatar: "/images/Art1.jpg",
    totalCompras: 15,
    valorTotalGasto: 1250.75
  };

  const historicoCompras = [
    {
      id: 1,
      produto: "Vaso de Cerâmica",
      artesao: "Maria Silva",
      quantidade: 2,
      valor: 91.80,
      status: "entregue",
      data: "2024-06-15",
      imagem: "/images/Art1.jpg"
    },
    {
      id: 2,
      produto: "Bordado Floral",
      artesao: "Ana Costa",
      quantidade: 1,
      valor: 89.90,
      status: "enviado",
      data: "2024-06-18",
      imagem: "/images/Art2.jpg"
    },
    {
      id: 3,
      produto: "Cesta Artesanal",
      artesao: "Carlos Lima",
      quantidade: 1,
      valor: 67.50,
      status: "preparando",
      data: "2024-06-20",
      imagem: "/images/Art3.jpg"
    }
  ];

  const favoritos = [
    {
      id: 1,
      nome: "Tapete Artesanal",
      artesao: "Lucia Fernandes",
      preco: 125.90,
      imagem: "/images/Art4.jpg",
      avaliacao: 4.9
    },
    {
      id: 2,
      nome: "Luminária de Bambu",
      artesao: "Pedro Oliveira",
      preco: 78.50,
      imagem: "/images/Art5.jpg",
      avaliacao: 4.7
    },
    {
      id: 3,
      nome: "Quadro Pintado à Mão",
      artesao: "Sofia Martins",
      preco: 156.00,
      imagem: "/images/Art6.jpg",
      avaliacao: 4.8
    }
  ];

  const renderPerfil = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-6 mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img 
            src={cliente.avatar} 
            alt={cliente.nome}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800">{cliente.nome}</h2>
          <div className="flex items-center space-x-4 mt-2">
            <span className="text-gray-600">{cliente.totalCompras} compras realizadas</span>
            <span className="text-gray-600">R$ {cliente.valorTotalGasto.toFixed(2)} gastos</span>
          </div>
        </div>
        <button className="bg-[#C08B74] text-white px-4 py-2 rounded-lg hover:bg-[#A67A63] transition-colors flex items-center">
          <User className="w-4 h-4 mr-2" />
          Editar Perfil
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Informações Pessoais</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-gray-500 mr-3" />
              <span className="text-gray-700">{cliente.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-gray-500 mr-3" />
              <span className="text-gray-700">{cliente.telefone}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="w-5 h-5 text-gray-500 mr-3" />
              <span className="text-gray-700">{cliente.dataNascimento}</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Endereço de Entrega</h3>
          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-1" />
            <span className="text-gray-700 leading-relaxed">{cliente.endereco}</span>
          </div>
          <button className="mt-3 text-[#C08B74] hover:text-[#A67A63] font-medium">
            Alterar endereço
          </button>
        </div>
      </div>
    </div>
  );

  const renderHistorico = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Histórico de Compras</h2>

      <div className="space-y-4">
        {historicoCompras.map((compra) => (
          <div key={compra.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <img 
                  src={compra.imagem} 
                  alt={compra.produto}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{compra.produto}</h3>
                  <p className="text-gray-600">Por: {compra.artesao}</p>
                  <p className="text-sm text-gray-500">Quantidade: {compra.quantidade}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-800">R$ {compra.valor.toFixed(2)}</p>
                <p className="text-sm text-gray-500">{compra.data}</p>
                <div className="flex items-center mt-2">
                  {compra.status === 'entregue' && (
                    <>
                      <CheckCircle className="w-4 h-4 text-green-500 mr-1" />
                      <span className="text-green-600 text-sm">Entregue</span>
                    </>
                  )}
                  {compra.status === 'enviado' && (
                    <>
                      <Truck className="w-4 h-4 text-blue-500 mr-1" />
                      <span className="text-blue-600 text-sm">Enviado</span>
                    </>
                  )}
                  {compra.status === 'preparando' && (
                    <>
                      <Package className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-yellow-600 text-sm">Preparando</span>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="mt-4 flex justify-end space-x-2">
              <button className="text-[#C08B74] hover:text-[#A67A63] text-sm font-medium">
                Ver detalhes
              </button>
              {compra.status === 'entregue' && (
                <button className="text-[#C08B74] hover:text-[#A67A63] text-sm font-medium">
                  Avaliar produto
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderFavoritos = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Meus Favoritos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favoritos.map((produto) => (
          <div key={produto.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <img 
              src={produto.imagem} 
              alt={produto.nome}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-gray-800 mb-2">{produto.nome}</h3>
              <p className="text-gray-600 text-sm mb-2">Por: {produto.artesao}</p>
              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-[#C08B74]">R$ {produto.preco.toFixed(2)}</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm text-gray-600">{produto.avaliacao}</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="flex-1 bg-[#C08B74] text-white py-2 px-3 rounded-lg hover:bg-[#A67A63] transition-colors text-sm">
                  <Eye className="w-4 h-4 inline mr-1" />
                  Ver
                </button>
                <button className="bg-red-100 text-red-600 py-2 px-3 rounded-lg hover:bg-red-200 transition-colors">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderConfiguracoes = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Configurações</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Notificações</h3>
          <div className="space-y-3">
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" defaultChecked />
              <span className="text-gray-700">Receber notificações de status de pedidos</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" defaultChecked />
              <span className="text-gray-700">Receber ofertas e promoções</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span className="text-gray-700">Receber newsletter</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" defaultChecked />
              <span className="text-gray-700">Notificações de novos produtos de artesãos favoritos</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Privacidade</h3>
          <div className="space-y-3">
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" defaultChecked />
              <span className="text-gray-700">Permitir que artesãos vejam meu perfil</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span className="text-gray-700">Mostrar minhas avaliações publicamente</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Preferências de Compra</h3>
          <div className="space-y-3">
            <div>
              <label className="block text-gray-700 mb-2">Faixa de preço preferida</label>
              <select className="w-full border border-gray-300 rounded-lg px-3 py-2">
                <option>Até R$ 50</option>
                <option>R$ 50 - R$ 100</option>
                <option>R$ 100 - R$ 200</option>
                <option>Acima de R$ 200</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Categorias de interesse</label>
              <div className="grid grid-cols-2 gap-2">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm text-gray-700">Cerâmica</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700">Bordados</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" defaultChecked />
                  <span className="text-sm text-gray-700">Decoração</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm text-gray-700">Joias</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Conta</h3>
          <div className="space-y-3">
            <button className="bg-[#C08B74] text-white px-4 py-2 rounded-lg hover:bg-[#A67A63] transition-colors">
              Alterar Senha
            </button>
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors ml-3">
              Excluir Conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const tabs = [
    { id: "perfil", label: "Perfil", icon: User },
    { id: "historico", label: "Histórico", icon: ShoppingBag },
    { id: "favoritos", label: "Favoritos", icon: Heart },
    { id: "configuracoes", label: "Configurações", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h1 className="text-xl font-bold text-gray-800 mb-4">Minha Conta</h1>
              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? "bg-[#C08B74] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-3" />
                      {tab.label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {activeTab === "perfil" && renderPerfil()}
            {activeTab === "historico" && renderHistorico()}
            {activeTab === "favoritos" && renderFavoritos()}
            {activeTab === "configuracoes" && renderConfiguracoes()}
          </div>
        </div>
      </div>
    </div>
  );
}

