import Route from '@ember/routing/route';

export default class FrageRoute extends Route {
    model(params) {
        let fragen = this.modelFor('application');
        let id = params.id;
        let frage = fragen.find(obj => {
          return obj.id == id;
        });
        return frage;
      }
}
