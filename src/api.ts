import { Product } from './types/Product';
import { WEBSITE_URL } from './helpers/constants';

const BASE_URL = `${WEBSITE_URL}api`; 

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
  return fetchProducts()
    .then(response => {
      const result = response.find(product => product.id === productId);

      return result;
    });
}

export function fetchCompleteDetails(productId: string): Promise<Product> {
  return Promise.all([
    fetchGeneralProductDetails(productId),
    fetchProductDetails(productId),
  ]).then(([res1, res2]) => ({ ...res1, ...res2 }));
}
