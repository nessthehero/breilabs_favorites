(function ($, document) {

    'use strict';

    if (!$.breilabs) {
        $.breilabs = {};
    }

    $.breilabs.favorites = function (el, options) {

        'use strict';

        // To avoid scope issues, use 'base' instead of 'this' to reference this class from internal events and functions.
        var base = this;

        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;

        base.$selector = null;

        // variables
        base.apiUrl = 'getjsondata.ashx?id=28';
        base.favorites = [];
        base.btnActiveClass = '.is-favorite';

        // Add a reverse reference to the DOM object
        base.$el.data('breilabs.favorites', base);

        /**
         */
        base.init = function () {

            console.log('init')

            base.options = $.extend({}, $.breilabs.favorites.defaultOptions, options);
            base.$selector = $(base.options.selector, base.el).on(base.options.event, base.selectorOnHandler);

        };

        /**
         * will add a favorite and set the button's class
         */
        base.addFavorite = function (id) {

            console.log('base.addFavorite: ' + id);

        };

        /**
         * will remove a favorite and set the button's class
         */
        base.removeFavorite = function (id) {

            console.log('base.removeFavorite: ' + id);

        };

        base.loadFavorites = function () {

            console.log('base.loadFavorites: ' + id);

            // load the favorites and cache them in the array

        };

        /**
         * Accepts an id and returns if the favorite exists or not
         */
        base.isFavorite = function (id) {

            console.log('base.isFavorite: ' + id);

            var isFavorite = false;

            for (var i = 0; i < base.favorites.length; i++) {
                var favId = base.favorites[i];
                if (favId === id) {
                    isFavorite = true;
                    return isFavorite;
                }
            }

            return isFavorite;

        };

        base.init();


        //
        // Public Functions
        //

    };

    $.breilabs.favorites.defaultOptions = {
        selector: '.brei-has-dropdown'
    };

    $.fn.breilabs_favorites = function (options) {
        return this.each(function () {
            (new $.breilabs.favorites(this, options));
        });
    };

})(jQuery, window.document);
