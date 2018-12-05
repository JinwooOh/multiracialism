const imageInfo = {
  father: [
    'fatherafrican',
    'fatherangloSaxon',
    'fatherchinese',
    'fatherhispanic',
    'fatheritalian',
    'fathermiddleEastern',
    'fathervietnamese',
  ],
  mother: [
    'motherafrican',
    'motherangloSaxon',
    'motherchinese',
    'motherhispanic',
    'motheritalian',
    'mothermiddleEastern',
    'mothervietnamese',
  ],
  child: {
    middleEasternmiddleEastern: {
      father: ['middleEastern', './fathermiddleEastern'],
      mother: ['middleEastern', './mothermiddleEastern'],
    },
    middleEasternitalian: {
      father: ['middleEastern', './fathermiddleEastern'],
      mother: ['italian', './motheritalian'],
    },
    middleEasternafrican: {
      father: ['middleEastern', './fathermiddleEastern'],
      mother: ['african', './motherafrican'],
    },
    middleEasternvietnamese: {
      father: ['middleEastern', './fathermiddleEastern'],
      mother: ['vietnamese', './mothervietnamese'],
    },
    middleEasternangloSaxon: {
      father: ['middleEastern', './fathermiddleEastern'],
      mother: ['angloSaxon', './motherangloSaxon'],
    },
    middleEasternchinese: {
      father: ['middleEastern', './fathermiddleEastern'],
      mother: ['chinese', './motherchinese'],
    },
    middleEasternhispanic: {
      father: ['middleEastern', './fathermiddleEastern'],
      mother: ['hispanic', './motherhispanic'],
    },
    italianmiddleEastern: {
      father: ['italian', './fatheritalian'],
      mother: ['middleEastern', './mothermiddleEastern'],
    },
    italianitalian: {
      father: ['italian', './fatherItalian'],
      mother: ['italian', './motherItalian'],
    },
    italianafrican: {
      father: ['italian', './fatheritalian'],
      mother: ['african', './motherafrican'],
    },
    italianvietnamese: {
      father: ['italian', './fatheritalian'],
      mother: ['vietnamese', './mothervietnamese'],
    },
    italianangloSaxon: {
      father: ['italian', './fatheritalian'],
      mother: ['angloSaxon', './motherangloSaxon'],
    },
    italianchinese: {
      father: ['italian', './fatheritalian'],
      mother: ['chinese', './motherchinese'],
    },
    italianhispanic: {
      father: ['italian', './fatheritalian'],
      mother: ['hispanic', './motherhispanic'],
    },
    africanmiddleEastern: {
      father: ['african', './fatherafrican'],
      mother: ['middleEastern', './mothermiddleEastern'],
    },
    africanitalian: {
      father: ['african', './fatherafrican'],
      mother: ['italian', './motheritalian'],
    },
    africanafrican: {
      father: ['african', './fatherafrican'],
      mother: ['african', './motherafrican'],
    },
    africanvietnamese: {
      father: ['african', './fatherafrican'],
      mother: ['vietnamese', './mothervietnamese'],
    },
    africanangloSaxon: {
      father: ['african', './fatherafrican'],
      mother: ['angloSaxon', './motherangloSaxon'],
    },
    africanchinese: {
      father: ['african', './fatherafrican'],
      mother: ['chinese', './motherchinese'],
    },
    africanhispanic: {
      father: ['african', './fatherafrican'],
      mother: ['hispanic', './motherhispanic'],
    },
  },
};

export default imageInfo;

// middleEastern
// italian
// african
// vietnamese
// angloSaxon
// chinese
// hispanic

// child naming
// father mother
