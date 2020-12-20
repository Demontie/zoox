<template>
  <AppCard title="Cidade">
    <FormCity></FormCity>
    <ListCities></ListCities>
  </AppCard>
</template>

<script>
import FormCity from './FormCity.vue';
import ListCities from './ListCities.vue';
import AppCard from '../../components/shared/AppCard.vue';

export default {
  name: 'Cities',
  components: {
    FormCity,
    AppCard,
    ListCities
  }
};
</script>
