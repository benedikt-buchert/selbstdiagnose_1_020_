import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class FrageRoute extends Route {
    model(params) {
        let fragen = this.modelFor('application');
        let id = params.id;
        return fragen[id];
      }

}
