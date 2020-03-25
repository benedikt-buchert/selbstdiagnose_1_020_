import Component from '@ember/component';
import { htmlSafe } from '@ember/template';
import { tracked } from "@glimmer/tracking";

export default class FrageComponent extends Component {
    @tracked frage;

    get body() {
        console.log(this)
        return htmlSafe(this.frage.body);
    }

    get additionalinfo() {
        return htmlSafe(this.frage.additionalinfo);
    }
}