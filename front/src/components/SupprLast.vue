<template>
    <div class="bouton">
        <button @click="suppr">Sup</button>
    </div>
</template>

<script>
    import store from '../store/index.js';
    export default {
        name: 'Bouton',
        props: {
            value: String
        },
        methods: {
            suppr: function () {
                store.dispatch("suppr");
            }
        }

    };

</script>

<style scoped>
    button {
        width: 50px;
    }
</style>