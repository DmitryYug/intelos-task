<script lang="ts">
import { useStore } from "effector-vue/composition";

import { CountryCard } from "@/components/CountryCard";
import { getCountriesListFx } from "@/store/events";
import { $countriesList, $countriesListLoading } from "@/store/store";

export default {
  components: { CountryCard },
  mounted() {
    getCountriesListFx();
  },
  setup() {
    const countriesList = useStore($countriesList);
    const countriesListLoading = useStore($countriesListLoading);

    return {
      countriesList,
      countriesListLoading,
    };
  },
};
</script>

<template>
  <div class="countries-list-wrapper">
    <div
      v-for="(country, ind) in countriesList"
      :key="country.name?.official + ind"
    >
      <CountryCard :country="country" />
    </div>
  </div>
</template>

<style scoped></style>
