AJS.$.namespace('Bamboo.Util.Mixins.Elements');

Bamboo.Util.Mixins.Elements = {

    getElement: function (name) {
        var item = this.elements[name];

        if (_.isUndefined(item)) {
            throw '"' + name + '" not found in elements';
        }

        if (_.isString(item)) {
            this.elements[name] = {
                selector: item,
                query: this.$el.find(item)
            };

            item = this.elements[name];
        }

        return item.query;
    },

    clearElementsCache: function () {
        _.each(_.keys(this.elements), _.bind(function (key) {
            var item = this.elements[key];

            if (!_.isString(item)) {
                this.elements[key] = item.selector;
            }
        }, this));
    },

    toggleContainer: function ($selector, show) {
        if (!_.isUndefined(show)) {
            return $selector.toggle(!!show);
        }
        else {
            return $selector.hide();
        }
    }

};