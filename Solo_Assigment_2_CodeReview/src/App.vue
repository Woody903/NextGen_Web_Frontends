<script setup lang="ts">
import NoteCard from './components/NoteCard.vue';

import type { Note } from './types/notes';



const testnote: Note = {
  id: 1,
  title: 'Hallo Note',
  content: 'This is a test note.',
 tags: ['test', 'note'],
};

</script>


<template>
 
  <NoteCard :note="testnote" @delete="(id) => console.log('Delete:', id)" />

</template>
