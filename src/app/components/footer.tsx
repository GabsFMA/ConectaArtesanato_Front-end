import FooterSection from "./footerComponents/footerSection";

export default function Footer() {
  return (
    <footer className="w-full h-auto bg-[#C08B74] shadow-md">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <FooterSection
          title="Conecta Artesanato"
          links={[
            { label: "Sobre Nós", href: "/sobre-nos" },
            { label: "Nossa Missão / Propósito", href: "/missao" },
            { label: "email@gmail.com", href: "mailto:email@gmail.com" },
          ]}
        />
        <FooterSection
          title="Para Clientes"
          links={[
            { label: "Como Comprar", href: "/como-comprar" },
            { label: "Acompanhe seu Pedido", href: "/acompanhe-pedido" },
            { label: "Trocas e Devoluções", href: "/trocas-devolucoes" },
            { label: "FAQ (Perguntas Frequentes)", href: "/faq-clientes" },
          ]}
        />
        <FooterSection
          title="Para Artesãos"
          links={[
            { label: "Como Vender na Plataforma", href: "/como-vender" },
            { label: "Políticas para Artesãos", href: "/politicas-artesaos" },
            { label: "Recursos e Suporte", href: "/suporte-artesaos" },
            { label: "FAQ para Artesãos", href: "/faq-artesaos" },
          ]}
        />
        <FooterSection
          title="Informações Legais"
          links={[
            { label: "Termos de Uso", href: "/terms-of-service" },
            { label: "Política de Privacidade", href: "/privacy-policy" },
            { label: "Política de Cookies", href: "/cookies-policy" },
          ]}
        />
      </div>
      <div className="container mx-auto px-4 pb-4 flex justify-end">
        <span className="text-white text-xs">
          &copy; {new Date().getFullYear()} Conecta Artesanato. Todos os
          direitos reservados.
        </span>
      </div>
    </footer>
  );
}
