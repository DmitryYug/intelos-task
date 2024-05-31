<script lang="ts">
import { useVModel } from "effector-vue/composition";

import { CountryCard } from "@/components/CountryCard";
import { getCountriesListFx } from "@/store/events";
import { $countriesList, $countriesListLoading } from "@/store/store";

export default {
  components: { CountryCard },
  mounted() {
    getCountriesListFx();
  },
  setup() {
    const countriesList = useVModel($countriesList);
    const countriesListLoading = useVModel($countriesListLoading);

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
