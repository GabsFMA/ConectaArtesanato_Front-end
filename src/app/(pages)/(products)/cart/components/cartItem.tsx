"use client";

import Image from 'next/image';
import { Trash2, Plus, Minus } from 'lucide-react';

interface CartItemProps {
  item: {
    id: string;
    nome: string;
    preco: number;
    imagemUrl: string;
    quantity: number;
  };
  onUpdateQuantity: (id: string, newQuantity: number) => void;
  onRemove: (id: string) => void;
}

export default function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  return (
    <div className="flex items-center bg-white p-4 rounded-lg shadow-sm border">
      <div className="w-24 h-24 relative mr-4 flex-shrink-0">
        <Image
          src={item.imagemUrl || '/placeholder-image.png'}
          alt={item.nome}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      <div className="flex-grow">
        <h2 className="font-bold text-lg text-gray-800">{item.nome}</h2>
        <p className="text-orange-600 font-semibold mt-1">R$ {item.preco.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center ml-4">
        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
          <Minus size={16} />
        </button>
        <span className="w-12 text-center font-semibold">{item.quantity}</span>
        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="p-1 rounded-full bg-gray-200 hover:bg-gray-300">
          <Plus size={16} />
        </button>
      </div>

      <div className="text-right ml-6 w-24">
         <p className="font-bold text-lg">R$ {(item.preco * item.quantity).toFixed(2)}</p>
      </div>

      <button onClick={() => onRemove(item.id)} className="ml-4 text-gray-400 hover:text-red-500">
        <Trash2 size={20} />
      </button>
    </div>
  );
}