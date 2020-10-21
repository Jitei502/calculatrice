<template>
    <div class="bouton">
        <button @click="egal">=</button>
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
            egal: function () {
                store.dispatch("calcul");
            }
        }

    };

</script>

<style scoped>
    button {
        width: 50px;
    }
</style>