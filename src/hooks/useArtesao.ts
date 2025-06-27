"use client";

import { useState, useEffect } from 'react';
import { artesaoService, Artesao, Produto, Pedido } from '@/services/artesaoService';

// Hook para gerenciar o perfil do artesão
export const useArtesaoPerfil = () => {
  const [perfil, setPerfil] = useState<Artesao | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPerfil = async () => {
    try {
      setLoading(true);
      const data = await artesaoService.getPerfil();
      setPerfil(data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar perfil');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updatePerfil = async (data: Partial<Artesao>) => {
    try {
      const updatedPerfil = await artesaoService.updatePerfil(data);
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

// Hook para gerenciar produtos do artesão
export const useArtesaoProdutos = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProdutos = async () => {
    try {
      setLoading(true);
      const data = await artesaoService.getProdutos();
      setProdutos(data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar produtos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const createProduto = async (data: Omit<Produto, 'id' | 'artesaoId' | 'vendidos'>) => {
    try {
      const newProduto = await artesaoService.createProduto(data);
      setProdutos(prev => [...prev, newProduto]);
      return newProduto;
    } catch (err) {
      setError('Erro ao criar produto');
      throw err;
    }
  };

  const updateProduto = async (id: string, data: Partial<Produto>) => {
    try {
      const updatedProduto = await artesaoService.updateProduto(id, data);
      setProdutos(prev => prev.map(p => p.id === id ? updatedProduto : p));
      return updatedProduto;
    } catch (err) {
      setError('Erro ao atualizar produto');
      throw err;
    }
  };

  const deleteProduto = async (id: string) => {
    try {
      await artesaoService.deleteProduto(id);
      setProdutos(prev => prev.filter(p => p.id !== id));
    } catch (err) {
      setError('Erro ao deletar produto');
      throw err;
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  return {
    produtos,
    loading,
    error,
    createProduto,
    updateProduto,
    deleteProduto,
    refetch: fetchProdutos,
  };
};

// Hook para gerenciar pedidos do artesão
export const useArtesaoPedidos = () => {
  const [pedidos, setPedidos] = useState<Pedido[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPedidos = async () => {
    try {
      setLoading(true);
      const data = await artesaoService.getPedidos();
      setPedidos(data);
      setError(null);
    } catch (err) {
      setError('Erro ao carregar pedidos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatusPedido = async (id: string, status: Pedido['status']) => {
    try {
      const updatedPedido = await artesaoService.updateStatusPedido(id, status);
      setPedidos(prev => prev.map(p => p.id === id ? updatedPedido : p));
      return updatedPedido;
    } catch (err) {
      setError('Erro ao atualizar status do pedido');
      throw err;
    }
  };

  useEffect(() => {
    fetchPedidos();
  }, []);

  return {
    pedidos,
    loading,
    error,
    updateStatusPedido,
    refetch: fetchPedidos,
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
      const url = await artesaoService.uploadImagem(file);
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

