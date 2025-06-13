import  Link  from "next/link";

export default function RegisterAnchor() {
    return (
        <div className="text-center mt-4">
            <span className="text-sm text-gray-600">Não tem uma conta?</span>
            <Link
                href="/register"
                className="text-[#C0581A] hover:text-[#D8671E] font-semibold ml-1"
            >
                Registre-se
            </Link>
        </div>
    );
}