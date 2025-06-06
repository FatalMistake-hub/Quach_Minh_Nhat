import Papa from "papaparse";
import type { Organization } from "@/types";

export const loadOrganizationsData = async (): Promise<Organization[]> => {
    try {
        const response = await fetch("/organizations-100000.csv");
        const csvText = await response.text();

        const result = Papa.parse<string[]>(csvText, {
            header: false,
            skipEmptyLines: true,
        });

        const organizations: Organization[] = result.data
            .slice(1) // Skip header
            .map((row) => ({
                index: parseInt(row[0]) || 0,
                organizationId: row[1] || "",
                name: row[2] || "",
                website: row[3] || "",
                country: row[4] || "",
                description: row[5] || "",
                founded: parseInt(row[6]) || 0,
                industry: row[7] || "",
                numberOfEmployees: parseInt(row[8]) || 0,
            }))
            .filter((org) => org.name && org.organizationId);

        return organizations;
    } catch (error) {
        console.error("Error loading CSV data:", error);
        return [];
    }
};
