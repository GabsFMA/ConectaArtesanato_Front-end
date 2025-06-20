"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import CartItem from './components/cartItem';      
import OrderSummary from './components/orderSummary';  

interface MockCartItem {
  id: string;
  nome: string;
  preco: number;
  imagemUrl: string;
  quantity: number;
}

const mockItemsInicial: MockCartItem[] = [
  {
    id: 'prod_01',
    nome: 'Vaso de Cerâmica Estilo Marajoara',
    preco: 89.90,
    imagemUrl: '/images/vaso-ceramica.jpg',
    quantity: 1,
  },
  {
    id: 'prod_02',
    nome: 'Bolsa de Palha de Buriti',
    preco: 120.50,
    imagemUrl: '/images/bolsa-palha.jpg',
    quantity: 2,
  },
];


export default function CarrinhoPage() {
  const [items, setItems] = useState(mockItemsInicial);

  const handleRemoveItem = (id: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity >= 1) {
      setItems(currentItems => 
        currentItems.map(item => 
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  // Cálculos de subtotal, frete e total
  const subtotal = items.reduce((sum, item) => sum + item.preco * item.quantity, 0);
  const frete = items.length > 0 ? 15.00 : 0; 
  const total = subtotal + frete;

  if (items.length === 0) {
    return (
      <div className="container mx-auto text-center p-8">
        <h1 className="text-3xl font-bold mb-4">Seu carrinho está vazio</h1>
        <p className="text-gray-600 mb-6">Você removeu todos os itens.</p>
        <Link href="/">
          <button className="bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
            Voltar para a Home
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Seu Carrinho</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={handleUpdateQuantity}
                onRemove={handleRemoveItem}
              />
            ))}
          </div>

          <div className="lg:col-span-1">
            <OrderSummary subtotal={subtotal} frete={frete} total={total} />
          </div>
          
        </div>
      </div>
    </div>
  );
}