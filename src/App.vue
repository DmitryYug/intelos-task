<script setup lang="ts">
import { useTheme } from "vuetify";

import { CountriesList } from "@/components/CountriesList";
import { DialogMap } from "@/components/DialogMap";
import { SearchBar } from "@/components/SearchBar";

import "./assets/main.css";

// Theme handler from vuetify
const theme = useTheme();
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
</script>

<template>
  <v-app>
    <main class="app-wrapper">
      <div class="app-controls">
        <SearchBar />
        <v-btn
          class="fill-height"
          @click="toggleTheme"
          >toggle theme</v-btn
        >
      </div>
      <CountriesList />
    </main>
    <DialogMap />
  </v-app>
</template>
