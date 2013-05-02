define([

  'templates',

  'support/thing'

], function( Templates, Thing ){

  var Example = Thing.extend({

    className: 'thing',

    layout: 'default',

    grid: {
      width: 6,
      height: 3
    },

    initialize: function() {
      var markup = Templates["app/templates/components/example.hbs"]();
      this.render(markup);
    }

  });

  return Example;

});
