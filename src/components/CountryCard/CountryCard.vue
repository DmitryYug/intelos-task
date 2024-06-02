<script setup lang="ts">
import { useStore } from "effector-vue/composition";

import { countryCardWidth, noDataMessage } from "@/constants/constants";
import { setSelectedCountry } from "@/store/events";
import { $filteredCountriesListLoading } from "@/store/store";
import type { TCountry } from "@/store/types";

import CountryInfo from "./CountryInfo.vue";

defineProps<{ country: TCountry }>();

const filteredCountriesListLoading = useStore($filteredCountriesListLoading);
</script>

<template>
  <v-card
    class="mx-auto"
    hover
    @click="setSelectedCountry(country)"
    :title="country.name?.official || noDataMessage"
    :width="countryCardWidth"
    :append-avatar="country.flags.png"
    :disabled="filteredCountriesListLoading"
  >
    <CountryInfo :country="country" />
  </v-card>
</template>
