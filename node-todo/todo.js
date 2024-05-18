// todo add 'limpiar'
//todo done 10
// todo ls
//todo alv

//necesitamos:
//archivo para guardar las tareas (json)
//funcion para cada comando 
//usar process.argv para leer los comandos
// usar fs para leer y escribir archivos

const fs = require('fs');

const dbFile = 'db.json';

function init () {
    //crear el archivo de base de datos
    
    const fileExists = fs.existsSync(dbFile);

    if (!fileExists) {
        fs.writeFileSync(dbFile, JSON.stringify({todos: []}));
    }
}
function getTodos() {
    //leer archivo
    const content = fs.readFileSync(dbFile, 'utf8');
    return JSON.parse(content).todos; //convierte string a objeto de js
}

function updateTodos (todos) {
    const newTodos = { todos: todos}
    const newTodosAsString = JSON.stringify(newTodos)
    fs.writeFileSync(dbFile, newTodosAsString);
}
function add (task) {
//leer archivo
//agregar info
const todos = getTodos();
todos.push(task);
updateTodos(todos);
}

function done (taskIndex) {
//leer archivo
//actualizar archivo
const todos = getTodos()
    todos.splice(taskIndex, 1);
    updateTodos(todos);
}

function ls () {
//leer 
    const todos = getTodos();
    if (!todos.length){
        console.log('[EMPTY]');
        process.exit();
    }
    todos.forEach((task, idx) => {
        console.log(idx, "-", task)
    });
}

function alv (){
//actualizar
updateTodos([]);
}

function main () {
    const command = process.argv[2];
    const arg = process.argv[3];

    init()

    if (command === 'ls') {
        ls()
    } else if (command === 'add'){
        
        if(!arg){
            console.error('missing task');
            process.exit(1);
        }
        add(arg);
        ls();
        console.log('Task added');
    } else if (command === 'done') {
        if (!arg){
            console.error('missing task index')
            process.exit(1);
        }
        const idx = parseInt(arg);
        if (isNaN(idx)){
            console.error('Invalid index');
            process.exit(1)
        }
        const todos = getTodos()
        if (idx < 0 || idx >= todos.length){
            console.error('Invalid index')
            process.exit(1)
        }
        done(idx);
        ls();
        console.log('Task completed')
    } else if (command === 'alv'){
        alv();
        console.log('Algo lindo vendrá');
    } else {
        console.error('Invalid command: ', command)
        process.exit(1)
    }

}

main();