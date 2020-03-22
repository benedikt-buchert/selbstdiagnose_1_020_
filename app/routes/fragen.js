import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class FrageRoute extends Route {
    async model () {
      const response = await fetch('/fragen.json');
      const fragen = await response.json();

      console.log(fragen);
      return fragen;

    }
}
