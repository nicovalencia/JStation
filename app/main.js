require([

  'underscore',
  'backbone',

  'views/layout'

], function( _, Backbone, LayoutView ){

  var app = {};

  /**
   * app.config
   * [Object] for application configuration.
   */


  // private


  function Init() {
    if ( typeof console !== "undefined" ) console.log('---> Application initialized.');
    app.layout = new LayoutView();
  };

  window.app = app;
  $(document).ready(Init);

});
