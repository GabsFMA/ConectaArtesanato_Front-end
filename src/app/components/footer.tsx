export default function Footer() {
  return (
    <footer className="w-full h-auto bg-[#C08B74] shadow-md">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <h3 className="text-white font-bold mb-2">Conecta Artesanato</h3>
          <ul className="text-white text-sm space-y-1">
            <li><a href="/sobre-nos" className="hover:underline">Sobre Nós</a></li>
            <li><a href="/missao" className="hover:underline">Nossa Missão / Propósito</a></li>
            <li><a href="mailto:email@gmail.com" className="hover:underline">email@gmail.com</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-2">Para Clientes</h3>
          <ul className="text-white text-sm space-y-1">
            <li><a href="/como-comprar" className="hover:underline">Como Comprar</a></li>
            <li><a href="/acompanhe-pedido" className="hover:underline">Acompanhe seu Pedido</a></li>
            <li><a href="/trocas-devolucoes" className="hover:underline">Trocas e Devoluções</a></li>
            <li><a href="/faq-clientes" className="hover:underline">FAQ (Perguntas Frequentes)</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-2">Para Artesãos</h3>
          <ul className="text-white text-sm space-y-1">
            <li><a href="/como-vender" className="hover:underline">Como Vender na Plataforma</a></li>
            <li><a href="/politicas-artesaos" className="hover:underline">Políticas para Artesãos</a></li>
            <li><a href="/suporte-artesaos" className="hover:underline">Recursos e Suporte</a></li>
            <li><a href="/faq-artesaos" className="hover:underline">FAQ para Artesãos</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-white font-bold mb-2">Informações Legais</h3>
          <ul className="text-white text-sm space-y-1">
            <li><a href="/terms-of-service" className="hover:underline">Termos de Uso</a></li>
            <li><a href="/privacy-policy" className="hover:underline">Política de Privacidade</a></li>
            <li><a href="/cookies-policy" className="hover:underline">Política de Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-4 flex justify-end">
        <span className="text-white text-xs">
          &copy; {new Date().getFullYear()} Conecta Artesanato. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}