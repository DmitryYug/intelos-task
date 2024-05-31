<script setup lang="ts">
import { CountriesList } from "@/components/CountriesList";
import { DialogMap } from "@/components/DialogMap";
import { SearchBar } from "@/components/SearchBar";

import "./assets/main.css";
</script>

<template>
  <main class="app-wrapper">
    <SearchBar />
    <CountriesList />
  </main>
  <DialogMap />
</template>

<style scoped></style>
