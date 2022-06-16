/* Environment constants */
export const API_ENDPOINT_BASE = import.meta.env.VITE_API_ENDPOINT_BASE;
export const AUTH_URL = import.meta.env.VITE_AUTH_URL;
export const AUTH_REALM = import.meta.env.VITE_AUTH_REALM;
export const AUTH_CLIENT_ID = import.meta.env.VITE_AUTH_CLIENT_ID;

/* API endpoints */
export const API_ENDPOINTS = {
    CREDENTIAL: `${API_ENDPOINT_BASE}/credentials`,
    DEVICE: `${API_ENDPOINT_BASE}/devices`,
    RESYNC: `${API_ENDPOINT_BASE}/resynchronization`,
    PORT: `${API_ENDPOINT_BASE}/ports`,
    INTERFACE: `${API_ENDPOINT_BASE}/interfaces`
};