import RESTAdapter from '@ember-data/adapter/rest';
import { pluralize } from 'ember-inflector';

export default RESTAdapter.extend({
    pathForType: function(modelName) {
        let pluralized = pluralize(modelName)
        let jsonified = pluralized + '.json'
        return jsonified;
    }
});
