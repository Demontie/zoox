<template>
  <b-form @submit.stop.prevent :novalidate="true">
    <b-form-group label="Nome">
      <b-form-input
        id="name"
        name="name"
        v-model="$v.form.name.$model"
        :state="validateState('name')"
      ></b-form-input>

      <b-form-invalid-feedback>Nome obrigatório.</b-form-invalid-feedback>
    </b-form-group>
    <b-form-group label="Abreviação">
      <b-form-input
        id="shortname"
        name="shortname"
        v-model="$v.form.shortname.$model"
        :state="validateState('shortname')"
      ></b-form-input>

      <b-form-invalid-feedback>Abreviação obrigatório.</b-form-invalid-feedback>
    </b-form-group>

    <b-form-group class="text-center">
      <b-button type="button" variant="success" @click="handleSubmit">Salvar</b-button>
      <b-button class="ml-2" variant="danger" @click="resetForm()">Limpar</b-button>
      <b-button class="ml-2" variant="info" :to="{ name: 'cities' }">Cadastrar cidades</b-button>
    </b-form-group>
  </b-form>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'FormState',
  computed: {
    ...mapGetters({ form: 'getFormState' })
  },
  validations: {
    form: {
      name: {
        required
      },
      shortname: {
        required
      }
    }
  },
  methods: {
    ...mapActions({
      registerState: 'registerState',
      resetFormState: 'resetFormState',
      updateState: 'updateState'
    }),

    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },

    resetForm() {
      this.resetFormState();

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
        await this.registerState(this.form);
      } else {
        await this.updateState(this.form);
      }
      this.resetForm();
      return true;
    }
  }
};
</script>
