<script setup lang="ts">
import { useStore } from "effector-vue/composition";

import { countryCardWidth, noDataMessage } from "@/constants/constants";
import { setSelectedCountry } from "@/store/events";
import { $filteredCountriesListLoading } from "@/store/store";
import type { TCountry, TCurrency } from "@/store/types";

defineProps<{ country: TCountry }>();

const filteredCountriesListLoading = useStore($filteredCountriesListLoading);

// Concatenating the currency code and name if present
const getCurrencySubtitle = (currObj: TCurrency) => {
  if (currObj && Object.keys(currObj).length) {
    return Object.keys(currObj).map(key => `${key}: ${currObj[key].name}`)[0];
  }
  return noDataMessage;
};
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
    <v-card-item class="pa-0">
      <v-card-text>
        <v-list
          lines="one"
          class="d-flex"
        >
          <div>
            <v-list-item
              title="Capital"
              :subtitle="country.capital?.length ? country.capital[0] : noDataMessage"
            />
            <v-list-item
              title="Population"
              :subtitle="country.population"
            />
          </div>
          <div>
            <v-list-item
              title="Region"
              :subtitle="country.region"
            />
            <v-list-item
              title="Currency"
              :subtitle="getCurrencySubtitle(country.currencies)"
            />
          </div>
        </v-list>
      </v-card-text>
    </v-card-item>
  </v-card>
</template>
