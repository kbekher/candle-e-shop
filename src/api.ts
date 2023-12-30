import { Product } from './types/Product';

const BASE_URL = 'https://lum-candles.netlify.app/api';
// const BASE_URL = 'http://localhost:3000/api';

export function fetchProducts(): Promise<Product[]> {
  const URL = `${BASE_URL}/products.json`;

  return fetch(URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }

      return response.json();
    });
}

export const fetchProductDetails = (
  productId: string,
): Promise<Product> => {
  const URL = `${BASE_URL}/products/${productId}.json`;

  return fetch(URL)
    .then(res => {
      if (res.ok) {
        return res.json();
      }

      throw new Error(res.statusText);
    });
};

export function fetchGeneralProductDetails(
  productId: string,
): Promise<Product | undefined> {
  console.log(productId);
  return fetchProducts()
    .then(response => {
      const result = response.find(product => product.id === productId);

      return result;
    });
}

export function fetchCompleteDetails(productId: string): Promise<Product> {
  console.log(productId);

  return Promise.all([
    fetchGeneralProductDetails(productId),
    fetchProductDetails(productId),
  ]).then(([res1, res2]) => ({ ...res1, ...res2 }));
}
