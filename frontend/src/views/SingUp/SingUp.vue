<template>
  <AppCard title="Cadastrar" :buttonLogout="false">
    <FormSingUp></FormSingUp>
  </AppCard>
</template>

<script>
import FormSingUp from './FormSingUp.vue';
import AppCard from '../../components/shared/AppCard.vue';

export default {
  name: 'Singup',
  components: {
    FormSingUp,
    AppCard
  }
};
</script>
