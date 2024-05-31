<script setup lang="ts">
import { GoogleMap, Marker } from "vue3-google-map";
import { useStore, useVModel } from "effector-vue/composition";

import { $dialogVisible, $selectedCountry } from "@/store/store";

const dialogVisible = useVModel($dialogVisible);
const selectedCountry = useStore($selectedCountry);
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
</script>

<template>
  <v-dialog
    v-model="dialogVisible"
    max-width="70vw"
  >
    <template v-slot:default="{ isActive }">
      <v-card :title="selectedCountry?.name.official">
        <GoogleMap
          :api-key="googleMapsApiKey"
          style="width: 80%; height: 500px; margin: 0 auto"
          :center="{ lat: selectedCountry?.latlng[0], lng: selectedCountry?.latlng[1] }"
          :zoom="7"
        >
          <Marker :options="{ position: { lat: selectedCountry?.latlng[0], lng: selectedCountry?.latlng[1] } }" />
        </GoogleMap>

        <v-card-actions>
          <v-btn
            text="Close Dialog"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped></style>
