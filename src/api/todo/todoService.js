const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])

//  new: true => receber registro atualizado em chamadas atualizando o mesmo
//  runValidators: true => validar informações do model na ação update
Todo.updateOptions({ new: true, runValidators: true })

module.exports = Todo