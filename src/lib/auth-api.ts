/**
 * Authentication API client
 * Handles communication with the Cloudflare Worker authentication endpoint
 */

interface LoginResponse {
  success: boolean;
  token?: string;
  message?: string;
}

interface VerifyResponse {
  success: boolean;
  message?: string;
}

// Get the base URL - in production this will be your Cloudflare Worker URL
// For development, we'll use the same origin (Vite proxy handles it)
const getApiUrl = () => {
  // In production, the Cloudflare Worker handles all routes including /api
  // In development, Vite proxy forwards /api/* to wrangler dev (localhost:8787)
  return "";
};

/**
 * Login with password
 * Returns the auth token on success
 */
export async function login(password: string): Promise<string | null> {
  try {
    const apiUrl = getApiUrl();
    const url = `${apiUrl}/api/auth/login`;
    console.log("Attempting login to:", url);
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    console.log("Login response status:", response.status);
    
    if (!response.ok) {
      console.error("Login failed with status:", response.status);
      const errorText = await response.text();
      console.error("Error response:", errorText);
      return null;
    }

    const data: LoginResponse = await response.json();
    console.log("Login response data:", { success: data.success, hasToken: !!data.token });

    if (data.success && data.token) {
      return data.token;
    }

    return null;
  } catch (error) {
    console.error("Login error:", error);
    return null;
  }
}

/**
 * Verify an authentication token
 */
export async function verifyToken(token: string): Promise<boolean> {
  try {
    const apiUrl = getApiUrl();
    const url = `${apiUrl}/api/auth/verify`;
    console.log("Verifying token at:", url);
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    if (!response.ok) {
      console.error("Token verification failed with status:", response.status);
      return false;
    }

    const data: VerifyResponse = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("Token verification error:", error);
    return false;
  }
}

