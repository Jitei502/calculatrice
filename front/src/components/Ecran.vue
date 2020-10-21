<template>
    <div class="ecran">
        <p id="result">{{result}}</p>
        <p id="calcul">{{calcul}}</p>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: 'Ecran',
        computed: mapState(["result", "calcul"]),
    };
</script>

<style scoped>
</style>