import de from './assets/i18n/de'
import en from './assets/i18n/en'
import es from './assets/i18n/es'
import it from './assets/i18n/it'
import jp from './assets/i18n/jp'
import nl from './assets/i18n/nl'
import pt from './assets/i18n/pt'

import VueI18n from 'vue-i18n'
import Vue from 'vue'

Vue.use(VueI18n)

export default new VueI18n({
    locale: localStorage.getItem('lang') || 'pt-br',
    messages: {
        de: de,
        en: en,
        es: es,
        it: it,
        jp: jp,
        nl: nl,
        pt: pt
    }
})