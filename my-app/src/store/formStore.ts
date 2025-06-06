import { atom } from "nanostores";

export interface FormData {
    [key: string]: any;
}

export interface FormState {
    jsonSchema: string;
    formData: FormData;
}

const loadInitialState = (): FormState => {
    try {
        const saved = localStorage.getItem("formState");
        if (saved) {
            return JSON.parse(saved);
        }
    } catch (error) {
        console.error("Error loading form state:", error);
    }

    return {
        jsonSchema: "",
        formData: {},
    };
};

// Create the store
export const formStateStore = atom<FormState>(loadInitialState());

// Save to localStorage whenever state changes
formStateStore.subscribe((state) => {
    try {
        localStorage.setItem("formState", JSON.stringify(state));
    } catch (error) {
        console.error("Error saving form state:", error);
    }
});

// Actions
export const updateJsonSchema = (schema: string) => {
    const currentState = formStateStore.get();
    formStateStore.set({
        ...currentState,
        jsonSchema: schema,
    });
};

export const updateFormData = (data: FormData) => {
    const currentState = formStateStore.get();
    formStateStore.set({
        ...currentState,
        formData: data,
    });
};

export const updateFormField = (fieldName: string, value: any) => {
    const currentState = formStateStore.get();
    formStateStore.set({
        ...currentState,
        formData: {
            ...currentState.formData,
            [fieldName]: value,
        },
    });
};

export const resetFormState = () => {
    formStateStore.set({
        jsonSchema: "",
        formData: {},
    });
};
