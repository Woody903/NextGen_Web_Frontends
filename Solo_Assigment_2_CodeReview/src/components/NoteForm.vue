
<script setup lang="ts">
    import { ref } from 'vue'
    import type { Note } from '../types/notes'

    const emit = defineEmits<{ add: [note: Note] }>()
    const title = ref('')
    const content = ref('')
    const tags = ref('')

    function submit() {
        emit('add', {
            id: Date.now(),
            title: title.value,
            content: content.value,
        tags: tags.value.split(',').map(t => t.trim()).filter(t => t)
        
        })
        title.value = content.value = tags.value = ''
    }
</script>


<template>
    <form @submit.prevent="submit"> 
    <input v-model="title" placeholder="Titel" required/>
    <textarea v-model="content" placeholder="Content" />
        <input v-model="tags" placeholder="Tags, kommagetrennt" />
        <button>Create</button>

    </form>
</template>