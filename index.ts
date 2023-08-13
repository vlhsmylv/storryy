// Storryy Object
export const storryy = {
  get: async (fieldName: string) => {
    const field: string | null = localStorage.getItem(fieldName)
      ? localStorage.getItem(fieldName)
      : null;

    return field ? JSON.parse(field) : null;
  },
  getDefault: async (fieldName: string) => {
    const field: string | null = localStorage.getItem(fieldName)
      ? localStorage.getItem(fieldName)
      : null;

    return field ? field : JSON.stringify(null);
  },
  append: async (fieldName: string, data: object) => {
    const field: string | null = localStorage.getItem(fieldName)
      ? localStorage.getItem(fieldName)
      : null;

    const parsedField: (typeof data)[] | null = field ? JSON.parse(field) : [];

    if (!parsedField) return;

    parsedField.push(data);

    return localStorage.setItem(fieldName, JSON.stringify(parsedField));
  },
  set: async (fieldName: string, data: string | object) => {
    return localStorage.setItem(fieldName, JSON.stringify(data));
  },
  remove: async (fieldName: string) => {
    return localStorage.removeItem(fieldName);
  },
  reset: async () => {
    return localStorage.clear();
  },
};
