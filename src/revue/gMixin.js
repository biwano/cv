export default {
  props: {
    parentUrl: String,
    templateUrl: String,
    dataUrl: String,
    data: Object,
    ListIndex: String,
    reload_trigger: Object
  },
  asyncComputed: {
    component() {
      var component = this.reload_trigger;
      component = this.g_component(this.templateUrl);
      return component;
    },
    data_from_url() {
      var data = this.dataUrl ? this.g_url(this.dataUrl).fetch_data() : {};
      return data;
    },
    data_from_props() {
      return this.data ? this.data : {};
    }
  }
};
