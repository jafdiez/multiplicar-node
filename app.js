// requires
const argv = require('./config/yargs.js').argv;

const { crearArchivo } = require('./multiplicar/multiplicar');
const { listarTabla } = require('./multiplicar/multiplicar');

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar\n');
        listarTabla(argv.base, argv.limite);

        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no recopnopcido');
}


//console.log(argv.base);
//console.log('Limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1];