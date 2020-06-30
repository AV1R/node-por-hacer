const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');


console.log(argv);

let comando = argv._[0];


switch (comando) {
    case 'crear':
        console.log('Crear');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('Mostrar todas las tareas por hacer');
        let listado = porHacer.getListado();
        for (let tarea of listado) {

            console.log('========Por Hacer========'.green);
            console.log(tarea.descripcion);
            console.log('Estado:', tarea.completado.cyan);
            console.log('========================'.green);
        }
        break;
    case 'actualizar':
        console.log('Actualiza una tarea por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        console.log('Borra una tarea por hacer');
        let borrar = porHacer.borrar(argv.descripcion);
        console.log(borrar);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}