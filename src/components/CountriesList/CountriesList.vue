<script setup lang="ts">
import { onMounted } from "vue";
import { useStore } from "effector-vue/composition";

import { getCountriesListFx } from "@/store/events";
import { $appStore } from "@/store/store";

onMounted(() => getCountriesListFx());
const store = useStore($appStore);
</script>

<template>
  <div>{{ JSON.stringify(store.countriesList) }}</div>
</template>

<style scoped></style>
