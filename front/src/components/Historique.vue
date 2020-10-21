<template>
    <div class="historique">
        <button @click="save">Save</button>
        <button @click="show">Mettre à jour l'historique</button>
        <h1>Historique</h1>
        <div v-for="calcul in historique">
          <p>{{calcul}}</p>
        </div>
    </div>
</template>

<script>
  import store from '../store/index.js';
  import { mapState } from 'vuex';
  export default {
      computed: mapState(["historique"]),
        methods: {
            show: function () {
                store.dispatch("getHistorique");
            },
          save: function () {
                store.dispatch("save");
            }
    }
    }
</script>

<style scoped>
</style>
