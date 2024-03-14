<template>
  <div>
    <textarea v-model="inputText" placeholder="Paste your Obsidian Callouts"></textarea>
    <c-button @click="convert">convert</c-button>
    <h2>ShortCodes from your Callouts:</h2>
    <TextareaCopyable :value="outputText" />
  </div>
</template>

<script setup lang="ts">
import { calloutsToAdmonition } from './Obsidian-Shortcodes-to-Hugo.service';
import TextareaCopyable from '@/components/TextareaCopyable.vue';

const inputText = ref(`
`);
const outputText = ref('Hugo ShortCodes');

const convert = () => {
  outputText.value = calloutsToAdmonition(inputText.value);
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 200px;
}
</style>