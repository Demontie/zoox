<template>
  <b-form @submit.stop.prevent :novalidate="true">
    <b-form-group label="Nome">
      <b-form-input
        id="name"
        name="name"
        v-model="$v.form.name.$model"
        :state="validateState('name')"
      >
      </b-form-input>

      <b-form-invalid-feedback>Nome obrigatório.</b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="Estados">
      <b-form-select
        placeholder="teste"
        name="state_id"
        value-field="id"
        text-field="name"
        v-model="$v.form.state_id.$model"
        :options="options"
        :state="validateState('state_id')"
      >
        <template #first>
          <b-form-select-option :value="null" disabled>Selecione um Estado</b-form-select-option>
        </template>
      </b-form-select>

      <b-form-invalid-feedback>Estado obrigatório.</b-form-invalid-feedback>
    </b-form-group>

    <b-form-group class="text-center">
      <b-button type="button" variant="success" @click="handleSubmit">Salvar</b-button>
      <b-button class="ml-2" variant="danger" @click="resetForm()">Limpar</b-button>
      <b-button class="ml-2" variant="info" :to="{ name: 'states' }">Cadastrar estados</b-button>
    </b-form-group>
  </b-form>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'FormState',
  data() {
    return {
      options: []
    };
  },
  computed: {
    ...mapGetters({ form: 'getFormCity', states: 'getStates' })
  },
  validations: {
    form: {
      name: {
        required
      },
      state_id: {
        required
      }
    }
  },
  methods: {
    ...mapActions({
      loadStates: 'loadStates',
      registerCity: 'registerCity',
      resetFormCity: 'resetFormCity',
      updateCity: 'updateCity'
    }),

    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },

    resetForm() {
      this.resetFormCity();

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },

    async handleSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return false;
      }
      if (!this.form.id) {
        await this.registerCity(this.form);
      } else {
        await this.updateCity(this.form);
      }
      this.resetForm();
      return true;
    }
  },
  async created() {
    this.options = await this.loadStates();
  }
};
</script>
