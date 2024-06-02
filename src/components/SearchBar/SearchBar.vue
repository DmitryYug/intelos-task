<script setup lang="ts">
import { ref, watch } from "vue";
import { useStore } from "effector-vue/composition";

import closeIcon from "@/assets/svg/closeIcon.svg";
import searchIcon from "@/assets/svg/searchIcon.svg";
import { getCountriesListFilteredFx, setInitialCountiesList } from "@/store/events";
import { $countriesListLoading, $filteredCountriesListLoading } from "@/store/store";
import { debounce } from "@/utils/debounce";

const countriesListLoading = useStore($countriesListLoading);
const filteredCountriesListLoading = useStore($filteredCountriesListLoading);
const searchValue = ref("");

watch(
  searchValue,
  debounce((value: string) => {
    value ? getCountriesListFilteredFx(value) : setInitialCountiesList();
  }, 300)
);
</script>

<template>
  <v-text-field
    variant="solo"
    v-model="searchValue"
    label="Search"
    hide-details="auto"
    placeholder="start typing to search..."
    :disabled="countriesListLoading || filteredCountriesListLoading"
    :loading="filteredCountriesListLoading"
  >
    <template v-slot:prepend-inner>
      <img
        class="icon-s"
        :src="searchIcon"
        alt="search icon"
      />
    </template>
    <template
      v-slot:append-inner
      v-if="!!searchValue"
    >
      <img
        @click="searchValue = ''"
        class="icon-s cursor-pointer"
        :src="closeIcon"
        alt="search icon"
      />
    </template>
  </v-text-field>
</template>
