define([

   'templates'

], function( Templates ){

  var api = {

    isNew: true,

    themes: {
      "default": Templates["app/templates/themes/default.hbs"]
    },

    render: function(html) {
      this.updateMarkup(html);

      if ( this.isNew ) {
        this.setPosition();
        this.addToDOM();
        this.isNew = false;
      }
    },

    updateMarkup: function(html) {
      var markup = this.themes[this.theme]({html: html});
      this.$el.html(markup);
    },

    setPosition: function() {
      this.$el.css({
        top: 100,
        left: 100,
        width: this.grid.width * 100,
        height: this.grid.height * 100
      });
    },

    addToDOM: function() {
      var $body = $('body');
      var $thing = this.$el;

      $thing.hide();
      $body.append($thing);
      $thing.fadeIn('slow');
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
