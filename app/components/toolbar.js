define([

  'support/thing'

], function( Thing ){

  var Toolbar = Thing.extend({

    className: 'thing',

    theme: 'default',

    initialize: function() {
      console.log('---> Toolbar Initialized!');
      this.render({
        x:300,
        y:200,
        width:350,
        height:200
      });
    }

  });

  return Toolbar;

});
