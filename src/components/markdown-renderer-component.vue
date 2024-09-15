<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { marked } from 'marked';

const route = useRoute();
const markdownContent = ref('');

const fetchMarkdown = async () => {
  const link = route.query.link as string;

  if (link) {
    try {
      const response = await fetch(link);
      const markdown = await response.text();
      markdownContent.value = marked(markdown);
    } catch (error) {
      console.error('Error fetching markdown file:', error);
    }
  } else {
    console.error('Markdown file link is undefined');
  }
};

onMounted(() => {
  fetchMarkdown();
});
</script>

<template>
  <div class="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-full mx-auto my-8 p-4 bg-white shadow-md rounded-lg">
    <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">{{ route.params.title }}</h1>
    <div v-html="markdownContent"></div>
  </div>
</template>
