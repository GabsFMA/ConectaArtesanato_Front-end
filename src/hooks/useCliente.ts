"use client";

import { useState, useEffect } from 'react';
import { clienteService, Cliente, CompraHistorico, ProdutoFavorito, ConfiguracoesCliente } from '@/services/clienteService';

// Hook para gerenciar o perfil do cliente
export const useClientePerfil = () => {
  const [perfil, setPerfil] = useState<Cliente | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPerfil = async () => {
    try {
      setLoading(true);
      const data = await clienteService.getPerfil();
      setPerfil(data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar perfil');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updatePerfil = async (data: Partial<Cliente>) => {
    try {
      const updatedPerfil = await clienteService.updatePerfil(data);
      setPerfil(updatedPerfil);
      return updatedPerfil;
    } catch (err) {
      setError('Erro ao atualizar perfil');
      throw err;
    }
  };

  useEffect(() => {
    fetchPerfil();
  }, []);

  return {
    perfil,
    loading,
    error,
    updatePerfil,
    refetch: fetchPerfil,
  };
};

// Hook para gerenciar histórico de compras
export const useClienteHistorico = () => {
  const [historico, setHistorico] = useState<CompraHistorico[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchHistorico = async () => {
    try {
      setLoading(true);
      const data = await clienteService.getHistoricoCompras();
      setHistorico(data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar histórico');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getDetalhesCompra = async (id: string) => {
    try {
      const data = await clienteService.getDetalhesCompra(id);
      return data;
    } catch (err) {
      setError('Erro ao carregar detalhes da compra');
      throw err;
    }
  };

  useEffect(() => {
    fetchHistorico();
  }, []);

  return {
    historico,
    loading,
    error,
    getDetalhesCompra,
    refetch: fetchHistorico,
  };
};

// Hook para gerenciar favoritos
export const useClienteFavoritos = () => {
  const [favoritos, setFavoritos] = useState<ProdutoFavorito[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFavoritos = async () => {
    try {
      setLoading(true);
      const data = await clienteService.getFavoritos();
      setFavoritos(data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar favoritos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const adicionarFavorito = async (produtoId: string) => {
    try {
      await clienteService.adicionarFavorito(produtoId);
      await fetchFavoritos(); // Recarrega a lista
    } catch (err) {
      setError('Erro ao adicionar favorito');
      throw err;
    }
  };

  const removerFavorito = async (produtoId: string) => {
    try {
      await clienteService.removerFavorito(produtoId);
      setFavoritos(prev => prev.filter(f => f.produtoId !== produtoId));
    } catch (err) {
      setError('Erro ao remover favorito');
      throw err;
    }
  };

  useEffect(() => {
    fetchFavoritos();
  }, []);

  return {
    favoritos,
    loading,
    error,
    adicionarFavorito,
    removerFavorito,
    refetch: fetchFavoritos,
  };
};

// Hook para gerenciar configurações
export const useClienteConfiguracoes = () => {
  const [configuracoes, setConfiguracoes] = useState<ConfiguracoesCliente | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchConfiguracoes = async () => {
    try {
      setLoading(true);
      const data = await clienteService.getConfiguracoes();
      setConfiguracoes(data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar configurações');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateConfiguracoes = async (data: Partial<ConfiguracoesCliente>) => {
    try {
      const updatedConfiguracoes = await clienteService.updateConfiguracoes(data);
      setConfiguracoes(updatedConfiguracoes);
      return updatedConfiguracoes;
    } catch (err) {
      setError('Erro ao atualizar configurações');
      throw err;
    }
  };

  useEffect(() => {
    fetchConfiguracoes();
  }, []);

  return {
    configuracoes,
    loading,
    error,
    updateConfiguracoes,
    refetch: fetchConfiguracoes,
  };
};

// Hook para avaliações
export const useAvaliacoes = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const avaliarProduto = async (compraId: string, avaliacao: number, comentario?: string) => {
    try {
      setLoading(true);
      setError(null);
      await clienteService.avaliarProduto(compraId, avaliacao, comentario);
    } catch (err) {
      setError('Erro ao avaliar produto');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    avaliarProduto,
    loading,
    error,
  };
};

// Hook para upload de imagens
export const useImageUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadImage = async (file: File): Promise<string> => {
    try {
      setUploading(true);
      setError(null);
      const url = await clienteService.uploadImagem(file);
      return url;
    } catch (err) {
      setError('Erro ao fazer upload da imagem');
      throw err;
    } finally {
      setUploading(false);
    }
  };

  return {
    uploadImage,
    uploading,
    error,
  };
};

