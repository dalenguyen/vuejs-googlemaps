import Vue from "vue";
import GoogleMapComponent from "./components/GoogleMap.vue";

let v = new Vue({
    el: "#app",
    template: `
        <div>
          <h1>VueJS GooleMap Component</h1>
          <google-map-component name="example" />
        </div>
    `,
    data: { },
    components: {
        GoogleMapComponent
    }
});
