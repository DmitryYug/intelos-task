<script lang="ts">
import { useStore } from "effector-vue/composition";

import { getCountriesListFilteredFx, getCountriesListFx } from "@/store/events";
import { $countriesList, $countriesListLoading } from "@/store/store";
import { debounce } from "@/utils/debounce";

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
  watch: {
    searchValue: debounce(function (value: string) {
      value ? getCountriesListFilteredFx(value) : getCountriesListFx();
    }, 500),
  },
};
</script>

<template>
  <v-text-field
    v-model="searchValue"
    hide-details="auto"
    label="Search"
    placeholder="start typing to search..."
  />
</template>
