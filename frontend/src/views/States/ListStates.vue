<template>
  <div>
    <b-row class="mt-3 mb-3 justify-content-md-center">
      <b-col lg="6">
        <b-form-group
          label="Busca"
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Busca completa"
            ></b-form-input>

            <b-input-group-append>
              <b-button variant="success" :disabled="!filter" @click="filter = ''">Limpar</b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col lg="12" class="my-1">
        <b-table
          :items="states"
          :fields="fields"
          :current-page="currentPage"
          :per-page="perPage"
          :filter="filter"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          :sort-direction="sortDirection"
          stacked="md"
          show-empty
          small
          @filtered="onFiltered"
        >
          <template #cell(actions)="row">
            <b-button variant="success" @click="editState(row.item)" class="mr-1">
              Editar
            </b-button>

            <b-button variant="danger" @click="deleteState(row.item.id)" class="mr-1">
              Remover
            </b-button>
          </template>
        </b-table>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="3" class="my-1">
        <b-form-group
          label="Por pagina"
          label-for="per-page-select"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-form-select
            id="per-page-select"
            v-model="perPage"
            :options="pageOptions"
            size="sm"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col sm="3" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ListStates',
  data() {
    return {
      fields: [
        { key: 'name', label: 'Estado', sortable: true, sortDirection: 'desc' },
        { key: 'shortname', label: 'Abreviação', sortable: true, class: 'text-center' },
        { key: 'actions', label: 'Ação' }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [5, 10, 15, { value: 100, text: 'Mostrar todos' }],
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null
    };
  },
  computed: {
    ...mapGetters({ states: 'getStates' })
  },
  methods: {
    ...mapActions({
      loadStates: 'loadStates',
      removeState: 'removeState',
      editFormState: 'editFormState'
    }),
    async deleteState(removedState) {
      try {
        await this.removeState(removedState);
      } catch (msgErro) {
        console.log(msgErro);
      }
    },
    async editState(item) {
      try {
        await this.editFormState(item);
      } catch (msgErro) {
        console.log(msgErro);
      }
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.states.length;
  },
  created() {
    this.loadStates();
  }
};
</script>
