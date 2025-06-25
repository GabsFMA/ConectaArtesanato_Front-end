"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useParams } from 'next/navigation';

// Dados do produto de mentira
interface Product {
  id: string;
  nome: string;
  preco: number;
  imagemUrl: string;
  descricao: string;
  imagensGaleria?: string[];
  artesao?: {
    nome: string;
    bio: string;
    imagemUrl: string;
  };
  avaliacoes?: {
    id: string;
    autor: string;
    nota: number;
    comentario: string;
  }[];
}

// Produtos fakes
const PRODUCTS: Record<string, Product> = {
  "1": {
    id: "1",
    nome: "Vaso de Cerâmica Artesanal",
    preco: 120.0,
    imagemUrl: "/produtos/vaso-ceramica.jpg",
    descricao: "Vaso feito à mão por artesãos locais, perfeito para decoração de ambientes.",
    imagensGaleria: [
      //Imagens que não existem
      "/produtos/vaso-ceramica.jpg",
      "/produtos/vaso-ceramica-2.jpg",
      "/produtos/vaso-ceramica-3.jpg"
    ],
    artesao: {
      nome: "Maria da Cerâmica",
      bio: "Especialista em cerâmica há mais de 20 anos, trazendo tradição e beleza para sua casa.",
      imagemUrl: "/artesaos/maria.jpg"
    },
    avaliacoes: [
      {
        id: "a1",
        autor: "João",
        nota: 5,
        comentario: "Produto lindo e de ótima qualidade!"
      },
      {
        id: "a2",
        autor: "Ana",
        nota: 4,
        comentario: "Adorei, chegou rápido e bem embalado."
      }
    ]
  },
  "2": {
    id: "2",
    nome: "Tapete de Crochê Colorido",
    preco: 80.0,
    imagemUrl: "/produtos/tapete-croche.jpg",
    descricao: "Tapete feito em crochê com fios de algodão coloridos, ideal para quartos e salas.",
    imagensGaleria: [
      "/produtos/tapete-croche.jpg",
      "/produtos/tapete-croche-2.jpg"
    ],
    artesao: {
      nome: "Carlos do Crochê",
      bio: "Apaixonado por crochê, cria peças únicas e cheias de cor.",
      imagemUrl: "/artesaos/carlos.jpg"
    },
    avaliacoes: [
      {
        id: "a3",
        autor: "Beatriz",
        nota: 5,
        comentario: "Muito bonito, deixou meu quarto mais alegre!"
      }
    ]
  }
};

export default function ProdutoDetalhePage() {
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState<string | null>(null);

const params = useParams(); 
  const id = Array.isArray(params.id) ? params.id[0] : params.id; 

  const product = id ? PRODUCTS[id] : undefined;

  useEffect(() => {
    if (product && product.imagensGaleria && product.imagensGaleria.length > 0) {
      setMainImage(product.imagensGaleria[0]);
    } else if (product) {
      setMainImage(product.imagemUrl);
    }
  }, [product]);

  const handleAddToCart = () => {
    if (product) {
      alert(`${quantity}x "${product.nome}" adicionado(s) ao carrinho!`);
    }
  };

  if (!product) {
    return <div className="container mx-auto text-center p-8"><h1>Produto não encontrado</h1></div>;
  }

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg shadow-sm">
          {/* Coluna da Galeria de Imagens */}
          <div>
            <div className="relative w-full h-96 mb-4">
              <Image
                src={mainImage || product.imagemUrl}
                alt={product.nome}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <div className="flex space-x-2">
              {product.imagensGaleria?.map((img, index) => (
                <div key={index} className="relative w-20 h-20 cursor-pointer border-2 hover:border-orange-500 rounded-md" onClick={() => setMainImage(img)}>
                  <Image src={img} alt={`${product.nome} - thumbnail ${index + 1}`} layout="fill" objectFit="cover" className="rounded-sm" />
                </div>
              ))}
            </div>
          </div>

          {/* Coluna de Informações e Ações */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">{product.nome}</h1>
            
            {product.artesao && (
              <Link href="#">
                <p className="text-md text-gray-600 mt-2 hover:text-orange-600">Vendido por: <span className="font-semibold">{product.artesao.nome}</span></p>
              </Link>
            )}

            <p className="text-4xl font-bold text-orange-600 my-4">R$ {product.preco.toFixed(2)}</p>
            
            <div className="flex items-center space-x-4 my-4">
              <span className="font-semibold">Quantidade:</span>
              <div className="flex items-center border rounded-lg">
                <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-2"><Minus size={16}/></button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button onClick={() => setQuantity(q => q + 1)} className="p-2"><Plus size={16}/></button>
              </div>
            </div>

            <button onClick={handleAddToCart} className="w-full flex items-center justify-center bg-green-600 text-white font-semibold mt-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
              <ShoppingCart className="mr-2" size={20}/>
              Adicionar ao Carrinho
            </button>
          </div>
        </div>

        {/* --- Seção de Descrição e Artesão --- */}
        <div className="bg-white p-8 rounded-lg shadow-sm mt-8">
          <h2 className="text-2xl font-bold border-b pb-4 mb-4">Sobre o Produto</h2>
          <p className="text-gray-700 leading-relaxed">{product.descricao}</p>
          
          {product.artesao && (
            <div className="flex items-center bg-orange-50 p-4 rounded-lg mt-8">
              <div className="relative w-16 h-16 mr-4">
                <Image src={product.artesao.imagemUrl} alt={product.artesao.nome} layout="fill" objectFit="cover" className="rounded-full" />
              </div>
              <div>
                <h3 className="font-bold text-lg">{product.artesao.nome}</h3>
                <p className="text-sm text-gray-600">{product.artesao.bio}</p>
              </div>
            </div>
          )}
        </div>

        {/* --- Seção de Avaliações --- */}
        <div className="bg-white p-8 rounded-lg shadow-sm mt-8">
          <h2 className="text-2xl font-bold border-b pb-4 mb-4">Avaliações de Clientes</h2>
          <div className="space-y-6">
            {product.avaliacoes?.map(avaliacao => (
              <div key={avaliacao.id} className="border-b pb-4">
                <div className="flex items-center mb-1">
                  <p className="font-bold">{avaliacao.autor}</p>
                  <div className="flex ml-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className={i < avaliacao.nota ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}/>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700">{avaliacao.comentario}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}