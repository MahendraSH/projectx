import { Product, Collection } from "./features/collectionsApiSlice";
import { ApiResponse, Entry } from "./features/sessionApiSlice";

// Mock products database
export const MOCK_PRODUCTS: Product[] = [
  {
    productId: "prod-1",
    productType: "T-Shirt",
    title: "Cyberpunk Dragon Tee",
    price: 1299,
    description: "Unleash your inner futuristic rebellion with the Cyberpunk Dragon Tee. Crafted from 100% premium heavy cotton, featuring an intricate neon cyber-dragon design screen-printed with vivid color-lasting inks.",
    category: "T-Shirt",
    gender: "Male",
    rating: 4.8,
    prompt: "A detailed cyberpunk dragon winding around a futuristic skyscraper, neon purple and glowing cyan accents, digital vaporwave art style",
    images: [
      {
        imageId: "img-1-1",
        imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=600",
        createdAt: Date.now(),
        metaData: {
          printType: "Graphic Screenprint",
          gender: "Male",
          model: "Oversized Fit",
          prompt: "Cyberpunk dragon winding around a futuristic skyscraper",
          timestamp: Date.now()
        }
      },
      {
        imageId: "img-1-2",
        imageUrl: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=600",
        createdAt: Date.now(),
        metaData: {
          printType: "Graphic Screenprint",
          gender: "Male",
          model: "Oversized Fit",
          prompt: "Cyberpunk dragon winding around a futuristic skyscraper",
          timestamp: Date.now()
        }
      }
    ],
    image: {
      imageId: "img-1-1",
      imageUrl: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=600",
      createdAt: Date.now(),
      metaData: {
        printType: "Graphic Screenprint",
        gender: "Male",
        model: "Oversized Fit",
        prompt: "Cyberpunk dragon winding around a futuristic skyscraper",
        timestamp: Date.now()
      }
    }
  },
  {
    productId: "prod-2",
    productType: "Hoodie",
    title: "Minimalist Geometry Hoodie",
    price: 2499,
    description: "Clean lines and cozy fabrics. The Minimalist Geometry Hoodie features a high-density embroidered design on ultra-soft fleece-lined cotton. Designed for daily comfort with an avant-garde aesthetic.",
    category: "Hoodie",
    gender: "Unisex",
    rating: 4.6,
    prompt: "Minimal geometric intersecting circles and triangles, fine lines, Bauhaus design, embroidered look, charcoal grey backdrop",
    images: [
      {
        imageId: "img-2-1",
        imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600",
        createdAt: Date.now(),
        metaData: {
          printType: "Embroidery",
          gender: "Unisex",
          model: "Regular Fit",
          prompt: "Minimal geometric intersecting circles and triangles",
          timestamp: Date.now()
        }
      }
    ],
    image: {
      imageId: "img-2-1",
      imageUrl: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=600",
      createdAt: Date.now(),
      metaData: {
        printType: "Embroidery",
        gender: "Unisex",
        model: "Regular Fit",
        prompt: "Minimal geometric intersecting circles and triangles",
        timestamp: Date.now()
      }
    }
  },
  {
    productId: "prod-3",
    productType: "Shirt",
    title: "Urban Utility Cargo Shirt",
    price: 1899,
    description: "Designed for the modern adventurer. This shirt features multiple tactical pockets, a durable ripstop fabric blend, and a sleek casual fit. Ideal for layering over graphic tees.",
    category: "Shirt",
    gender: "Male",
    rating: 4.5,
    prompt: "Urban tactical shirt layout, double chest utility pockets, matte hardware, army green ripstop nylon blend",
    images: [
      {
        imageId: "img-3-1",
        imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=600",
        createdAt: Date.now(),
        metaData: {
          printType: "Solid Utility",
          gender: "Male",
          model: "Tactical Relaxed Fit",
          prompt: "Urban tactical shirt layouts",
          timestamp: Date.now()
        }
      }
    ],
    image: {
      imageId: "img-3-1",
      imageUrl: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&q=80&w=600",
      createdAt: Date.now(),
      metaData: {
        printType: "Solid Utility",
        gender: "Male",
        model: "Tactical Relaxed Fit",
        prompt: "Urban tactical shirt layouts",
        timestamp: Date.now()
      }
    }
  },
  {
    productId: "prod-4",
    productType: "T-Shirt",
    title: "Neon Grid Oversized Tee",
    price: 1499,
    description: "Enter the grid. A boxy oversized silhouette with a glowing cyan cyber-grid print across the back. Crafted from heavy ringspun cotton to retain its shape drape after drape.",
    category: "T-Shirt",
    gender: "Unisex",
    rating: 4.9,
    prompt: "A glowing 3D vector wireframe grid receding into a dark background, Tron retro-futurism aesthetic, cyan and black",
    images: [
      {
        imageId: "img-4-1",
        imageUrl: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=600",
        createdAt: Date.now(),
        metaData: {
          printType: "Sublimation",
          gender: "Unisex",
          model: "Oversized Boxy Fit",
          prompt: "Glowing 3D vector wireframe grid, Tron aesthetic",
          timestamp: Date.now()
        }
      }
    ],
    image: {
      imageId: "img-4-1",
      imageUrl: "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=600",
      createdAt: Date.now(),
      metaData: {
        printType: "Sublimation",
        gender: "Unisex",
        model: "Oversized Boxy Fit",
        prompt: "Glowing 3D vector wireframe grid, Tron aesthetic",
        timestamp: Date.now()
      }
    }
  },
  {
    productId: "prod-5",
    productType: "Jacket",
    title: "Retro Arcade Bomber Jacket",
    price: 3999,
    description: "A statement piece inspired by retro-futuristic arcade aesthetics. Features neon contrast stitching, premium heavy-duty zippers, a custom inner satin lining, and windproof shell fabric.",
    category: "Jacket",
    gender: "Male",
    rating: 4.7,
    prompt: "Retro arcade pattern, pixel-art spaceships and neon lasers, 80s aesthetics, embroidery patches details",
    images: [
      {
        imageId: "img-5-1",
        imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=600",
        createdAt: Date.now(),
        metaData: {
          printType: "Embroidery & Custom Shell",
          gender: "Male",
          model: "Standard Bomber Fit",
          prompt: "Retro arcade pattern, pixel-art spaceships and lasers",
          timestamp: Date.now()
        }
      }
    ],
    image: {
      imageId: "img-5-1",
      imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=600",
      createdAt: Date.now(),
      metaData: {
        printType: "Embroidery & Custom Shell",
        gender: "Male",
        model: "Standard Bomber Fit",
        prompt: "Retro arcade pattern, pixel-art spaceships and lasers",
        timestamp: Date.now()
      }
    }
  },
  {
    productId: "prod-6",
    productType: "T-Shirt",
    title: "Synthwave Sunset Tee",
    price: 1199,
    description: "Warm nostalgic hues meeting modern vector designs. This tee features an iconic vaporwave sunset grid print on incredibly soft ringspun organic cotton for day-long comfort.",
    category: "T-Shirt",
    gender: "Female",
    rating: 4.4,
    prompt: "A neon sun setting behind horizontal gridlines, reflections on water, vaporwave aesthetic, purple, magenta, and orange color palette",
    images: [
      {
        imageId: "img-6-1",
        imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&q=80&w=600",
        createdAt: Date.now(),
        metaData: {
          printType: "Direct to Garment",
          gender: "Female",
          model: "Slim Crop Fit",
          prompt: "Neon sun setting behind gridlines, vaporwave aesthetic",
          timestamp: Date.now()
        }
      }
    ],
    image: {
      imageId: "img-6-1",
      imageUrl: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&q=80&w=600",
      createdAt: Date.now(),
      metaData: {
        printType: "Direct to Garment",
        gender: "Female",
        model: "Slim Crop Fit",
        prompt: "Neon sun setting behind gridlines, vaporwave aesthetic",
        timestamp: Date.now()
      }
    }
  },
  {
    productId: "prod-7",
    productType: "Shirt",
    title: "Vintage Denim Over-Shirt",
    price: 2199,
    description: "Classic mid-wash denim with a modern relaxed drape. Thick, high-quality washed denim that will develop an amazing patina over time. Perfect for layering over white or custom printed shirts.",
    category: "Shirt",
    gender: "Unisex",
    rating: 4.7,
    prompt: "Relaxed mid-wash blue denim shirt, distressed silver snap buttons, clean collar, heavyweight fabric",
    images: [
      {
        imageId: "img-7-1",
        imageUrl: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=600",
        createdAt: Date.now(),
        metaData: {
          printType: "Stitched Denim",
          gender: "Unisex",
          model: "Relaxed Over-Shirt",
          prompt: "Relaxed mid-wash blue denim shirt",
          timestamp: Date.now()
        }
      }
    ],
    image: {
      imageId: "img-7-1",
      imageUrl: "https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&q=80&w=600",
      createdAt: Date.now(),
      metaData: {
        printType: "Stitched Denim",
        gender: "Unisex",
        model: "Relaxed Over-Shirt",
        prompt: "Relaxed mid-wash blue denim shirt",
        timestamp: Date.now()
      }
    }
  },
  {
    productId: "prod-8",
    productType: "Shirt",
    title: "Linen Breeze Casual Shirt",
    price: 1999,
    description: "Keep cool in style. Made from a lightweight, breathable linen-cotton blend that naturally resists excessive wrinkling and feels incredibly soft. Ideal for hot summer nights.",
    category: "Shirt",
    gender: "Male",
    rating: 4.3,
    prompt: "Soft ivory linen shirt, camp collar, front patch pocket, natural wood buttons, relaxed fit",
    images: [
      {
        imageId: "img-8-1",
        imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600",
        createdAt: Date.now(),
        metaData: {
          printType: "Solid Linen Blend",
          gender: "Male",
          model: "Relaxed Summer Fit",
          prompt: "Soft ivory linen shirt, camp collar",
          timestamp: Date.now()
        }
      }
    ],
    image: {
      imageId: "img-8-1",
      imageUrl: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=600",
      createdAt: Date.now(),
      metaData: {
        printType: "Solid Linen Blend",
        gender: "Male",
        model: "Relaxed Summer Fit",
        prompt: "Soft ivory linen shirt, camp collar",
        timestamp: Date.now()
      }
    }
  },
  {
    productId: "prod-9",
    productType: "T-Shirt",
    title: "Pastel Paradise Tee",
    price: 1099,
    description: "Bring the beach vibe wherever you go. A soft pastel pink tee featuring a subtle embroidered palm tree logo on the chest. Pre-shrunk cotton for consistent fit.",
    category: "T-Shirt",
    gender: "Female",
    rating: 4.5,
    prompt: "Small minimalist green palm tree embroidered logo, central chest alignment, pastel peach fabric base",
    images: [
      {
        imageId: "img-9-1",
        imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=600",
        createdAt: Date.now(),
        metaData: {
          printType: "Micro Embroidery",
          gender: "Female",
          model: "Slim Fit",
          prompt: "Small minimalist palm tree embroidery",
          timestamp: Date.now()
        }
      }
    ],
    image: {
      imageId: "img-9-1",
      imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&q=80&w=600",
      createdAt: Date.now(),
      metaData: {
        printType: "Micro Embroidery",
        gender: "Female",
        model: "Slim Fit",
        prompt: "Small minimalist palm tree embroidery",
        timestamp: Date.now()
      }
    }
  }
];

export const MOCK_COLLECTIONS: Collection[] = [
  {
    collectionId: "col-1",
    name: "Trending Now",
    description: "Our customer-favorite items that are currently dominating streetwear charts.",
    active: true,
    createdAt: Date.now() - 86400000 * 5,
    products: [MOCK_PRODUCTS[0], MOCK_PRODUCTS[1], MOCK_PRODUCTS[2]]
  },
  {
    collectionId: "col-2",
    name: "Cyberpunk Streetwear",
    description: "Dive into a cybernetic future with electric colors, glitch art, and tactical vibes.",
    active: true,
    createdAt: Date.now() - 86400000 * 10,
    products: [MOCK_PRODUCTS[3], MOCK_PRODUCTS[4], MOCK_PRODUCTS[0]]
  },
  {
    collectionId: "col-3",
    name: "Summer Essentials",
    description: "Lightweight fabrics, clean pastel tones, and relaxed silhouettes to beat the heat.",
    active: true,
    createdAt: Date.now() - 86400000 * 2,
    products: [MOCK_PRODUCTS[6], MOCK_PRODUCTS[7], MOCK_PRODUCTS[8]]
  }
];

// Helper methods for localStorage database operations
const STORAGE_PREFIX = "projectx_mock_";

const getFromStorage = <T>(key: string, defaultValue: T): T => {
  const data = localStorage.getItem(STORAGE_PREFIX + key);
  if (!data) return defaultValue;
  try {
    return JSON.parse(data) as T;
  } catch {
    return defaultValue;
  }
};

const saveToStorage = <T>(key: string, data: T): void => {
  localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(data));
};

interface UserRecord {
  email: string;
  passwordHash: string; // Storing plain text password is okay for local mocks
  displayName: string;
  idToken: string;
  localId: string;
  refreshToken: string;
}

// User credentials list
export const getMockUsers = (): UserRecord[] => getFromStorage<UserRecord[]>("users", [
  {
    email: "test@example.com",
    passwordHash: "password123",
    displayName: "Jane Doe",
    idToken: "mock-token-jane-doe",
    localId: "user-jane-doe",
    refreshToken: "mock-refresh-jane-doe"
  }
]);

export const registerMockUser = (email: string, passwordHash: string, displayName: string): UserRecord => {
  const users = getMockUsers();
  const existing = users.find(u => u.email === email);
  if (existing) {
    throw new Error("EMAIL_EXISTS");
  }

  const newUser: UserRecord = {
    email,
    passwordHash,
    displayName: displayName || email.split("@")[0],
    idToken: `mock-token-${Date.now()}`,
    localId: `user-${Date.now()}`,
    refreshToken: `mock-refresh-${Date.now()}`
  };

  users.push(newUser);
  saveToStorage("users", users);
  return newUser;
};

export const loginMockUser = (email: string, passwordHash: string): UserRecord => {
  const users = getMockUsers();
  const user = users.find(u => u.email === email && u.passwordHash === passwordHash);
  if (!user) {
    throw new Error("INVALID_PASSWORD_OR_EMAIL");
  }
  return user;
};

export const getUserByToken = (token: string): UserRecord | undefined => {
  const users = getMockUsers();
  return users.find(u => u.idToken === token);
};

// Generated products (via prompt generation feature)
export const getGeneratedProducts = (): Product[] => getFromStorage<Product[]>("gen_products", []);

export const addGeneratedProduct = (product: Product): void => {
  const products = getGeneratedProducts();
  products.push(product);
  saveToStorage("gen_products", products);
};

export const getProductById = (productId: string): Product | undefined => {
  const allProducts = [...MOCK_PRODUCTS, ...getGeneratedProducts()];
  return allProducts.find(p => p.productId === productId);
};

// Session state (carts & favorites per user)
interface SessionStore {
  [userId: string]: ApiResponse;
}

export const getSessionStore = (): SessionStore => getFromStorage<SessionStore>("sessions", {});

export const getSessionForUser = (userId: string): ApiResponse => {
  const store = getSessionStore();
  if (!store[userId]) {
    store[userId] = {
      favouriteEntries: { entries: [], bucketSize: 0 },
      cartEntries: { entries: [], bucketSize: 0 }
    };
    saveToStorage("sessions", store);
  }
  return store[userId];
};

export const updateSessionForUser = (userId: string, updater: (session: ApiResponse) => ApiResponse): ApiResponse => {
  const store = getSessionStore();
  const session = getSessionForUser(userId);
  const updated = updater(session);
  
  // recalculate bucket sizes
  updated.cartEntries.bucketSize = updated.cartEntries.entries.reduce((acc, curr) => acc + curr.quantity, 0);
  updated.favouriteEntries.bucketSize = updated.favouriteEntries.entries.reduce((acc, curr) => acc + curr.quantity, 0);

  store[userId] = updated;
  saveToStorage("sessions", store);
  return updated;
};
