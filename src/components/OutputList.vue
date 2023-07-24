<script setup>
import OutputItem from './OutputItem.vue';

import { defineProps } from 'vue';

const props = defineProps({
    outputAge: {
    type: Object,
    required: true
  },
});


</script>
<template>
    <ul class="w-full 
              mt-8 
              flex 
              items-start 
              flex-col 
              desktop:mt-6 "
    >
        <OutputItem :outputNum="props.outputAge.ageYear" :outputText="'years'" />
        <OutputItem :outputNum="props.outputAge.ageMonth" :outputText="'months'" />
        <OutputItem :outputNum="props.outputAge.ageDay" :outputText="'days'" />
    </ul>
</template>