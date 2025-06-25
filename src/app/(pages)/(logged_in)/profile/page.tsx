"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Edit, 
  Star,
  Package,
  ShoppingBag,
  Award,
  TrendingUp
} from "lucide-react";

interface UserProfile {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  avatar?: string;
  dataNascimento?: string;
  biografia?: string;
  avaliacao?: number;
  totalVendas?: number;
  totalCompras?: number;
  valorTotalGasto?: number;
  especialidades?: string[];
  dataRegistro: string;
}

export default function ProfilePage() {
  const { user } = useAuth();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados do perfil
    const loadProfile = async () => {
      setLoading(true);
      
      // Mock data baseado no tipo de usuário
      const mockProfile: UserProfile = {
        id: user?.id || "1",
        nome: user?.nome || "Usuário",
        email: user?.email || "usuario@email.com",
        telefone: user?.tipo === "artesao" ? "(11) 99999-9999" : "(11) 88888-8888",
        endereco: user?.tipo === "artesao" ? "São Paulo, SP" : "Rua das Flores, 123 - São Paulo, SP",
        avatar: "/images/Art1.jpg",
        dataRegistro: "2023-01-15",
        ...(user?.tipo === "artesao" ? {
          biografia: "Artesã especializada em cerâmica e bordados há mais de 15 anos.",
          avaliacao: 4.8,
          totalVendas: 127,
          especialidades: ["Cerâmica", "Bordados", "Decoração"]
        } : {
          dataNascimento: "15/03/1985",
          totalCompras: 15,
          valorTotalGasto: 1250.75
        })
      };

      setTimeout(() => {
        setProfile(mockProfile);
        setLoading(false);
      }, 1000);
    };

    if (user) {
      loadProfile();
    }
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#C08B74]"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Perfil não encontrado</h1>
          </div>
        </div>
      </div>
    );
  }

  const isArtesao = user?.tipo === "artesao";

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header do Perfil */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <img 
                  src={profile.avatar} 
                  alt={profile.nome}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{profile.nome}</h1>
                <p className="text-gray-600 mb-4">
                  {isArtesao ? "Artesão" : "Cliente"} • Membro desde {new Date(profile.dataRegistro).toLocaleDateString('pt-BR')}
                </p>
                
                {isArtesao && profile.avaliacao && (
                  <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                    <div className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold">{profile.avaliacao}</span>
                      <span className="ml-1 text-gray-600">avaliação</span>
                    </div>
                    <div className="flex items-center">
                      <Package className="w-5 h-5 text-[#C08B74]" />
                      <span className="ml-1 font-semibold">{profile.totalVendas}</span>
                      <span className="ml-1 text-gray-600">vendas</span>
                    </div>
                  </div>
                )}

                {!isArtesao && profile.totalCompras && (
                  <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                    <div className="flex items-center">
                      <ShoppingBag className="w-5 h-5 text-[#C08B74]" />
                      <span className="ml-1 font-semibold">{profile.totalCompras}</span>
                      <span className="ml-1 text-gray-600">compras</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                      <span className="ml-1 font-semibold">R$ {profile.valorTotalGasto?.toFixed(2)}</span>
                      <span className="ml-1 text-gray-600">gastos</span>
                    </div>
                  </div>
                )}
              </div>
              
              <button className="bg-[#C08B74] text-white px-6 py-2 rounded-lg hover:bg-[#A67A63] transition-colors flex items-center">
                <Edit className="w-4 h-4 mr-2" />
                Editar Perfil
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Informações Pessoais */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Informações Pessoais</h2>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <span className="text-sm text-gray-500">Email</span>
                      <p className="text-gray-800">{profile.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-gray-500 mr-3" />
                    <div>
                      <span className="text-sm text-gray-500">Telefone</span>
                      <p className="text-gray-800">{profile.telefone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-gray-500 mr-3 mt-1" />
                    <div>
                      <span className="text-sm text-gray-500">Endereço</span>
                      <p className="text-gray-800">{profile.endereco}</p>
                    </div>
                  </div>
                  
                  {!isArtesao && profile.dataNascimento && (
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-gray-500 mr-3" />
                      <div>
                        <span className="text-sm text-gray-500">Data de Nascimento</span>
                        <p className="text-gray-800">{profile.dataNascimento}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Biografia (apenas para artesãos) */}
              {isArtesao && profile.biografia && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Sobre</h2>
                  <p className="text-gray-700 leading-relaxed">{profile.biografia}</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Especialidades (apenas para artesãos) */}
              {isArtesao && profile.especialidades && (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-[#C08B74]" />
                    Especialidades
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {profile.especialidades.map((especialidade, index) => (
                      <span 
                        key={index}
                        className="bg-[#C08B74] bg-opacity-10 text-[#C08B74] px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {especialidade}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Estatísticas */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Estatísticas</h3>
                <div className="space-y-4">
                  {isArtesao ? (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Produtos ativos</span>
                        <span className="font-semibold text-gray-800">12</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Pedidos pendentes</span>
                        <span className="font-semibold text-gray-800">3</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Avaliações</span>
                        <span className="font-semibold text-gray-800">89</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Produtos favoritos</span>
                        <span className="font-semibold text-gray-800">8</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Avaliações feitas</span>
                        <span className="font-semibold text-gray-800">12</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Artesãos seguidos</span>
                        <span className="font-semibold text-gray-800">5</span>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Ações Rápidas */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Ações Rápidas</h3>
                <div className="space-y-3">
                  {isArtesao ? (
                    <>
                      <button className="w-full bg-[#C08B74] text-white py-2 px-4 rounded-lg hover:bg-[#A67A63] transition-colors">
                        Adicionar Produto
                      </button>
                      <button className="w-full border border-[#C08B74] text-[#C08B74] py-2 px-4 rounded-lg hover:bg-[#C08B74] hover:text-white transition-colors">
                        Ver Pedidos
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="w-full bg-[#C08B74] text-white py-2 px-4 rounded-lg hover:bg-[#A67A63] transition-colors">
                        Explorar Produtos
                      </button>
                      <button className="w-full border border-[#C08B74] text-[#C08B74] py-2 px-4 rounded-lg hover:bg-[#C08B74] hover:text-white transition-colors">
                        Ver Favoritos
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

