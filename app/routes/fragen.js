import Route from '@ember/routing/route';

export default class FrageRoute extends Route {
    async model () {
        return {
            id: 1,
            titel: "Testfrage"
        }
    }
}
