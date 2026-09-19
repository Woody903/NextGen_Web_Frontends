<script setup lang="ts">
import { ref } from 'vue'
import { computed } from 'vue'


const count = ref(0)
const calculate = computed(() => count.value * 2)
</script>

<template>
  <section id="center">
    <div>
      <h1>Let's calculate:</h1>
    </div>



<div class ="buttons">
    <button type="button"  @click="count++">
      +
    </button>


    <button type="button" >
      Count is {{ count }}
    </button>


    <button type="button"  @click="count--">
      -
    </button>
  </div>

    <div class="display">
      Multipliziert mal 2 ist: {{ calculate }}
    </div>


  </section>

  <div class="ticks"></div>




  <section id="next-steps">
    <div id="docs">
      <h2>Assignment 1 A</h2>
      <p>Lisa Hoffmann, WS 1</p>
    </div>
    </section>

  <div class="ticks"></div>
  
</template>
