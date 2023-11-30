export interface Product {
    id?: number,
    marca?: string,
    modelo?: string,
    imagen?: string,
    stock?: number,
    precio?: number,
    categoria_id?: number,
  }

export interface State {
    productInfo: Product,
    cartItems: Product[],
    items: Product[],
  }