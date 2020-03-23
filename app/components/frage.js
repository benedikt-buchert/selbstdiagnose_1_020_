import Component from '@ember/component';
import { htmlSafe } from '@ember/template';

export default Component.extend({
    get body() {
        return htmlSafe(this.frage.body);
    },

    get additionalinfo() {
        return htmlSafe(this.frage.additionalinfo);
    }
});
