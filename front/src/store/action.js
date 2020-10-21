export const add = (store, payload) => {
    store.commit("CALCUL", payload.value);
    console.log("add");
    console.log(payload.value);
}

export const suppr = store => {
    store.commit("SUPLAST");
}

export const deleteAll = store => {
    console.log("deleteAll");
    store.commit("RESULT", "");
    store.commit("SUPCALCUL")
}

export const calcul = store => {
    console.log('calcul');
    console.log(store.state.calcul);
    store.commit("RESULT", eval(store.state.calcul));

    
}

export const getHistorique = store => {
  fetch('/show')
    .then(function (response) {
      return response.json();
    }).then(function (data) {
      store.commit("SUPHISTORIQUE");
      for (const i in data.split(',')) {
        store.commit("ADDHISTORIQUE", data.split(',')[i]);
      }
    });

}

export const save = store => {
  if (store.state.result == "") {
    fetch('/save/' + store.state.calcul)
      .then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
      });
  }
  else {
    fetch('/save/' + store.state.result + "=" + eval(store.state.result))
      .then(function (response) {
        return response.json();
      }).then(function (data) {
        console.log(data);
      });
  }

}
