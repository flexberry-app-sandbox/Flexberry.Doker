import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-doker-город-l');
  this.route('i-i-s-doker-город-e',
  { path: 'i-i-s-doker-город-e/:id' });
  this.route('i-i-s-doker-город-e.new',
  { path: 'i-i-s-doker-город-e/new' });
  this.route('i-i-s-doker-здание-l');
  this.route('i-i-s-doker-здание-e',
  { path: 'i-i-s-doker-здание-e/:id' });
  this.route('i-i-s-doker-здание-e.new',
  { path: 'i-i-s-doker-здание-e/new' });
});

export default Router;
