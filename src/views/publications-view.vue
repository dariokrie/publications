<script setup lang="ts">
import { RouterLink } from 'vue-router';

interface Publication {
  title: string;
  description: string;
  imageUrl: string;   
  link: string;        
}

const publications: Publication[] = [
  {
    title: 'Malaysia Airlines Flight 370',
    description: 'How could an aircraft filled with 239 people on board vanish?',
    imageUrl: '/publications/malaysia-370/Boeing_777-200ER_Malaysia_AL_(MAS)_9M-MRO_-_color.jpg',
    link: '/publications/malaysia-370/malaysia-370.md',
  },
];
</script>

<template>
  <div class="container mx-auto py-8">
    <h1 class="text-3xl font-bold text-center mb-6">Publications</h1>
    <h2 class="text-2xl font-bold text-center mb-6">© Dario Krieger 2024</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="publication in publications"
        :key="publication.title"
        class="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      >
        <img
          :src="publication.imageUrl"
          alt=""
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ publication.title }}</h2>
          <p class="text-gray-600">{{ publication.description }}</p>
          <router-link
            :to="{ name: 'Publication', params: { title: publication.title }, query: { link: publication.link } }"
            class="block mt-4 text-indigo-600 hover:text-indigo-800"
          >
            Read More
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
