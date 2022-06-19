/* Environment constants */
export const API_ENDPOINT_BASE = import.meta.env.VITE_API_ENDPOINT_BASE;
export const SOCKET_ENDPOINT = import.meta.env.VITE_SOCKET_ENDPOINT;

/* API endpoints */
export const API_ENDPOINTS = {
    CREDENTIAL: `${API_ENDPOINT_BASE}/credentials`,
    DEVICE: `${API_ENDPOINT_BASE}/devices`,
    RESYNC: `${API_ENDPOINT_BASE}/resynchronization`,
    PORT: `${API_ENDPOINT_BASE}/ports`,
    INTERFACE: `${API_ENDPOINT_BASE}/interfaces`
};