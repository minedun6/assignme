import initDb from './db'

export default class Api {
  constructor (options) {
    this.dbPath = options.dbPath
    this.db = initDb(this.dbPath)
  }

  // get all the tasks from the database
  getTasks () {
    return new Promise((resolve, reject) => {
      let tasks = []
      Object.assign(tasks, this.db.get('tasks').value())
      resolve(tasks)
    })
  }

  // remove task using the id
  removeTask (id) {
    return new Promise((resolve, reject) => {
      this.db.get('tasks')
        .remove({ id })
        .cloneDeep()
        .write()
      resolve()
    })
  }
}