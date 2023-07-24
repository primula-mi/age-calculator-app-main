<script setup>
import { defineProps, ref } from 'vue';
import InputItem from '@components/InputItem.vue';

const props = defineProps({
  modelValue: {},
});

const emit = defineEmits(['calculAge']);

let day = ref('');
let month = ref('');
let year = ref('');

const defaultDataErrorsField = {
  "day": {
    "text": "",
    "status": false,
  },
  "month": {
    "text": "",
    "status": false,
  },
  "year": {
    "text": "",
    "status": false,
  },
};
let errorsFields = ref(defaultDataErrorsField);

const daysInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
}


const isEmptyFields = () => {
  errorsFields.value.day.text = "";
  errorsFields.value.day.status = "";
  errorsFields.value.month.text = "";
  errorsFields.value.month.status = "";
  errorsFields.value.year.text = "";
  errorsFields.value.year.status = "";
  if (!day.value) {
    errorsFields.value.day.text = "This field is required";
    errorsFields.value.day.status = "error";
  }
  if (!month.value) {
    errorsFields.value.month.text = "This field is required";
    errorsFields.value.month.status = "error";
  }
  if (!year.value) {
  
    errorsFields.value.year.text = "This field is required";
    errorsFields.value.year.status = "error";
  }
  
  if (!day.value || !month.value || !year.value) {
    return true;
  }
  return false;
}

const checkDate = (day, month, year) => {
  return new Date().getTime() >= new Date(year, month, day).getTime();
}

const checkYear = (year) => {
  return Number(new Date().getFullYear()) >= Number(year);
}

const checkMonth = (month) => {
  return 12 >= Number(month);
}

const checkDay = (day, month, year) => {
  return Number(daysInMonth(month, year)) >= Number(day);
}

const isValidDate = () => {
  const isValidDate = checkDate(day.value, month.value, year.value);
  
  const isValidYear = checkYear(year.value);
  if (!isValidYear) {
    errorsFields.value.year.text = "Must be in the past";
    errorsFields.value.year.status = "error";
  }

  const isValidMonth = checkMonth(month.value);
  if (!isValidMonth) {
    errorsFields.value.month.text = "Must be a valid month";
    errorsFields.value.month.status = "error";
  }

  const isValidDay = checkDay(day.value, month.value, year.value);
  if (!isValidDay) {
    errorsFields.value.day.text = "Must be a valid day";
    errorsFields.value.day.status = "error";
  }
  return (isValidDate && isValidYear && isValidMonth && isValidDay) ? true : false;
}

const calculateAge = () => {
  if (isEmptyFields()) {
    return;
  }

  if (!isValidDate()) {
    return;
  }
  
  const currDate = new Date();
  

  let ageYear = currDate.getFullYear() - year.value;
  let ageMonth = 0;
  let ageDay = 0;
  if ((currDate.getMonth() + 1) - month.value > 0) {
    ageMonth = (currDate.getMonth() + 1) - month.value;
  } else {
    ageYear -= 1;
    ageMonth = (12 - month.value) + (currDate.getMonth() + 1);
  }

  if (currDate.getDate() - day.value >= 0) {
    ageDay = currDate.getDate() - day.value;
  } else {
    ageMonth -= 1;
    ageDay = (daysInMonth(month.value, year.value) - day.value) + currDate.getDate();
  }
  ageYear = (ageYear < 0) ? 0 : ageYear;
  ageMonth = (ageMonth === 12) ? 0 : ageMonth;
  const age = {
    ageYear,
    ageMonth,
    ageDay
  }
  // emit("calculAge", age);
  emit('update:modelValue', age)
}


</script>
<template>
    <form class="w-full" method="get">
        <div  class="flex justify-between w-full desktop:justify-start">
            <InputItem :inputName="'day'" :inputPlaseholder="'DD'" v-model="day" :inputError="errorsFields.day"/>
            <InputItem :inputName="'month'" :inputPlaseholder="'MM'" v-model="month" :inputError="errorsFields.month"/>
            <InputItem :inputName="'year'" :inputPlaseholder="'YYYY'" v-model="year" :inputError="errorsFields.year"/>
        </div>
        <div class="h-12
                    flex 
                    justify-center
                    items-center
                    relative 
                    mt-8 
                    desktop:h-20 
                    desktop:justify-end 
                    desktop:mt-0 "
        >
            <hr class="w-full">
            <button class="w-12 
                          h-full 
                          absolute 
                          rounded-full 
                          bg-primaryPurple 
                          bg-[url(/src/assets/images/icon-arrow.svg)] 
                          bg-no-repeat 
                          bg-center 
                          bg-[length:40%]
                          outline-none
                          hover:bg-offBlack 
                          desktop:w-20 
                          desktop:bg-[length:50%]"
                    type="submit"
                    @click.prevent="calculateAge"
                    ></button>
        </div>
    </form>
</template>
