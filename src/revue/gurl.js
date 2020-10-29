var get_root_key = function(str) {
  if (str) {
    var i = str.indexOf(".");
    if (i >= 0) return str.slice(0, i);
    else return str;
  }
};
var get_root_key_rest = function(str) {
  if (str) {
    var i = str.indexOf(".");
    if (i >= 0) return str.slice(i + 1);
  }
};
// path: <root_key>.<root_key_rest>
var traverse = function(data, path) {
  var key = get_root_key(path);
  var res = undefined;
  // path starved
  if (key === undefined) res = data;
  // Array: ignore
  else if (Array.isArray(data)) {
    res = undefined;
  }
  // Object: travers
  else if (typeof data === "object") {
    if (data[key]) {
      res = traverse(data[key], get_root_key_rest(key));
    }
    return res;
  } else res = data;
  // Other
  return res;
};
// url: <store>://<path>(::<subpath>)
var Gurl = function(options, gurl) {
  var regexp_without_sub = /((.*)(?=:\/\/):\/\/(.+))/;
  var regexp_with_sub = /((.*)(?=:\/\/):\/\/(.+))(?=::)::(.+)/;
  var match = gurl.match(regexp_with_sub);
  if (match == null) match = gurl.match(regexp_without_sub);
  var raw = match[1];
  var store = match[2];
  var key = match[3];
  var subpath = match.length > 3 ? match[4] : undefined;
  return {
    raw,
    store,
    key,
    subpath,
    // fetch raw data
    async fetch() {
      var data;
      var func = options["stores"][this.store];
      if (func) {
        data = await func(this.key);
        if (data) {
          if (this.subpath) {
            data = traverse(data, this.subpath);
            if (data === undefined)
              console.warn(
                `[WARN] FETCH - No subpath '${this.subpath}' - url=${this.raw}`
              );
          }
        } else
          console.warn(`[WARN] FETCH - No key '${this.key}' - url=${this.raw}`);
      } else {
        console.warn(`[WARN] FETCH - No Store '${this.store}' - url=${this.raw}`);
        return;
      }
      // success
      if (data !== undefined)
        console.debug(`[DEBUG] FETCH - '${this.raw}'`, data);
      return data;
    },
    // inject more data into a data object 
    async enrich(data) {
      if (data) {
        for (var i in data) {
          var item = data[i];
          // String with injection point: inject
          if (
            (typeof item === "string" || item instanceof String) &&
            item.startsWith("inject:")
          ) {
            var url = item.slice(item.indexOf(":") + 1)
            item = await Gurl(options, url).fetch_data();
          }
          // Object: enrich recursively
          if (typeof item === "object") {
            this.enrich(item);
          }
          data[i] = item;
        }
      }
      return data;
    },
    async fetch_data() {
      var data = await this.fetch();
      data = await this.enrich(data);
      return data ? data : {};
    }
  };
}
export default Gurl;