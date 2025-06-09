import LoginForm from "./components/loginForm";
import RegisterAnchor from "./components/registerAnchor";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#C08B74] p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <LoginForm />
      </div>
      <RegisterAnchor />
    </div>
  );
}
