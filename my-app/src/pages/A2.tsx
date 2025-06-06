import { useState } from "react";
import { useStore } from "@nanostores/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { JSONSchemaForm } from "@/components/JSONSchemaForm";
import {
    formStateStore,
    updateJsonSchema,
    updateFormData,
    resetFormState,
} from "@/store/formStore";
import { RotateCcw, Code, FileText } from "lucide-react";

const A2 = () => {
    const formState = useStore(formStateStore);
    const [schemaError, setSchemaError] = useState<string | null>(null);
    const [parsedSchema, setParsedSchema] = useState<any>(null);

    // Sample JSON Schema
    const sampleSchema = {
        type: "object",
        title: "User Registration Form",
        description: "Please fill out the following information to register",
        properties: {
            firstName: {
                type: "string",
                title: "First Name",
                description: "Enter your first name",
            },
            lastName: {
                type: "string",
                title: "Last Name",
                description: "Enter your last name",
            },
            email: {
                type: "string",
                title: "Email Address",
                format: "email",
                description: "Enter a valid email address",
            },
            age: {
                type: "integer",
                title: "Age",
                description: "Enter your age",
            },
            gender: {
                type: "string",
                title: "Gender",
                enum: ["Male", "Female", "Other"],
                description: "Select your gender",
            },
            bio: {
                type: "string",
                title: "Biography",
                format: "textarea",
                description: "Tell us about yourself",
            },
            address: {
                type: "object",
                title: "Address Information",
                "x-component": "vietnamese-address",
                description: "Enter your Vietnamese address",
            },
            newsletter: {
                type: "boolean",
                title: "Subscribe to newsletter",
                description: "Receive updates and news",
            },
            interests: {
                type: "array",
                title: "Interests",
                description: "List your interests (one per line)",
            },
        },
        required: ["firstName", "lastName", "email", "age"],
    };

    const handleSchemaChange = (value: string) => {
        updateJsonSchema(value);

        if (!value.trim()) {
            setSchemaError(null);
            setParsedSchema(null);
            return;
        }

        try {
            const parsed = JSON.parse(value);
            setParsedSchema(parsed);
            setSchemaError(null);
        } catch (error) {
            setSchemaError("Invalid JSON format. Please check your syntax.");
            setParsedSchema(null);
        }
    };

    const handleFormDataChange = (data: Record<string, any>) => {
        updateFormData(data);
    };

    const handleLoadSample = () => {
        const sampleSchemaString = JSON.stringify(sampleSchema, null, 2);
        updateJsonSchema(sampleSchemaString);
        setParsedSchema(sampleSchema);
        setSchemaError(null);
    };

    const handleReset = () => {
        resetFormState();
        setSchemaError(null);
        setParsedSchema(null);
    };

    return (
        <div className="container mx-auto py-8 space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        JSON Schema Form Builder
                    </h1>
                    <p className="text-muted-foreground mt-1">
                        Input a JSON schema to generate dynamic HTML forms with
                        Vietnamese address support
                    </p>
                </div>
                <Button variant="outline" onClick={handleReset} size="sm">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset All
                </Button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Code className="h-5 w-5" />
                            JSON Schema Input
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleLoadSample}
                            >
                                Load Sample Schema
                            </Button>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="schema-input">JSON Schema</Label>
                            <Textarea
                                id="schema-input"
                                value={formState.jsonSchema}
                                onChange={(e) =>
                                    handleSchemaChange(e.target.value)
                                }
                                placeholder="Enter your JSON schema here..."
                                rows={20}
                                className="font-mono text-sm"
                            />
                            {schemaError && (
                                <p className="text-sm text-red-500">
                                    {schemaError}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center gap-2">
                            <Badge
                                variant={parsedSchema ? "default" : "secondary"}
                            >
                                {parsedSchema ? "Valid Schema" : "No Schema"}
                            </Badge>
                            {parsedSchema && (
                                <span className="text-sm text-muted-foreground">
                                    {
                                        Object.keys(
                                            parsedSchema.properties || {}
                                        ).length
                                    }{" "}
                                    fields detected
                                </span>
                            )}
                        </div>
                    </CardContent>
                </Card>

                <Card className="h-fit">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileText className="h-5 w-5" />
                            Generated Form
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {parsedSchema ? (
                            <JSONSchemaForm
                                schema={parsedSchema}
                                data={formState.formData}
                                onChange={handleFormDataChange}
                            />
                        ) : (
                            <div className="text-center py-12 text-muted-foreground">
                                <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                                <p>
                                    Enter a valid JSON schema to see the
                                    generated form
                                </p>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            {Object.keys(formState.formData).length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle>Form Data Output</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <pre className="bg-muted p-4 rounded-lg text-sm overflow-auto">
                            {JSON.stringify(formState.formData, null, 2)}
                        </pre>
                    </CardContent>
                </Card>
            )}
        </div>
    );
};

export default A2;
