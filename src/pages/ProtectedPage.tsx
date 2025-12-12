import { useAuth } from "../hooks/useAuth";
import PasswordInput from "../components/auth/PasswordInput";
import IntranetPage from "./IntranetPage";

export default function ProtectedPage() {
  const { isAuthenticated, logout, login, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <PasswordInput onLogin={login} isLoading={isLoading} />;
  }

  return <IntranetPage onLogout={logout} />;
}
