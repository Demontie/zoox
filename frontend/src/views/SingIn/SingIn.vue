<template>
  <AppCard title="Login" :buttonLogout="false">
    <FormSingIn></FormSingIn>
  </AppCard>
</template>

<script>
import FormSingIn from './FormSingIn.vue';
import AppCard from '../../components/shared/AppCard.vue';

export default {
  name: 'Singin',
  components: {
    FormSingIn,
    AppCard
  }
};
</script>
