<template>
  <div>
    <div :class="['cart', isOpen ? 'on' : '']">
      <div class="cart-menu">
        <p class="text-center mt-4 pb-2 h3">Cart</p>
        <hr>
        <Notification v-if="!store.itemsNumber">
          Your cart is empty, try to Add stuff.
        </Notification>
        <div class="row" v-for="item in store.cartItems" :key="item.id">
          <CartItem :item="item" />
        </div>
        <div v-if="store.itemsNumber">
          <hr>
          <CartTotal />
        </div>
      </div>
    </div>
    <div :class="['modal', isOpen ? '' : 'off']" @click="$emit('closeCart')"></div>
  </div>
</template>

<script setup>
const store = useMainStore();
const { isOpen } = defineProps(['isOpen']);
</script>


<style scoped>
.modal {
  display: block;
  z-index: 1050;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;

  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

.modal.off {
  display: none;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.cart {
  position: fixed;
  margin-right: 0px;
  top: 0;
  right: 0;
  width: 360px;
  height: 100%;
  background: #303e49;
  overflow-y: auto;
  z-index: 1051;
  -webkit-overflow-scrolling: touch;
  transform: translateX(360px);
  transition-property: transform;
  transition-duration: 0.4s;
}

.cart.on {
  transform: translateX(0);
  -webkit-overflow-scrolling: touch;
  transition-property: transform;
  transition-duration: 0.4s;
}

.cart-menu {
  color: #eee;
  margin-left: 10px;
  margin-right: 15px;
}

hr {
  border-color: white;
}

.row {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
