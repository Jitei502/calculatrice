<template>
    <div id="app">
        <div id="ecran">
            <Ecran />
        </div>
        <div id="pavet">
            <Bouton value="1" />
            <Bouton value="2" />
            <Bouton value="3" />
            <Bouton value="+" />
            <Bouton value="4" />
            <Bouton value="5" />
            <Bouton value="6" />
            <Bouton value="-" />
            <Bouton value="7" />
            <Bouton value="8" />
            <Bouton value="9" />
            <Bouton value="*" />
            <Bouton value="," />
            <Bouton value="0" />
            <Egal/>
            <Bouton value="/" />
            <SupprAll />
            <SupprLast />
        </div>

        <div class="historique">
          <Historique></Historique>

        </div>
    </div>
</template>

<script>
    import Home from './components/Home.vue';
    import Bouton from './components/bouton.vue';
    import Ecran from './components/Ecran.vue';
    import Egal from './components/Egal.vue';
    import SupprAll from './components/SupprAll.vue';
    import SupprLast from './components/SupprLast.vue';
    import Historique from './components/Historique.vue';

    export default {
        name: 'app',
        components: {
            Home,
            Bouton,
            Ecran,
            Egal,
            SupprAll,
            SupprLast,
            Historique
        }
    };
</script>

<style>
    #pavet {
        display: grid;
        grid-template-columns: repeat(4, 50px);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
    #ecran {
        width : 200px;
        border: 1px solid;
        height: 100px;
    }

</style>

