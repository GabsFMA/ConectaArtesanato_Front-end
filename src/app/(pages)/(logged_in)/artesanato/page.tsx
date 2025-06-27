"use client";

import { useState } from "react";
import { 
  User, 
  Package, 
  ShoppingBag, 
  Settings, 
  Plus,
  Edit,
  Eye,
  Trash2,
  Star,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

export default function ArtesaoPage() {
  const [activeTab, setActiveTab] = useState("perfil");

  // Mock data - será substituído por dados reais do backend
  const artesao = {
    nome: "Maria Silva",
    email: "maria.silva@email.com",
    telefone: "(11) 99999-9999",
    endereco: "São Paulo, SP",
    biografia: "Artesã especializada em cerâmica e bordados há mais de 15 anos.",
    avatar: "/images/Art1.jpg",
    avaliacao: 4.8,
    totalVendas: 127
  };

  const produtos = [
    {
      id: 1,
      nome: "Vaso de Cerâmica",
      preco: 45.90,
      estoque: 12,
      vendidos: 23,
      imagem: "/images/Art1.jpg",
      status: "ativo"
    },
    {
      id: 2,
      nome: "Bordado Floral",
      preco: 89.90,
      estoque: 5,
      vendidos: 15,
      imagem: "/images/Art2.jpg",
      status: "ativo"
    },
    {
      id: 3,
      nome: "Cesta Artesanal",
      preco: 67.50,
      estoque: 0,
      vendidos: 8,
      imagem: "/images/Art3.jpg",
      status: "inativo"
    }
  ];

  const pedidos = [
    {
      id: 1,
      cliente: "João Santos",
      produto: "Vaso de Cerâmica",
      quantidade: 2,
      valor: 91.80,
      status: "pendente",
      data: "2024-06-20"
    },
    {
      id: 2,
      cliente: "Ana Costa",
      produto: "Bordado Floral",
      quantidade: 1,
      valor: 89.90,
      status: "enviado",
      data: "2024-06-19"
    },
    {
      id: 3,
      cliente: "Carlos Lima",
      produto: "Cesta Artesanal",
      quantidade: 1,
      valor: 67.50,
      status: "entregue",
      data: "2024-06-18"
    }
  ];

  const renderPerfil = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-6 mb-6">
        <div className="w-24 h-24 rounded-full overflow-hidden">
          <img 
            src={artesao.avatar} 
            alt={artesao.nome}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800">{artesao.nome}</h2>
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="ml-1 text-gray-600">{artesao.avaliacao}</span>
            </div>
            <span className="text-gray-600">{artesao.totalVendas} vendas</span>
          </div>
        </div>
        <button className="bg-[#C08B74] text-white px-4 py-2 rounded-lg hover:bg-[#A67A63] transition-colors flex items-center">
          <Edit className="w-4 h-4 mr-2" />
          Editar Perfil
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Informações Pessoais</h3>
          <div className="space-y-3">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-gray-500 mr-3" />
              <span className="text-gray-700">{artesao.email}</span>
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-gray-500 mr-3" />
              <span className="text-gray-700">{artesao.telefone}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-gray-500 mr-3" />
              <span className="text-gray-700">{artesao.endereco}</span>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Biografia</h3>
          <p className="text-gray-700 leading-relaxed">{artesao.biografia}</p>
        </div>
      </div>
    </div>
  );

  const renderProdutos = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Meus Produtos</h2>
        <button className="bg-[#C08B74] text-white px-4 py-2 rounded-lg hover:bg-[#A67A63] transition-colors flex items-center">
          <Plus className="w-4 h-4 mr-2" />
          Adicionar Produto
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Produto</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Preço</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Estoque</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Vendidos</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Ações</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <img 
                      src={produto.imagem} 
                      alt={produto.nome}
                      className="w-12 h-12 rounded-lg object-cover mr-3"
                    />
                    <span className="font-medium text-gray-800">{produto.nome}</span>
                  </div>
                </td>
                <td className="py-3 px-4 text-gray-700">R$ {produto.preco.toFixed(2)}</td>
                <td className="py-3 px-4 text-gray-700">{produto.estoque}</td>
                <td className="py-3 px-4 text-gray-700">{produto.vendidos}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    produto.status === 'ativo' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {produto.status === 'ativo' ? 'Ativo' : 'Inativo'}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-800">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderPedidos = () => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Pedidos</h2>

      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Pedido</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Cliente</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Produto</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Quantidade</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Valor</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Status</th>
              <th className="text-left py-3 px-4 font-semibold text-gray-700">Data</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido) => (
              <tr key={pedido.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-3 px-4 font-medium text-gray-800">#{pedido.id}</td>
                <td className="py-3 px-4 text-gray-700">{pedido.cliente}</td>
                <td className="py-3 px-4 text-gray-700">{pedido.produto}</td>
                <td className="py-3 px-4 text-gray-700">{pedido.quantidade}</td>
                <td className="py-3 px-4 text-gray-700">R$ {pedido.valor.toFixed(2)}</td>
                <td className="py-3 px-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    pedido.status === 'pendente' 
                      ? 'bg-yellow-100 text-yellow-800'
                      : pedido.status === 'enviado'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {pedido.status === 'pendente' ? 'Pendente' : 
                     pedido.status === 'enviado' ? 'Enviado' : 'Entregue'}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-700">{pedido.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
              <span className="text-gray-700">Receber notificações de novos pedidos</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" defaultChecked />
              <span className="text-gray-700">Receber notificações de mensagens</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" />
              <span className="text-gray-700">Receber newsletter</span>
            </label>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Privacidade</h3>
          <div className="space-y-3">
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" defaultChecked />
              <span className="text-gray-700">Perfil público</span>
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-3" defaultChecked />
              <span className="text-gray-700">Mostrar informações de contato</span>
            </label>
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
    { id: "produtos", label: "Produtos", icon: Package },
    { id: "pedidos", label: "Pedidos", icon: ShoppingBag },
    { id: "configuracoes", label: "Configurações", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-4">
              <h1 className="text-xl font-bold text-gray-800 mb-4">Painel do Artesão</h1>
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
            {activeTab === "produtos" && renderProdutos()}
            {activeTab === "pedidos" && renderPedidos()}
            {activeTab === "configuracoes" && renderConfiguracoes()}
          </div>
        </div>
      </div>
    </div>
  );
}

