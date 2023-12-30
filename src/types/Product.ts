export type Product = {
  age: number,
  id: string,
  type: 'candle',
  imageUrl: string,
  name: string,
  price: number,
  discount: number,
  images: string[],
  ingridients: string[],
  quantity?: number,
  withTop?:boolean
};
