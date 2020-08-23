<template>
  <span>
    <component
      v-for="(child, index) in childs"
      :key="index"
      :is="child.type"
      :config="child.config"
    ></component>
  </span>
</template>

<script>
import GSpan from "./GSpan";
import GBr from "./GBr";
import GTemplate from "./GTemplate";
import gMixin from "./gMixin";
export default {
  name: "Generator",
  components: { GSpan, GBr, GTemplate },
  mixins: [gMixin],
  props: {
    url: String
  },
  computed: {
    text() {
      return this.get_text_from_url(this.url);
    },
    childs() {
      var generator_text = this.text;
      var childs = [];
      var is_in_sub = false;
      var init_child = function() {
        return is_in_sub == false ? { config: ["span", ""] } : { config: [""] };
      };
      var close_child = function(child) {
        child["type"] = "g-" + child["config"][0];
        child["config"].splice(0, 1);
        childs.push(child);
      };
      var child = init_child();
      for (var char_i = 0; char_i < generator_text.length; char_i++) {
        var char = generator_text[char_i];
        // Escape
        if (char === "\\") {
          char_i++;
          char = generator_text[char_i];
          child["config"][child["config"].length - 1] += char;
          continue;
        }
        // End child
        if (char === "#") {
          close_child(child);
          is_in_sub = !is_in_sub;
          child = init_child();
          continue;
        }
        // Add child configuration argument
        if (char === ":") {
          child["config"].push("");
          continue;
        }
        child["config"][child["config"].length - 1] += char;
      }
      close_child(child);

      return childs;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
