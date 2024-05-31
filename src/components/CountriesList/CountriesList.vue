<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "effector-vue/composition";

import { getCountriesListFx } from "@/store/events";
import { $countriesList, $countriesListLoading } from "@/store/store";

onMounted(() => getCountriesListFx());
const countriesList = useStore($countriesList);
const countriesListLoading = useStore($countriesListLoading);
console.log(countriesList);
</script>

<template>
  <div>{{ JSON.stringify(countriesList) }}</div>
</template>

<style scoped></style>
