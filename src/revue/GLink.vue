<template>
  <router-link :name="name" , :params="computed_params"
    ><slot></slot
  ></router-link>
</template>

<script>
export default {
  name: "g-link",
  props: ["template", "params", "id"],
  computed: {
    computed_params() {
      if (this.params === undefined && this.id === undefined) return;
      var params = this.params || {};
      var id = this.id ? { id: this.id } : {};
      return Object.assign({}, params, id);
    },
    to() {
      if (this.template === undefined) {
        return "revue";
      } else if (this.computed_params === undefined) {
        return "revue_template";
      } else return "revue_template_with_params";
    }
  }
};
</script>
