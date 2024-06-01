<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useStore } from "effector-vue/composition";

import searchIcon from "@/assets/svg/searchIcon.svg";
import { CountryCard } from "@/components/CountryCard";
import { countryCardWidth } from "@/constants/constants";
import { getCountriesListFx } from "@/store/events";
import { $countriesList, $countriesListLoading, $filteredCountriesList, $noResults } from "@/store/store";

onMounted(() => {
  getCountriesListFx();
});

const countriesList = useStore($countriesList);
const filteredCountriesList = useStore($filteredCountriesList);
const countriesListLoading = useStore($countriesListLoading);
const noData = useStore($noResults);
const currentCountriesList = computed(() => filteredCountriesList.value ?? countriesList.value);
</script>

<template>
  <div v-if="noData">
    <v-empty-state
      :image="searchIcon"
      title="Oops! No results found."
    />
  </div>
  <div
    v-if="countriesListLoading"
    class="countries-list-wrapper"
  >
    <v-skeleton-loader
      v-for="n in 20"
      :key="n"
      :width="countryCardWidth"
      type="image"
      :elevation="5"
    />
  </div>
  <div
    v-if="!noData && !countriesListLoading"
    class="countries-list-wrapper"
  >
    <div
      v-for="(country, ind) in currentCountriesList"
      :key="country.name?.official + ind"
    >
      <CountryCard :country="country" />
    </div>
  </div>
</template>

<style scoped></style>
