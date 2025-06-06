import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { VietnameseAddressInput } from "@/components/VietnameseAddressInput";

interface JSONSchema {
    type: string;
    title?: string;
    description?: string;
    properties?: Record<string, JSONSchema>;
    required?: string[];
    enum?: string[];
    items?: JSONSchema;
    format?: string;
    "x-component"?: string;
}

interface FormFieldProps {
    name: string;
    schema: JSONSchema;
    value: any;
    onChange: (value: any) => void;
    required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
    name,
    schema,
    value,
    onChange,
    required,
}) => {
    const label = schema.title || name;
    const description = schema.description;
    if (schema["x-component"] === "vietnamese-address") {
        return (
            <div className="space-y-2">
                <VietnameseAddressInput
                    value={
                        value || {
                            province: "",
                            ward: "",
                            street: "",
                            fullAddress: "",
                        }
                    }
                    onChange={onChange}
                    label={label}
                    required={required}
                />
                {description && (
                    <p className="text-xs text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>
        );
    }

    // Handle different field types
    switch (schema.type) {
        case "string":
            if (schema.enum) {
                return (
                    <div className="space-y-2">
                        <Label htmlFor={name}>
                            {label}
                            {required && (
                                <span className="text-red-500 ml-1">*</span>
                            )}
                        </Label>
                        <Select value={value || ""} onValueChange={onChange}>
                            <SelectTrigger>
                                <SelectValue
                                    placeholder={`Select ${label.toLowerCase()}`}
                                />
                            </SelectTrigger>
                            <SelectContent>
                                {schema.enum.map((option) => (
                                    <SelectItem key={option} value={option}>
                                        {option}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {description && (
                            <p className="text-xs text-muted-foreground">
                                {description}
                            </p>
                        )}
                    </div>
                );
            } else if (schema.format === "textarea") {
                return (
                    <div className="space-y-2">
                        <Label htmlFor={name}>
                            {label}
                            {required && (
                                <span className="text-red-500 ml-1">*</span>
                            )}
                        </Label>{" "}
                        <Textarea
                            id={name}
                            value={value || ""}
                            onChange={(
                                e: React.ChangeEvent<HTMLTextAreaElement>
                            ) => onChange(e.target.value)}
                            placeholder={`Enter ${label.toLowerCase()}`}
                            rows={4}
                        />
                        {description && (
                            <p className="text-xs text-muted-foreground">
                                {description}
                            </p>
                        )}
                    </div>
                );
            } else {
                return (
                    <div className="space-y-2">
                        <Label htmlFor={name}>
                            {label}
                            {required && (
                                <span className="text-red-500 ml-1">*</span>
                            )}
                        </Label>
                        <Input
                            id={name}
                            type={
                                schema.format === "email"
                                    ? "email"
                                    : schema.format === "password"
                                      ? "password"
                                      : "text"
                            }
                            value={value || ""}
                            onChange={(e) => onChange(e.target.value)}
                            placeholder={`Enter ${label.toLowerCase()}`}
                        />
                        {description && (
                            <p className="text-xs text-muted-foreground">
                                {description}
                            </p>
                        )}
                    </div>
                );
            }

        case "number":
        case "integer":
            return (
                <div className="space-y-2">
                    <Label htmlFor={name}>
                        {label}
                        {required && (
                            <span className="text-red-500 ml-1">*</span>
                        )}
                    </Label>
                    <Input
                        id={name}
                        type="number"
                        value={value || ""}
                        onChange={(e) =>
                            onChange(
                                schema.type === "integer"
                                    ? parseInt(e.target.value) || 0
                                    : parseFloat(e.target.value) || 0
                            )
                        }
                        placeholder={`Enter ${label.toLowerCase()}`}
                    />
                    {description && (
                        <p className="text-xs text-muted-foreground">
                            {description}
                        </p>
                    )}
                </div>
            );

        case "boolean":
            return (
                <div className="flex items-center space-x-2">
                    <Checkbox
                        id={name}
                        checked={value || false}
                        onCheckedChange={onChange}
                    />
                    <Label
                        htmlFor={name}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        {label}
                        {required && (
                            <span className="text-red-500 ml-1">*</span>
                        )}
                    </Label>
                    {description && (
                        <p className="text-xs text-muted-foreground ml-2">
                            {description}
                        </p>
                    )}
                </div>
            );

        case "array":
            return (
                <div className="space-y-2">
                    <Label htmlFor={name}>
                        {label}
                        {required && (
                            <span className="text-red-500 ml-1">*</span>
                        )}
                    </Label>{" "}
                    <Textarea
                        id={name}
                        value={Array.isArray(value) ? value.join("\n") : ""}
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                            onChange(e.target.value.split("\n").filter(Boolean))
                        }
                        placeholder={`Enter ${label.toLowerCase()} (one per line)`}
                        rows={3}
                    />
                    {description && (
                        <p className="text-xs text-muted-foreground">
                            {description}
                        </p>
                    )}
                </div>
            );

        default:
            return (
                <div className="space-y-2">
                    <Label>Unsupported field type: {schema.type}</Label>
                </div>
            );
    }
};

interface JSONSchemaFormProps {
    schema: JSONSchema;
    data: Record<string, any>;
    onChange: (data: Record<string, any>) => void;
}

export const JSONSchemaForm: React.FC<JSONSchemaFormProps> = ({
    schema,
    data,
    onChange,
}) => {
    if (!schema.properties) {
        return (
            <div className="text-center py-8 text-muted-foreground">
                No form fields to display. Please provide a valid JSON schema
                with properties.
            </div>
        );
    }

    const handleFieldChange = (fieldName: string, value: any) => {
        onChange({
            ...data,
            [fieldName]: value,
        });
    };

    return (
        <div className="space-y-6">
            {schema.title && (
                <div>
                    <h3 className="text-lg font-semibold">{schema.title}</h3>
                    {schema.description && (
                        <p className="text-sm text-muted-foreground mt-1">
                            {schema.description}
                        </p>
                    )}
                </div>
            )}

            <div className="grid gap-6">
                {Object.entries(schema.properties).map(
                    ([fieldName, fieldSchema]) => (
                        <FormField
                            key={fieldName}
                            name={fieldName}
                            schema={fieldSchema}
                            value={data[fieldName]}
                            onChange={(value) =>
                                handleFieldChange(fieldName, value)
                            }
                            required={schema.required?.includes(fieldName)}
                        />
                    )
                )}
            </div>
        </div>
    );
};
