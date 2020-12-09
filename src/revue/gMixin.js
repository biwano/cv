export default {
  props: {
    parentUrl: String,
    templateUrl: String,
    dataUrl: String,
    data: Object,
    metadata: Object,
    ListIndex: String,
    reload_trigger: Object
  },
  watch: {
    templateUrl() {
      console.log("ae");
    }
  },
  asyncComputed: {
    component() {
      var component = this.reload_trigger;
      component = this.g_component(this.templateUrl);
      return component;
    },
    // Helper to  fetch data from URL
    data_from_url() {
      var data = this.dataUrl ? this.g_url(this.dataUrl).fetch_data() : {};
      return data;
    },
    // Helper to fetch data from props (hard coded or parent)
    data_from_props() {
      return this.data ? this.data : {};
    }
  }
};
