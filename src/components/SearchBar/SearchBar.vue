<script lang="ts">
import { useStore } from "effector-vue/composition";

import { $countriesList, $countriesListLoading } from "@/store/store";

export default {
  setup() {
    const countriesList = useStore($countriesList);
    const countriesListLoading = useStore($countriesListLoading);

    return {
      countriesList,
      countriesListLoading,
    };
  },
  data: () => ({
    searchValue: "",
  }),
};
</script>

<template>
  <v-autocomplete
    v-model="searchValue"
    label="Autocomplete"
    :items="countriesList || []"
    item-title="name.official"
    clearable
    width="500"
    :disabled="countriesListLoading"
  />
</template>
