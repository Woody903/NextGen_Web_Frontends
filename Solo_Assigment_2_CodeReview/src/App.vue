<script setup lang="ts">
import { ref } from 'vue'
import NoteCard from './components/NoteCard.vue'
import NoteForm from './components/NoteForm.vue'
import SearchBar from './components/searchBar.vue'
import { useNotes } from './composables/useNotes.js'

const { addNote, deleteNote, filteredNotes } = useNotes()
const searchTerm = ref('')
const searchResults = filteredNotes(searchTerm)

</script>

<template>
  <SearchBar v-model="searchTerm" />

  <NoteForm @add="addNote" />

  <NoteCard
    v-for="note in searchResults"
    :key="note.id"
    :note="note"
    @delete="deleteNote"
  />
</template>
