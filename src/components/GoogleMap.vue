<!-- src/components/GoogleMap.vue -->

<template>
  <div class="google-map" :id="mapName"></div>
</template>

<script lang="ts">
import Vue from "vue";
declare var google: any

export default Vue.extend({
  name: 'google-map',
  props: ['name'],
  data: function () {
    let markerArray:any[] = [];
    return {
      mapName: this.name + "-map",
      markerCoordinates: [{
        latitude: 51.501527,
        longitude: -0.1921837
      }, {
        latitude: 51.505874,
        longitude: -0.1838486
      }, {
        latitude: 51.4998973,
        longitude: -0.202432
      }],
      map: null,
      bounds: null,
      markers: markerArray
    }
  },
  mounted: function () {
    this.bounds = new google.maps.LatLngBounds();
    const element = document.getElementById(this.mapName)
    const mapCentre = this.markerCoordinates[0]
    const options = {
      center: new google.maps.LatLng(mapCentre.latitude, mapCentre.longitude)
    }
    this.map = new google.maps.Map(element, options);
    this.markerCoordinates.forEach((coord) => {
      const position = new google.maps.LatLng(coord.latitude, coord.longitude);
      const marker = new google.maps.Marker({
        position,
        map: this.map
      });
      this.markers.push(marker)
      this.map.fitBounds(this.bounds.extend(position))
    });
  }
});
</script>

<style scoped>
  .google-map {
    width: 800px;
    height: 600px;
    margin: 0 auto;
    background: gray;
  }
</style>
