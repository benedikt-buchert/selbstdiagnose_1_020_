import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('fragen', function() {
    // TODO: Replace Dynamic ID once We have Data https://guides.emberjs.com/release/routing/defining-your-routes/#toc_dynamic-segments
    this.route('frage', {path: '1'});
  });
});
