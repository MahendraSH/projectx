import { BaseQueryFn } from "@reduxjs/toolkit/query/react";
import * as mockDb from "./mockData";

export const mockBaseQuery: BaseQueryFn<
  string | { url: string; method?: string; body?: any; headers?: any },
  unknown,
  unknown
> = async (args) => {
  // Parse url and method
  let url = "";
  let method = "GET";
  let body: any = null;
  let headers: any = null;

  if (typeof args === "string") {
    url = args;
  } else {
    url = args.url;
    method = args.method || "GET";
    body = args.body;
    headers = args.headers;
  }

  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 400));

  try {
    // 1. Collections: Active collections
    if (url.startsWith("/collection/active")) {
      return { data: mockDb.MOCK_COLLECTIONS };
    }

    // 2. Product by ID
    // /product/{productId}?productId=${productId}
    if (url.startsWith("/product/")) {
      // Find productId in query string or path
      const urlObj = new URL(url, "http://localhost");
      let productId = urlObj.searchParams.get("productId");
      if (!productId) {
        // Fallback to path extraction
        const parts = urlObj.pathname.split("/");
        productId = parts[parts.length - 1];
      }
      
      const product = mockDb.getProductById(productId);
      if (product) {
        return { data: product };
      } else {
        return {
          error: { status: 404, data: { message: `Product ${productId} not found` } }
        };
      }
    }

    // 3. Auth: Sign In
    if (url.startsWith("/auth/signIn") && method === "POST") {
      const { email, password } = body;
      try {
        const user = mockDb.loginMockUser(email, password);
        return { data: {
          email: user.email,
          displayName: user.displayName,
          idToken: user.idToken,
          refreshToken: user.refreshToken,
          localId: user.localId
        } };
      } catch (err: any) {
        return {
          error: { status: 400, data: { message: err.message || "Invalid credentials" } }
        };
      }
    }

    // 4. Auth: Sign Up
    if (url.startsWith("/auth/signUp") && method === "POST") {
      const { email, password } = body;
      try {
        const user = mockDb.registerMockUser(email, password, "");
        return { data: {
          email: user.email,
          displayName: user.displayName,
          idToken: user.idToken,
          refreshToken: user.refreshToken,
          localId: user.localId
        } };
      } catch (err: any) {
        return {
          error: { status: 400, data: { message: err.message || "Sign up failed" } }
        };
      }
    }

    // 5. Session: Get Session Data
    if (url.startsWith("/session/session")) {
      const token = headers?.Authorization || headers?.authorization;
      if (!token) {
        return { error: { status: 401, data: { message: "No Authorization token" } } };
      }
      const user = mockDb.getUserByToken(token);
      if (!user) {
        // Try google auth token fallback or default to standard user
        if (token === "mock-google-token-123") {
          const session = mockDb.getSessionForUser("mock-google-uid-123");
          return { data: session };
        }
        return { error: { status: 401, data: { message: "Invalid or expired session token" } } };
      }
      const session = mockDb.getSessionForUser(user.localId);
      return { data: session };
    }

    // 6. Session: Add to Cart
    if (url.startsWith("/session/add/cart") && method === "POST") {
      const token = headers?.Authorization || headers?.authorization;
      if (!token) {
        return { error: { status: 401, data: { message: "No Authorization token" } } };
      }
      
      let userId = "mock-google-uid-123";
      const user = mockDb.getUserByToken(token);
      if (user) {
        userId = user.localId;
      }
      
      const { productId, productMeta, quantity } = body;
      const product = mockDb.getProductById(productId);
      if (!product) {
        return { error: { status: 404, data: { message: "Product not found" } } };
      }

      const updatedSession = mockDb.updateSessionForUser(userId, (session) => {
        const entries = [...session.cartEntries.entries];
        const existingIdx = entries.findIndex(
          (e) => e.productId === productId && e.productMeta.size === productMeta.size && e.productMeta.color === productMeta.color
        );
        
        if (existingIdx >= 0) {
          entries[existingIdx] = {
            ...entries[existingIdx],
            quantity: entries[existingIdx].quantity + quantity
          };
        } else {
          entries.push({
            productId,
            product,
            productMeta,
            quantity
          });
        }
        return {
          ...session,
          cartEntries: {
            ...session.cartEntries,
            entries
          }
        };
      });

      return { data: updatedSession };
    }

    // 7. Session: Add to Favorites
    if (url.startsWith("/session/add/favourites") && method === "POST") {
      const token = headers?.Authorization || headers?.authorization;
      if (!token) {
        return { error: { status: 401, data: { message: "No Authorization token" } } };
      }
      
      let userId = "mock-google-uid-123";
      const user = mockDb.getUserByToken(token);
      if (user) {
        userId = user.localId;
      }
      
      const { productId, productMeta, quantity } = body;
      const product = mockDb.getProductById(productId);
      if (!product) {
        return { error: { status: 404, data: { message: "Product not found" } } };
      }

      const updatedSession = mockDb.updateSessionForUser(userId, (session) => {
        const entries = [...session.favouriteEntries.entries];
        const existingIdx = entries.findIndex((e) => e.productId === productId);
        
        if (existingIdx >= 0) {
          entries[existingIdx] = {
            ...entries[existingIdx],
            quantity: entries[existingIdx].quantity + quantity
          };
        } else {
          entries.push({
            productId,
            product,
            productMeta,
            quantity
          });
        }
        return {
          ...session,
          favouriteEntries: {
            ...session.favouriteEntries,
            entries
          }
        };
      });

      return { data: updatedSession };
    }

    // 8. AI Prompt Generation
    if (url.startsWith("/ai/generate") && method === "POST") {
      const { prompt, gender, category, printType } = body;
      
      // Let's create a beautiful generated product dynamically!
      const randomId = `gen-${Date.now()}`;
      
      // Create a nice looking design template based on Category and Gender
      let imageUrl = "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600";
      if (category.toLowerCase() === "hoodie") {
        imageUrl = "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600";
      } else if (category.toLowerCase() === "shirt") {
        imageUrl = "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600";
      } else if (gender.toLowerCase() === "female") {
        imageUrl = "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&q=80&w=600";
      }

      const generatedProduct = {
        productId: randomId,
        productType: category,
        title: `AI ${category} (${printType})`,
        price: 1599,
        description: `This custom ${category} was generated by our AI design engine based on your prompt: "${prompt}". Created specifically for a ${gender} fit featuring high quality ${printType} finishing.`,
        category: category,
        gender: gender,
        rating: 5.0,
        prompt: prompt,
        images: [
          {
            imageId: `${randomId}-img`,
            imageUrl: imageUrl,
            createdAt: Date.now(),
            metaData: {
              printType: printType,
              gender: gender,
              model: "AI Generated Model",
              prompt: prompt,
              timestamp: Date.now()
            }
          }
        ],
        image: {
          imageId: `${randomId}-img`,
          imageUrl: imageUrl,
          createdAt: Date.now(),
          metaData: {
            printType: printType,
            gender: gender,
            model: "AI Generated Model",
            prompt: prompt,
            timestamp: Date.now()
          }
        }
      };

      // Add to our mock db in memory / localStorage
      mockDb.addGeneratedProduct(generatedProduct);

      return { data: generatedProduct };
    }

    // Default fallback
    return {
      error: { status: 404, data: { message: `Endpoint ${url} not found` } }
    };
  } catch (err: any) {
    return {
      error: { status: 500, data: { message: err.message || "Mock server error" } }
    };
  }
};
