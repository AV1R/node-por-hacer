const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'

}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar el estado de un elemento', {
        descripcion,
        completado

    })
    .command('borrar', 'Borra una tarea', {
        descripcion


    })
    .help()
    .argv;


module.exports = {

    argv
}