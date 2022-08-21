/* Environment constants */
export const API_ENDPOINT_BASE = import.meta.env.VITE_API_ENDPOINT_BASE;
export const AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT;
export const AUTH_REALM = import.meta.env.VITE_AUTH_REALM;
export const AUTH_CLIENT = import.meta.env.VITE_AUTH_CLIENT;

export const SOCKET_ENDPOINT = import.meta.env.VITE_SOCKET_ENDPOINT;


/* API endpoints */
export const API_ENDPOINTS = {
    CREDENTIAL: `${API_ENDPOINT_BASE}/credentials`,
    DEVICE: `${API_ENDPOINT_BASE}/devices`,
    RESYNC: `${API_ENDPOINT_BASE}/resynchronization`,
    PORT: `${API_ENDPOINT_BASE}/ports`,
    INTERFACE: `${API_ENDPOINT_BASE}/interfaces`,
    ALARM: `${API_ENDPOINT_BASE}/alarms`
};