<script setup>
 const props = defineProps({
    outputNum: {
      required: true
    },
    outputText: {
      required: true
    },
  });
</script>

<template>
    <li class="text-offBlack 
              text-outputMobile 
              leading-none 
              font-bold 
              italic 
              desktop:text-outputDesktop"
    >
      <span class="text-primaryPurple">{{ props.outputNum !== "" ? props.outputNum : "--" }}</span> {{ props.outputText }}
    </li>
</template>