import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Principal } from "@dfinity/principal";

export const Authenticated = () => {
    const [principal, setPrincipal] = useState<Principal | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<number>(0);

    const nav = useNavigate();

    useEffect(() => {
        const fetchPrincipal = async () => {

        };
        fetchPrincipal();
    }, []);

    return <Outlet />;
};
