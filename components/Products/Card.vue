<template>
  <div class="row justify-content-center text-center">
    <NuxtLink v-for="item in cards" :to="`/details/${item.id}`" class="col-10 col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-4 pb-3" :key="item.id">
      <div class="card">
        <img class="card-img-top" :src="useAsset(item.imagen as string)" alt="Card-image-cap" title="Card-image-cap" loading="lazy">
        <div class="card-body">
          <h5 class="card-title no-underline">{{ item.modelo }}</h5>
          <p class="card-text no-underline">${{ item.precio }}</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { Product } from '../types';

const store = useMainStore();

defineProps<{
  cards: Product[]
}>();
</script>

<style lang="scss">
/* Card Style */
.card {
  transition: 300ms;
  position: relative;
  overflow: hidden;

  img {
    z-index: 1;
  }

  button {
    width: 140px;
    margin-bottom: 10px;
  }

  &:hover .overlay {
    opacity: 0.4;
  }

  .overlay {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 70%;
    background-color: #232b34;
    opacity: 0;
    z-index: 100;
    transition: all 0.3s ease-in;
  }

  &:hover,
  &:active {
    transform: scaleY(1.02) scaleX(1.02);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25), 0 0px 40px rgba(0, 0, 0, 0.22);
  }

  .card-title,
  .card-text {
    &.no-underline {
      text-decoration: none;
    }
  }
}
</style>
