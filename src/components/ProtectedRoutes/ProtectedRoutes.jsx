import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "context/AuthContext";

const ProtectedRoute = () => {
    const { isAuthenticated, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>; // ✅ Prevent redirection until loading is complete
    }

    return isAuthenticated ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
