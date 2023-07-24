<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  inputName: {
    type: String,
    required: true
  },
  inputPlaseholder: {
    type: String,
    required: true
  },
  inputError: {},
  modelValue: {},
});


</script>
<template>
    <div class="flex 
                flex-col 
                w-1/4 
                desktop:w-[22%] 
                desktop: mr-6">
        <label class="mb-1 
                      uppercase 
                      text-smokeyGray 
                      text-xs 
                      tracking-[3px]
                      font-bold
                      " 
              :class="[inputError.status === 'error' ? 'error' : '']"
              :for="props.inputName">{{ props.inputName }}</label>
        <input class="w-full 
                      h-12 
                      p-3 
                      border 
                      border-lightGrey
                      rounded-md 
                      text-offBlack
                      text-xl 
                      font-bold
                      focus:outline 
                      focus:outline-1 
                      focus:outline-primaryPurple
                      placeholder:text-smokeyGray
                      desktop:h-16 
                      desktop:p-5 
                      desktop:text-3xl" 
                :class="[inputError.status === 'error' ? 'error' : '']"
                type="number"
                :name="props.inputName"
                :id="props.inputName"
                :placeholder="props.inputPlaseholder"
                :value="modelValue"
                @input="$emit('update:modelValue', $event.target.value)">
        <span class="mt-2
                    text-primaryLighrRed 
                    text-xs
                    italic"
              v-if="inputError.status === 'error'">{{ inputError.text }}</span>
    </div>
</template>

<style scoped>
input.error {
  border: 1px solid hsl(0, 100%, 67%);
}
label.error {
  color: hsl(0, 100%, 67%);
}
</style>