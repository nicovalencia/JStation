require([

  'underscore',
  'backbone',

  'views/layout',

  'components/toolbar',
  'components/example'

], function( _, Backbone, LayoutView, Toolbar, Example ){

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

    // components
    app.toolbar = new Toolbar();
    app.example = new Example();
  };

  window.JStation = app;
  $(document).ready(Init);

});
