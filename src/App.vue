<script setup lang="ts">
import { CountriesList } from "@/components/CountriesList";
import { PopUpMap } from "@/components/PopUpMap";
import { SearchBar } from "@/components/SearchBar";

import "./assets/main.css";
</script>

<template>
  <main class="app-wrapper">
    <SearchBar />
    <CountriesList />
  </main>
  <PopUpMap />
</template>

<style scoped></style>
