<script setup>
import categoria1 from "../assets/categoria1.png";
import categoria2 from "../assets/categoria2.png";
import categoria3 from "../assets/categoria3.png";

const categorias = [
  {
    titulo: "Fantasma",
    imagem: categoria1,
    desc: "O fantasma, alma perdida, flutua entre mundos, trazendo mistério e um toque de nostalgia.",
  },
  {
    titulo: "Bruxa",
    imagem: categoria2,
    desc: "A bruxa, sábia e poderosa, encanta com feitiços e poções, guardiã de segredos ancestrais.",
  },
  {
    titulo: "Abobora",
    imagem: categoria3,
    desc: "A abóbora, vibrante e iluminada, é símbolo do Halloween, trazendo alegria e doces para todos!",
  },
];
</script>

<template>
  <section
    id="categoria"
    class="flex flex-col items-center justify-center py-20 bg-primary"
  >
    <h1 class="mb-10 text-6xl font-bold text-white">Categoria</h1>
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 place-items-center w-full px-4"
    >
      <div
        v-for="categoria in categorias"
        :key="categoria.titulo"
        class="text-white grid place-items-center gap-5 text-center"
      >
        <div class="py-10 max-w-xs">
          <img :src="categoria.imagem" alt="Categoria" class="max-w-full" />
        </div>
        <h3 class="text-3xl font-bold">{{ categoria.titulo }}</h3>
        <p class="w-3/4">{{ categoria.desc }}</p>
      </div>
    </div>
  </section>

  <section
    class="grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-10 items-center py-20"
    id="sobre"
  >
    <div class="flex justify-center">
      <img
        src="../assets/categoria4.png"
        alt="Categoria 4"
        class="max-w-full h-auto"
      />
    </div>
    <div class="p-10 text-white">
      <h2 class="text-5xl font-bold">O que é isso?</h2>
      <div class="flex items-center gap-5 my-5">
        <h2 class="text-5xl font-bold">Dia das Bruxas</h2>
        <img
          src="../assets/categoria5.png"
          alt="Categoria 5"
          class="max-w-20"
        />
      </div>
      <p class="mt-12 text-xl w-[90%] text-center">
        O Dia das Bruxas, ou Halloween, é uma celebração que remonta ao Samhain,
        quando se acreditava que os espíritos dos mortos retornavam. As
        fantasias de bruxas e fantasmas canalizam esse mistério, enquanto as
        abóboras esculpidas afastam entidades malignas. Histórias de terror e
        lendas urbanas intensificam a atmosfera mágica e sombria dessa data
        encantadora.
      </p>
    </div>
  </section>
</template>
