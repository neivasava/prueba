document.getElementById('prod').addEventListener('change', (event) => {
    const code = document.getElementById('prod').value;
    document.getElementById('tipos').length = 0;
    dataTipos.filter(town => town.producto == code).forEach(tipoAux => {
        document.getElementById('tipos').add(new Option( tipoAux.name, tipoAux.code));
    })
});
