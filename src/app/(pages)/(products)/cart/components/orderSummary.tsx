"use client";

interface OrderSummaryProps {
  subtotal: number;
  frete: number;
  total: number;
}

export default function OrderSummary({ subtotal, frete, total }: OrderSummaryProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border sticky top-8">
      <h2 className="text-xl font-bold border-b pb-4 mb-4">Resumo do Pedido</h2>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>R$ {subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Frete</span>
          <span>R$ {frete.toFixed(2)}</span>
        </div>
      </div>
      <div className="border-t mt-4 pt-4">
        <div className="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>R$ {total.toFixed(2)}</span>
        </div>
      </div>
      <button className="w-full bg-green-600 text-white font-semibold mt-6 py-3 rounded-lg hover:bg-green-700 transition-colors">
        Finalizar Compra
      </button>
    </div>
  );
}