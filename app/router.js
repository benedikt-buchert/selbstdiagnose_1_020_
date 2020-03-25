import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('step', {path: ':id'});
  this.route('chatbot');
  this.route('datenschutz');
  this.route('faq');
  this.route('impressum');
  this.route('information');
});
