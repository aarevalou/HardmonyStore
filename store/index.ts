import { defineStore } from "pinia";
import { State } from '@/components/types'

export const useMainStore = defineStore("main", {
  state: (): State => ({
    productInfo: {},
    cartItems: [],
    items: [
      {
          id: 1,
          marca: "Intel",
          modelo: "Core i5 12400",
          precio: 200000,
          stock: 11,
          imagen: "",
          categoria_id: 0
      },
      {
          id: 2,
          marca: "Intel",
          modelo: "Core i7 12700k",
          precio: 270000,
          stock: 8,
          imagen: "",
          categoria_id: 0
      },
      {
          id: 3,
          marca: "AMD",
          modelo: "Ryzen 5 5600x",
          precio: 190000,
          stock: 13,
          imagen: "",
          categoria_id: 0
      },
      {
          id: 4,
          marca: "AMD",
          modelo: "Ryzen 7 7700x",
          precio: 350000,
          stock: 5,
          imagen: "",
          categoria_id: 0
      },
      {
          id: 5,
          marca: "AMD",
          modelo: "GeForce GTX 1650",
          precio: 330000,
          stock: 7,
          imagen: "",
          categoria_id: 1
      },
      {
          id: 6,
          marca: "AMD",
          modelo: "GeForce RTX 3090",
          precio: 470000,
          stock: 2,
          imagen: "",
          categoria_id: 1
      },
      {
          id: 7,
          marca: "AMD",
          modelo: "Radeon RX 6600",
          precio: 250000,
          stock: 4,
          imagen: "",
          categoria_id: 1
      },
      {
          id: 8,
          marca: "Kingston",
          modelo: "Fury Beast 8 GB",
          precio: 25000,
          stock: 14,
          imagen: "",
          categoria_id: 2
      },
      {
          id: 9,
          marca: "Kingston",
          modelo: "Fury Impact 16 GB",
          precio: 37000,
          stock: 17,
          imagen: "",
          categoria_id: 2
      },
      {
          id: 10,
          marca: "Crucial",
          modelo: "BX500 500 GB",
          precio: 40000,
          stock: 12,
          imagen: "",
          categoria_id: 3
      },
      {
          id: 11,
          marca: "Kingston",
          modelo: "SN770 1 TB",
          precio: 70000,
          stock: 10,
          imagen: "",
          categoria_id: 3
      }
  ]
  
  
  ,
  }),
  getters: {
    // Cart Component
    itemsNumber: ({ cartItems }): number => cartItems.length,
    totalPrice: ({ cartItems }): number | undefined => {
      if (cartItems.length !== 1) {
        const sum = cartItems?.reduce((acc: number, obj: any) => {
          let result = acc + obj.price
          return result
        },0);
        return sum;
      }
      return cartItems[0].precio;
    },
  },
  actions: {
    // Cart Component
    inCart(n: object) {
      return this.cartItems.push(n);
    },
    outCart(n: number) {
      let index = this.cartItems.findIndex((x) => x.id === n);
      return this.cartItems.splice(index, 1);
    },
    // Info Component
    addtoInfo(n: number) {
      const selectedProduct = this.items.find((item) => item.id === n);
      this.productInfo = selectedProduct! ;
    },
  },
});
