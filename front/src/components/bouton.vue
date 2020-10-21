<template>
    <div class="bouton">
        <button @click="add">{{ value }}</button>
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
            add: function() {
                store.dispatch("add", {
                    value: this.value
                });
            }
        }

    };

</script>

<style scoped>
    button {
        width: 50px;
    }
</style>