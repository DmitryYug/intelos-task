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
    label="Search for a country"
    :items="countriesList || []"
    item-title="name.official"
    clearable
    outlined
    width="500"
    :disabled="countriesListLoading"
  >
    <!--    <template v-slot:item="{ props, item }">-->
    <!--      <v-list-item-->
    <!--        v-bind="props"-->
    <!--        :prepend-avatar="item.raw.flags.png"-->
    <!--        :title="item.raw.name.official"-->
    <!--      />-->
    <!--    </template>-->
  </v-autocomplete>
</template>
