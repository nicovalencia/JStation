require.config({

  deps: ["main"],

  paths: {
    underscore: "lib/underscore",
    backbone: "lib/backbone",
  },

  shim: {
    underscore: {
      exports: "_"
    },

    backbone: {
      exports: "Backbone",
      deps: ["underscore"]
    }
  }

});

