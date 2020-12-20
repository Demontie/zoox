<template>
  <AppCard title="Estado">
    <FormState></FormState>
    <ListStates></ListStates>
  </AppCard>
</template>

<script>
import FormState from './FormState.vue';
import ListStates from './ListStates.vue';
import AppCard from '../../components/shared/AppCard.vue';

export default {
  name: 'States',
  components: {
    FormState,
    AppCard,
    ListStates
  }
};
</script>
