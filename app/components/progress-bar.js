import Component from '@glimmer/component';

export default class ProgressBarComponent extends Component {

    get progresspercent() {
        let percent = this.args.progress * 100;
        return percent + "%";
    }

}
