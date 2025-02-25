import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "context/AuthContext";
import { CircularProgress } from "@mui/material";

const ProtectedRoute = () => {
    const { isAuthenticated, loading, token } = useAuth();

    if (!loading) {
        return <div className="size-full h-[100vh] gap-5 flex justify-center items-center" >
            <CircularProgress

                value={40}

            />

            loading...
        </div>; // ✅ Prevent redirection until loading is complete
    }

    return token ? <Outlet /> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
