<template>
    <div class="searc d-none d-xl-block d-lg-block pr-3">
      <input type="search" class="search">
    </div>
  </template>
  
  <style scoped lang="scss">
  .search {
    outline: none;
    border: none; /* Elimina el borde */
    background: url('@/assets/search.png') no-repeat 5px center;
    background-size: 30px; /* Tamaño del icono en el estado normal */
    padding: 5px 8px 4px 26px;
    width: 10px;
    -webkit-border-radius: 10em;
    -moz-border-radius: 10em;
    border-radius: 10em;
    -webkit-transition: all 0.5s;
    -moz-transition: all 0.5s;
    transition: all 0.5s;
    margin-right: 10px;
  
    &:focus {
      width: 160px;
      font-family: inherit;
      padding-left: 30px;
      border-color: #DCDCDC; /* Añade el borde solo en el estado de foco */
      -webkit-box-shadow: 0 0 5px #DCDCDC;
      -moz-box-shadow: 0 0 5px #DCDCDC;
      box-shadow: 0 0 5px #DCDCDC;
      backface-visibility: hidden;
      perspective: 1000;
      background-size: 24px; /* Tamaño del icono en el estado de foco */
    }
  }
  </style>
  