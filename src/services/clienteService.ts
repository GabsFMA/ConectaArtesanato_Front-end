import api from './api';

export interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  dataNascimento: string;
  avatar?: string;
  totalCompras: number;
  valorTotalGasto: number;
}

export interface CompraHistorico {
  id: string;
  produtoId: string;
  produtoNome: string;
  artesaoId: string;
  artesaoNome: string;
  quantidade: number;
  valor: number;
  status: 'preparando' | 'enviado' | 'entregue' | 'cancelado';
  data: string;
  imagem?: string;
}

export interface ProdutoFavorito {
  id: string;
  produtoId: string;
  nome: string;
  artesaoId: string;
  artesaoNome: string;
  preco: number;
  imagem?: string;
  avaliacao: number;
}

export interface ConfiguracoesCliente {
  notificacoes: {
    statusPedidos: boolean;
    ofertas: boolean;
    newsletter: boolean;
    novosProdutos: boolean;
  };
  privacidade: {
    perfilPublico: boolean;
    avaliacoesPublicas: boolean;
  };
  preferencias: {
    faixaPreco: string;
    categorias: string[];
  };
}

// Serviços para Cliente
export const clienteService = {
  // Perfil do cliente
  async getPerfil(): Promise<Cliente> {
    const response = await api.get('/cliente/perfil');
    return response.data;
  },

  async updatePerfil(data: Partial<Cliente>): Promise<Cliente> {
    const response = await api.put('/cliente/perfil', data);
    return response.data;
  },

  // Histórico de compras
  async getHistoricoCompras(): Promise<CompraHistorico[]> {
    const response = await api.get('/cliente/historico-compras');
    return response.data;
  },

  async getDetalhesCompra(id: string): Promise<CompraHistorico> {
    const response = await api.get(`/cliente/historico-compras/${id}`);
    return response.data;
  },

  // Favoritos
  async getFavoritos(): Promise<ProdutoFavorito[]> {
    const response = await api.get('/cliente/favoritos');
    return response.data;
  },

  async adicionarFavorito(produtoId: string): Promise<void> {
    await api.post('/cliente/favoritos', { produtoId });
  },

  async removerFavorito(produtoId: string): Promise<void> {
    await api.delete(`/cliente/favoritos/${produtoId}`);
  },

  // Configurações
  async getConfiguracoes(): Promise<ConfiguracoesCliente> {
    const response = await api.get('/cliente/configuracoes');
    return response.data;
  },

  async updateConfiguracoes(data: Partial<ConfiguracoesCliente>): Promise<ConfiguracoesCliente> {
    const response = await api.put('/cliente/configuracoes', data);
    return response.data;
  },

  // Avaliações
  async avaliarProduto(compraId: string, avaliacao: number, comentario?: string): Promise<void> {
    await api.post(`/cliente/avaliacoes`, {
      compraId,
      avaliacao,
      comentario,
    });
  },

  // Upload de imagem
  async uploadImagem(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('image', file);
    const response = await api.post('/upload/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data.url;
  },
};

