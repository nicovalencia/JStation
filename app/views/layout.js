define([

  'handlebars',
  'templates',
  'backbone'

],function( Handlebars, Templates, Backbone ){

  var LayoutView = Backbone.View.extend({

    el: 'body',

    template: Templates["app/templates/layout.hbs"],

    initialize: function() {
      this.render();
    },

    events: {

    },

    render: function() {
      var markup = this.template({
        title: "JStation"
      });

      this.$el.html(markup);
    }

  });

  return LayoutView;

});
