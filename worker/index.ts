/**
 * Cloudflare Worker for Authentication
 * Handles password validation and session token management
 */

interface Env {
  AUTH_PASSWORD: string;
  JWT_SECRET: string;
}

interface LoginRequest {
  password: string;
}

interface AuthResponse {
  success: boolean;
  token?: string;
  message?: string;
}

// Simple JWT-like token generation (for production, use a proper JWT library)
function generateToken(secret: string): string {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2);
  const payload = btoa(JSON.stringify({ timestamp, random }));
  const signature = btoa(
    Array.from(
      new TextEncoder().encode(payload + secret)
    )
      .map((b) => String.fromCharCode(b))
      .join("")
  );
  return `${payload}.${signature}`;
}

function verifyToken(token: string, secret: string): boolean {
  try {
    const [payload, signature] = token.split(".");
    if (!payload || !signature) return false;

    const expectedSignature = btoa(
      Array.from(
        new TextEncoder().encode(payload + secret)
      )
        .map((b) => String.fromCharCode(b))
        .join("")
    );

    return signature === expectedSignature;
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
        },
      });
    }

    // Login endpoint
    if (path === "/api/auth/login" && request.method === "POST") {
      try {
        const body: LoginRequest = await request.json();
        const { password } = body;

        if (!password) {
          return new Response(
            JSON.stringify({
              success: false,
              message: "Password is required",
            } as AuthResponse),
            {
              status: 400,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          );
        }

        // Validate password against environment variable
        if (password === env.AUTH_PASSWORD) {
          const token = generateToken(env.JWT_SECRET);

          return new Response(
            JSON.stringify({
              success: true,
              token,
            } as AuthResponse),
            {
              status: 200,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          );
        } else {
          return new Response(
            JSON.stringify({
              success: false,
              message: "Incorrect password",
            } as AuthResponse),
            {
              status: 401,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          );
        }
      } catch (error) {
        return new Response(
          JSON.stringify({
            success: false,
            message: "Invalid request",
          } as AuthResponse),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
      }
    }

    // Verify token endpoint
    if (path === "/api/auth/verify" && request.method === "POST") {
      try {
        const body = await request.json();
        const { token } = body;

        if (!token) {
          return new Response(
            JSON.stringify({
              success: false,
              message: "Token is required",
            } as AuthResponse),
            {
              status: 400,
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }
          );
        }

        const isValid = verifyToken(token, env.JWT_SECRET);

        return new Response(
          JSON.stringify({
            success: isValid,
            message: isValid ? "Token is valid" : "Invalid token",
          } as AuthResponse),
          {
            status: isValid ? 200 : 401,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
      } catch (error) {
        return new Response(
          JSON.stringify({
            success: false,
            message: "Invalid request",
          } as AuthResponse),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
      }
    }

    // Default: return 404 for unknown routes
    return new Response("Not Found", { status: 404 });
  },
};

