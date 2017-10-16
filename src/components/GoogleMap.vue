<template>
  <div class="googleMap">
    <div>map sample ! </div>
    <gmap-map
      :center="{lat:10, lng: 10}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <gmap-marker
        :key="1"
        :position="{lat:10, lng: 10}"
        :clickable="true"
        :draggable="true"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
  export default {
    name: 'GoogleMap'
  }
</script>

<style>

</style>
