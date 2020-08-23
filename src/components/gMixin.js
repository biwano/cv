export default {
  props: {
    config: {
      type: Array,
      default: () => {return []}
    }
  },
  methods: {
    get_config(index) {
      return this.config.length > index ? this.config[index] : "";
    },
    get_config_as_number(index) {
      return parseFloat(this.get_config(index));
    },
    get_text_from_url(url) {
      var pos = url.lastIndexOf("@");
      var generator_path = url.substring(0, pos);
      var generator_store = url.substring(pos + 1, url.length);
      var text;
      if (generator_store == "config") {
        var generators = this.$store.getters.generators;
        text = generators[generator_path];
      } else if (generator_store == "raw") {
        text = generator_path;
      } else {
        text = `Generator store not found; url=${url}`;
      }
      // list
      if (typeof text !== "string") {
        text = text.join("");
      }
      // not found
      if (text === undefined)
        text = `No key ${generator_path} in generator store ${generator_store}; url=${url}`;

      return text;
    }
  }
};
