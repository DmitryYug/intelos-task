<script setup lang="ts">
import { GoogleMap, Marker } from "vue3-google-map";
import { useStore, useVModel } from "effector-vue/composition";

import closeIcon from "@/assets/svg/closeIcon.svg";
import { $dialogVisible, $selectedCountry } from "@/store/store";

const dialogVisible = useVModel($dialogVisible);
const selectedCountry = useStore($selectedCountry);
const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
</script>

<template>
  <v-dialog
    v-model="dialogVisible"
    max-width="70vw"
    height="90vh"
  >
    <template v-slot:default="{ isActive }">
      <v-card>
        <v-card-title class="d-flex justify-space-between">
          <span>{{ selectedCountry?.name.official }}</span>
          <v-btn
            variant="text"
            @click="isActive.value = false"
          >
            <template v-slot:default>
              <img
                class="icon-s"
                :src="closeIcon"
                alt="close icon"
              />
            </template>
          </v-btn>
        </v-card-title>

        <GoogleMap
          class="map-container"
          :api-key="googleMapsApiKey"
          :center="{ lat: selectedCountry?.latlng[0], lng: selectedCountry?.latlng[1] }"
          :zoom="7"
        >
          <Marker :options="{ position: { lat: selectedCountry?.latlng[0], lng: selectedCountry?.latlng[1] } }" />
        </GoogleMap>

        <v-card-actions>
          <v-btn
            variant="elevated"
            text="Close Dialog"
            @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped></style>
