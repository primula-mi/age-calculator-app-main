<script setup>
import { ref } from 'vue';
import FormBlock from '@components/FormBlock.vue';
import OutputList from '@components/OutputList.vue';

// const emit = defineEmits(['calculAge'])

// let objAge = 0;
let age = ref({
  "ageYear": "", 
  "ageMonth": "", 
  "ageDay": "", 
});

</script>

<template>
    <section class="max-w-screen-md 
                    container 
                    mx-auto 
                    px-5 
                    py-11 
                    bg-white 
                    rounded-t-lg 
                    rounded-bl-lg 
                    rounded-br-5xl 
                    desktop:px-10 
                    desktop:rounded-t-3xl 
                    desktop:rounded-bl-3xl 
                    desktop:rounded-br-[11rem]"
    >
        <FormBlock v-model="age"/>
        <OutputList :outputAge = "age"/>
    </section>
</template>