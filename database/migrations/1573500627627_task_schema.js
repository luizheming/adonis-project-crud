'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.integer('project_id')
        .unsigned()
        .references('id')
        .inTable('projects')
      table.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
      table.string('description')
      table.boolean('done')
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
