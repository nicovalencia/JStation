define([

   'templates'

], function( Templates ){

  var api = {

    defaults: {
      x: 10,
      y: 10,
      width: 200,
      height:100
    },

    themes: {
      "default": Templates["app/templates/themes/default.hbs"]
    },

    render: function(options) {
      this.updateMarkup(options);
      this.updateDOM();
    },

    updateMarkup: function(o) {
      var markup = this.themes[this.theme](o.html);

      this.$el.html(markup);
      this.$el.css({
        top: o.x || this.defaults.x,
        left: o.y || this.defaults.y,
        width: o.width || this.defaults.width,
        height: o.height || this.defaults.height
      });
    },

    updateDOM: function() {
      var $body = $('body');
      var $thing = this.$el;

      if ( !$body.find($thing).length ) {
        $thing.hide();
        $body.append($thing);
        $thing.fadeIn('slow');
      }
    }

  };

  var Thing = {

    extend: function(options) {
      var options = _.extend(api, options);
      return Backbone.View.extend(options);
    }

  };

  return Thing;

});
