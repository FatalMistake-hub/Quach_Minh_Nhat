import { useState, useEffect } from "react";
import { DataTable } from "@/components/DataTable";
import { loadOrganizationsData } from "@/data/organizationsData";
import type { Organization } from "@/types";

const A3 = () => {
    const [organizations, setOrganizations] = useState<Organization[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const data = await loadOrganizationsData();
                setOrganizations(data);
                setError(null);
            } catch (err) {
                setError("Failed to load organization data");
                console.error("Error loading data:", err);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    if (loading) {
        return (
            <div className="container mx-auto py-8">
                <div className="flex items-center justify-center h-64">
                    <div className="text-lg">Loading organization data...</div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto py-8">
                <div className="flex items-center justify-center h-64">
                    <div className="text-lg text-red-600">{error}</div>
                </div>
            </div>
        );
    }
    return (
        <div className="container mx-auto py-8">
            <DataTable data={organizations} loading={loading} />
        </div>
    );
};

export default A3;
