import Vue from 'vue';
import Vuex from 'vuex';

import SingInStore from '../views/SingIn/store/store';
import SingUpStore from '../views/SingUp/store/store';
import StatesStore from '../views/States/store/store';
import CitiesStore from '../views/Cities/store/store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    SingInStore,
    SingUpStore,
    StatesStore,
    CitiesStore
  }
});
