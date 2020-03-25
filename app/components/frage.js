import Component from '@ember/component';
import { htmlSafe } from '@ember/template';

export default class FrageComponent extends Component {

    get body() {
        return htmlSafe(this.frage.body);
    }

    get additionalinfo() {
        return htmlSafe(this.frage.additionalinfo);
    }
}