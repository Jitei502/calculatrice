export default {
    RESULT(state, result) {
        state.result = state.calcul;
        state.calcul = result.toString();
    },

    CALCUL(state, calcul) {
        if (isNaN(state.calcul.slice(-1)) && isNaN(calcul)) {
            state.calcul = state.calcul.slice(0, -1) + calcul;
        }
        else {
            state.calcul = state.calcul + calcul;
        }
        
    },

    SUPCALCUL(state) {
        state.calcul = "";
        state.result = "";
    },

    SUPLAST(state) {
        state.calcul = state.calcul.slice(0, -1);
    },

    SUPHISTORIQUE(state, historique) {
      console.log(historique);
        state.historique = []; 
    },
    ADDHISTORIQUE(state, calcul) {
      state.historique.push(calcul);
    }
}
