define([

   'templates'

], function( Templates ){

  var api = {

    isNew: true,

    layouts: {
      "default": Templates["app/templates/layouts/default.hbs"]
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
      var markup = this.layouts[this.layout]({html: html});
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

      $body.append($thing);

      //@todo: abstract css3 transition triggers
      setTimeout(function() {
        $thing.addClass('show')
      }, 1);
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
