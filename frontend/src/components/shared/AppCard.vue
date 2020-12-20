<template>
  <b-card>
    <b-row no-gutters>
      <b-col md="6">
        <b-card-title>{{ title }}</b-card-title>
      </b-col>
      <b-col md="6" class="text-right" v-if="buttonLogout">
        <b-button type="button" variant="danger" @click="handleLogout">Sair</b-button>
      </b-col>
    </b-row>
    <b-card-text>
      <slot></slot>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'AppCard',
  props: {
    title: String,
    buttonLogout: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    async handleLogout() {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      this.$router.push('/');
      return true;
    }
  }
};
</script>
