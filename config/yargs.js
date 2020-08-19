const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        default: 10,
        alias: 'l'
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola tabla de multiplicar', opts)
    .command('crear', 'Crea archivo de tabla de multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}