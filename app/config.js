require.config({

  deps: ["main"],

  paths: {
    handlebars: "lib/handlebars",
    templates: "lib/templates",
    underscore: "lib/underscore",
    backbone: "lib/backbone"
  },

  shim: {
    handlebars: {
      exports: "Handlebars"
    },

    templates: {
      exports: "JST",
      deps: ["handlebars"]
    },

    underscore: {
      exports: "_"
    },

    backbone: {
      exports: "Backbone",
      deps: ["underscore"]
    }
  }

});

