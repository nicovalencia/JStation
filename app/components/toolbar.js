define([

  'support/thing'

], function( Thing ){

  var Toolbar = Thing.extend({

    className: 'thing',

    layout: 'default',

    grid: {
      width: 6,
      height: 3
    },

    initialize: function() {
      this.render('<p>Toolbar content.</p>');
    }

  });

  return Toolbar;

});
