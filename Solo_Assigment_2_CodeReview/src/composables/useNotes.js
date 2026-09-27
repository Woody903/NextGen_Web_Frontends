import { computed } from 'vue'
import { useLocalStorage } from './useLocalStorage.js'

export function useNotes() {
  const notes = useLocalStorage('quicknotes', [])

  function addNote(note) {
    notes.value = [...notes.value, note]
  }

  function deleteNote(id) {
    notes.value = notes.value.filter((n) => n.id !== id)
  }

  function filteredNotes(term) {
  return computed(() => {
    let searchTerm = ''

    if (typeof term === 'string') {
      searchTerm = term
    } else if (term && term.value) {
      searchTerm = term.value
    }

    searchTerm = searchTerm.trim().toLowerCase()

    if (!searchTerm) return notes.value

    return notes.value.filter((note) => {
      const text = [note.title, note.content, ...(note.tags || [])].join(' ').toLowerCase()
      return text.includes(searchTerm)
    })
  })
  }

  return { notes, addNote, deleteNote, filteredNotes }
}
