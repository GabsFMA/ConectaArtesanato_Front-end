import api from './api';

export interface Artesao {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  biografia: string;
  avatar?: string;
  avaliacao: number;
  totalVendas: number;
}

export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  estoque: number;
  vendidos: number;
  imagem?: string;
  status: 'ativo' | 'inativo';
  artesaoId: string;
}

export interface Pedido {
  id: string;
  clienteId: string;
  clienteNome: string;
  produtoId: string;
  produtoNome: string;
  quantidade: number;
  valor: number;
  status: 'pendente' | 'enviado' | 'entregue' | 'cancelado';
  data: string;
}

// Serviços para Artesão
export const artesaoService = {
  // Perfil do artesão
  async getPerfil(): Promise<Artesao> {
    const response = await api.get('/artesao/perfil');
    return response.data;
  },

  async updatePerfil(data: Partial<Artesao>): Promise<Artesao> {
    const response = await api.put('/artesao/perfil', data);
    return response.data;
  },

  // Produtos do artesão
  async getProdutos(): Promise<Produto[]> {
    const response = await api.get('/artesao/produtos');
    return response.data;
  },

  async createProduto(data: Omit<Produto, 'id' | 'artesaoId' | 'vendidos'>): Promise<Produto> {
    const response = await api.post('/artesao/produtos', data);
    return response.data;
  },

  async updateProduto(id: string, data: Partial<Produto>): Promise<Produto> {
    const response = await api.put(`/artesao/produtos/${id}`, data);
    return response.data;
  },

  async deleteProduto(id: string): Promise<void> {
    await api.delete(`/artesao/produtos/${id}`);
  },

  // Pedidos do artesão
  async getPedidos(): Promise<Pedido[]> {
    const response = await api.get('/artesao/pedidos');
    return response.data;
  },

  async updateStatusPedido(id: string, status: Pedido['status']): Promise<Pedido> {
    const response = await api.put(`/artesao/pedidos/${id}/status`, { status });
    return response.data;
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

