- [x] Add loading during shirt AI generation
- [ ] Complete accounts page
  - [ ] Carts
  - [ ] Favorites
- [ ] Cart page
- [ ] Product actions (add to cart, add to favorites, etc.)
- [ ] Add size, colors, and other metadata for the products
- [ ] Implement request to add to cart/favorites:

Request to add to cart:

```json
{
  "productId": "0a052824-db5b-46ee-91ea-9c1888548055",
  "productMeta": {
    "size": "XL",
    "gender": "MALE"
  },
  "quantity": 1
}
```

Request to add to favorites:

```json
{
  "productId": "0a052824-db5b-46ee-91ea-9c1888548055"
}
```

Typescript object type:

```typescript
interface Image {
  imageId: string;
  imageUrl: string;
  createdAt: number;
  metaData: {
    printType: string;
    gender: string;
    model: string;
    prompt: string;
    timestamp: number;
  };
}

interface Product {
  productId: string;
  productType: string;
  title: string;
  price: number;
  description: string;
  category: string;
  images: Image[];
  rating: number | null;
  prompt: string;
  image: Image;
  gender: string;
}

interface ProductMeta {
  size: string;
  gender: string;
}

interface CartEntry {
  productId: string;
  product: Product;
  productMeta: ProductMeta;
  quantity: number;
}

interface CartEntries {
  [key: string]: CartEntry;
}

interface Favorites {
  [key: string]: CartEntry;
}

interface AddToCartRequest {
  productId: string;
  productMeta: ProductMeta;
  quantity: number;
}

interface AddToFavoritesRequest {
  productId: string;
}
```
