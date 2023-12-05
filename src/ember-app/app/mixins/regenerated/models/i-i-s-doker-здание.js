import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрем: DS.attr('string'),
  этажи: DS.attr('number'),
  город: DS.belongsTo('i-i-s-doker-город', { inverse: null, async: false })
});

export let ValidationRules = {
  адрем: {
    descriptionKey: 'models.i-i-s-doker-здание.validations.адрем.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  этажи: {
    descriptionKey: 'models.i-i-s-doker-здание.validations.этажи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  город: {
    descriptionKey: 'models.i-i-s-doker-здание.validations.город.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗданиеE', 'i-i-s-doker-здание', {
    адрем: attr('Адрем', { index: 0 }),
    этажи: attr('Этажи', { index: 1 }),
    город: belongsTo('i-i-s-doker-город', 'Город', {
      имя: attr('Имя', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'имя' })
  });

  modelClass.defineProjection('ЗданиеL', 'i-i-s-doker-здание', {
    адрем: attr('Адрем', { index: 0 }),
    этажи: attr('Этажи', { index: 1 }),
    город: belongsTo('i-i-s-doker-город', 'Имя', {
      имя: attr('Имя', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
