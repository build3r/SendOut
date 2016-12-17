var App = (function() {
  'use strict';
  var $previewInstance;
  var current = -1;

  var init = function() {
    var $pins = $('.pins-container');

    $('.card, #close').on('click', function() {
      $('.reader-view').toggleClass( "hide" );
    });

    $pins.on('click', function() {
      var $el = $(this);
      current === $el.index() ? hidePreview() : showPreview( $el );
    });
  }

  var preview;
  var hidePreview = function() {
    current = -1;
    var preview = $previewInstance;
		preview.close();
		$previewInstance = null;
  }

  var showPreview = function($el) {
    var preview = $previewInstance;

    if (preview) {
      hidePreview();
    }

    $previewInstance = new PinDetails( $el );
    preview = $previewInstance;
		// expand preview overlay
		preview.show();

  }

  function PinDetails(parent) {
    this.$item = parent;
    this.visible = false
    this.index = this.$item.index()
    this.parent = parent;
    this.create(parent);
  }

  PinDetails.prototype = {
    show: function(){
      current = this.index;
    },

    close: function() {
      this.$previewEl.remove();
    },

    getEl: function() {
      return this.$previewEl;
    },

    create: function($item) {
      this.$previewInner = $('<span>Hello</span>');
      this.$previewEl = $('<div class="pin-details"></div>').append(this.$previewInner);
      $item.append(this.$previewEl);
    }
  }

  init();

  return {
    init: init
  }
})();
