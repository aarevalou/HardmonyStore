<template>
    <div class="bag" @click="openCart">
      <img data-bs-toggle="modal" width="25" height="25" src='@/assets/shopping_cart.png' alt="move-by-trolley" title="cart-trolley" />
      <span class="mb-3" v-if="store.itemsNumber">{{ store.itemsNumber }}</span>
    </div>
  </template>
  
  <script setup lang="ts">
  const store = useMainStore();
  defineEmits(['open']);
  
  const openCart = () => $emit('open');
  </script>
  
  <style scoped lang="scss">
  .bag {
    span {
      background-color: #6394F8;
      border-radius: 10px;
      color: white;
      position: absolute;
      font-size: 15px;
      line-height: 1;
      padding: 2px 3px 3px 3px;
      text-align: center;
      vertical-align: middle;
      white-space: nowrap;
      margin-left: -9px;
      bottom: 1rem;
    }
  
    img {
      cursor: pointer;
      width: 25px; /* Cambia el tamaño del icono según tus necesidades */
      height: auto;
    }
  }
  </style>
  