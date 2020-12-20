<template>
  <b-form @submit.stop.prevent :novalidate="true">
    <b-form-group id="email-group" label="Nome" label-for="email">
      <b-form-input
        id="name"
        name="name"
        v-model="$v.form.name.$model"
        :state="validateState('name')"
        aria-describedby="input-1-live-feedback"
      ></b-form-input>

      <b-form-invalid-feedback>Nome obrigatório.</b-form-invalid-feedback>
    </b-form-group>
    <b-form-group id="email-group" label="Email" label-for="email">
      <b-form-input
        id="email"
        name="email"
        v-model="$v.form.email.$model"
        :state="validateState('email')"
        aria-describedby="input-1-live-feedback"
      ></b-form-input>

      <b-form-invalid-feedback>Email obrigatório.</b-form-invalid-feedback>
    </b-form-group>

    <b-form-group id="example-input-group-2" label="Password" label-for="example-input-2">
      <b-form-input
        id="password"
        name="password"
        type="password"
        v-model="$v.form.password.$model"
        :state="validateState('password')"
        aria-describedby="input-1-live-feedback"
      ></b-form-input>

      <b-form-invalid-feedback>Senha obrigatório.</b-form-invalid-feedback>
    </b-form-group>

    <b-button type="button" variant="success" @click="handleSubmit">Cadastrar</b-button>
    <b-button class="ml-2" variant="danger" @click="resetForm()">Limpar</b-button>
    <b-button class="ml-2" variant="info" :to="{ name: 'singin' }">Fazer login</b-button>
  </b-form>
</template>

<script>
import { required } from 'vuelidate/lib/validators';

import { mapActions } from 'vuex';

export default {
  name: 'FormSingUp',
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null
      }
    };
  },
  validations: {
    form: {
      name: {
        required
      },
      email: {
        required
      },
      password: {
        required
      }
    }
  },
  methods: {
    ...mapActions({
      register: 'register'
    }),

    validateState(name) {
      const { $dirty, $error } = this.$v.form[name];
      return $dirty ? !$error : null;
    },

    resetForm() {
      this.form = {
        name: null,
        password: null,
        email: null
      };

      this.$nextTick(() => {
        this.$v.$reset();
      });
    },
    async handleSubmit() {
      this.$v.form.$touch();
      if (this.$v.form.$anyError) {
        return false;
      }

      await this.register(this.form);
      this.$router.push('/singin');

      return true;
    }
  }
};
</script>
