import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISDokerГородLForm from './forms/i-i-s-doker-город-l';
import IISDokerЗданиеLForm from './forms/i-i-s-doker-здание-l';
import IISDokerГородEForm from './forms/i-i-s-doker-город-e';
import IISDokerЗданиеEForm from './forms/i-i-s-doker-здание-e';
import IISDokerГородModel from './models/i-i-s-doker-город';
import IISDokerЗданиеModel from './models/i-i-s-doker-здание';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-doker-город': IISDokerГородModel,
    'i-i-s-doker-здание': IISDokerЗданиеModel
  },

  'application-name': 'Doker',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Doker',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Doker',
          title: 'Doker'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        doker: {
          caption: 'Doker',
          title: 'Doker',
          'i-i-s-doker-здание-l': {
            caption: 'Здание',
            title: ''
          },
          'i-i-s-doker-город-l': {
            caption: 'Город',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-doker-город-l': IISDokerГородLForm,
    'i-i-s-doker-здание-l': IISDokerЗданиеLForm,
    'i-i-s-doker-город-e': IISDokerГородEForm,
    'i-i-s-doker-здание-e': IISDokerЗданиеEForm
  },

});

export default translations;
