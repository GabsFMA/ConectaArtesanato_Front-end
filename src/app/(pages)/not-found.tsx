import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Página não encontrada
        </h2>
        <p className="text-gray-600 mb-8 max-w-md">
          A página que você está procurando não existe ou foi movida.
        </p>
        <div className="space-x-4">
          <Link 
            href="/"
            className="bg-[#C08B74] text-white px-6 py-3 rounded-lg hover:bg-[#A67A63] transition-colors inline-block"
          >
            Voltar ao Início
          </Link>
          <Link 
            href="/list"
            className="border border-[#C08B74] text-[#C08B74] px-6 py-3 rounded-lg hover:bg-[#C08B74] hover:text-white transition-colors inline-block"
          >
            Ver Produtos
          </Link>
        </div>
      </div>
    </div>
  );
}

