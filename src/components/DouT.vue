<script setup>
import cards from "../data/DouT.js";
</script>

<template>
  <section class="flex flex-col items-center py-32">
    <h2 class="mt-10 mb-28 text-5xl md:text-6xl font-bold text-white" id="dout">
      Doçuras ou Travessuras
    </h2>
    <div
      class="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 w-full px-2 md:px-4"
    >
      <div
        v-for="(card, i) of cards"
        :key="card.titulo"
        class="grid place-items-center text-center gap-5 p-8 rounded-md text-white bg-gradient-to-b from-primary-200/20 to-primary-200/10"
        :class="
          i === 1 || i === 4
            ? 'from-primary-200/50 to-primary-200/30 lg:-translate-y-10'
            : ''
        "
      >
        <div>
          <img :src="card.imagem" class="max-w-32 sm:max-w-40" alt="" />
        </div>
        <h3 class="text-2xl lg:text-4xl font-bold">{{ card.titulo }}</h3>
        <p class="w-[90%] hidden md:block">{{ card.desc }}</p>
      </div>
    </div>
  </section>
</template>
