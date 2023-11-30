<template>
  <div>
    <h2 class="pt-3 text-center">Todos los productos</h2>
    <nav class="d-flex justify-content-center" aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <NuxtLink to="/">Inicio</NuxtLink>
        </li>
        <li class="breadcrumb-item active" aria-current="page">Productos</li>
      </ol>
    </nav>
  </div>
</template>

<style scoped lang="scss">
.breadcrumb {
  background: inherit !important;
  color: #2c3539 !important;
  font-size: 16px;

  li {
    text-decoration: none !important;
    color: #f2be00 !important;
  }

  a {
    text-decoration: none !important;
    color: #2c3539 !important;
  }
}
</style>
