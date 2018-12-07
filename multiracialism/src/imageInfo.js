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
    vietnamesemiddleEastern: {
      father: ['vietnamese', './fathervietnamese'],
      mother: ['middleEastern', './mothermiddleEastern'],
    },
    vietnameseitalian: {
      father: ['vietnamese', './fathervietnamese'],
      mother: ['italian', './motheritalian'],
    },
    vietnameseafrican: {
      father: ['vietnamese', './fathervietnamese'],
      mother: ['african', './motherafrican'],
    },
    vietnamesevietnamese: {
      father: ['vietnamese', './fathervietnamese'],
      mother: ['vietnamese', './mothervietnamese'],
    },
    vietnameseangloSaxon: {
      father: ['vietnamese', './fathervietnamese'],
      mother: ['angloSaxon', './motherangloSaxon'],
    },
    vietnamesechinese: {
      father: ['vietnamese', './fathervietnamese'],
      mother: ['chinese', './motherchinese'],
    },
    vietnamesehispanic: {
      father: ['vietnamese', './fathervietnamese'],
      mother: ['hispanic', './motherhispanic'],
    },
    angloSaxonmiddleEastern: {
      father: ['angloSaxon', './fatherangloSaxon'],
      mother: ['middleEastern', './mothermiddleEastern'],
    },
    angloSaxonitalian: {
      father: ['angloSaxon', './fatherangloSaxon'],
      mother: ['italian', './motheritalian'],
    },
    angloSaxonafrican: {
      father: ['angloSaxon', './fatherangloSaxon'],
      mother: ['african', './motherafrican'],
    },
    angloSaxonvietnamese: {
      father: ['angloSaxon', './fatherangloSaxon'],
      mother: ['vietnamese', './mothervietnamese'],
    },
    angloSaxonangloSaxon: {
      father: ['angloSaxon', './fatherangloSaxon'],
      mother: ['angloSaxon', './motherangloSaxon'],
    },
    angloSaxonchinese: {
      father: ['angloSaxon', './fatherangloSaxon'],
      mother: ['chinese', './motherchinese'],
    },
    angloSaxonhispanic: {
      father: ['angloSaxon', './fatherangloSaxon'],
      mother: ['hispanic', './motherhispanic'],
    },
    chinesemiddleEastern: {
      father: ['chinese', './fatherchinese'],
      mother: ['middleEastern', './mothermiddleEastern'],
    },
    chineseitalian: {
      father: ['chinese', './fatherchinese'],
      mother: ['italian', './motheritalian'],
    },
    chineseafrican: {
      father: ['chinese', './fatherchinese'],
      mother: ['african', './motherafrican'],
    },
    chinesevietnamese: {
      father: ['chinese', './fatherchinese'],
      mother: ['vietnamese', './mothervietnamese'],
    },
    chineseangloSaxon: {
      father: ['chinese', './fatherchinese'],
      mother: ['angloSaxon', './motherangloSaxon'],
    },
    chinesechinese: {
      father: ['chinese', './fatherchinese'],
      mother: ['chinese', './motherchinese'],
    },
    chinesehispanic: {
      father: ['chinese', './fatherchinese'],
      mother: ['hispanic', './motherhispanic'],
    },
    hispanicmiddleEastern: {
      father: ['hispanic', './fatherhispanic'],
      mother: ['middleEastern', './mothermiddleEastern'],
    },
    hispanicitalian: {
      father: ['hispanic', './fatherhispanic'],
      mother: ['italian', './motheritalian'],
    },
    hispanicafrican: {
      father: ['hispanic', './fatherhispanic'],
      mother: ['african', './motherafrican'],
    },
    hispanicvietnamese: {
      father: ['hispanic', './fatherhispanic'],
      mother: ['vietnamese', './mothervietnamese'],
    },
    hispanicangloSaxon: {
      father: ['hispanic', './fatherhispanic'],
      mother: ['angloSaxon', './motherangloSaxon'],
    },
    hispanicchinese: {
      father: ['hispanic', './fatherhispanic'],
      mother: ['chinese', './motherchinese'],
    },
    hispanichispanic: {
      father: ['hispanic', './fatherhispanic'],
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
