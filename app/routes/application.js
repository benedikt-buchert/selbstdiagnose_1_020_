import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
    async model () {
        const response = await fetch('/fragen.json');
        const fragen = await response.json();
        return fragen;

    }
}
