<template>
  <div class="g-pass">
    <div class="g-pass" v-if="Array.isArray(data_)">
      <g-revue
        v-for="(item, index) in data_"
        :template-url="templateUrl"
        :key="index"
        :data="item"
      ></g-revue>
    </div>
    <g-revue v-else :template-url="templateUrl" :data="data_"></g-revue>
  </div>
</template>

<script>
import gMixin from "./gMixin";
export default {
  name: "g-render",
  mixins: [gMixin],
  components: {
    GRevue: () => import("./GRevue")
  },
  computed: {
    templateUrl() {
      return this.get_attr("template-url");
    },
    data_() {
      var data_ = this.get_data_from_url(this.get_attr("data-url"));
      if (Array.isArray(data_)) {
        data_ = data_.map(d => {
          d = Object.assign({}, this.data, d);
          return d;
        });
      }
      else data_ = Object.assign({}, this.data, data_);
      return data_;
    }
  }
};
</script>
