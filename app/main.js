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
  app.config = {

  };

  /**
   * app.layout
   * [Backbone View Object] main application view.
   */


  // private


  function Init() {
    app.layout = new LayoutView();
  };

  window.app = app;
  $(document).ready(Init);

});
