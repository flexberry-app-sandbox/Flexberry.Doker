import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Doker',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Doker',
          title: 'Doker'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-doker-город-l': IISDokerГородLForm,
    'i-i-s-doker-здание-l': IISDokerЗданиеLForm,
    'i-i-s-doker-город-e': IISDokerГородEForm,
    'i-i-s-doker-здание-e': IISDokerЗданиеEForm
  },

});

export default translations;
