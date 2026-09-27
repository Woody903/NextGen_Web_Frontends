
<script setup lang="ts">
    import BaseCard from './BaseCard.vue';
    import type { Note } from '../types/notes';

    defineProps<{
         note: Note;
    }>();

    const emit = defineEmits<{delete: [id:number]}>();
</script>





<template>
    <BaseCard>
        
        <template #header>
            <h2>{{ note.title }}</h2>
            <button @click="emit('delete', note.id)">Delete</button>
        </template>

        <p>{{ note.content }}</p>
        <span v-for="tag in note.tags" :key="tag"  class="tag"  >#{{ tag }} </span> 
    </BaseCard>

</template>



<style scoped>
    .tag {
        margin-right: 5px;
            }
</style>