exports.up = function (knex) {
    return knex.schema.createTable('donation', function (table) {
        table.increments('id').primary()
        table.decimal('value').notNullable()
        table.string('hospital_id').notNullable()
        table.string('user_id').notNullable()
        
        table.foreign('hospital_id').references('id').inTable('hospital')
        table.foreign('user_id').references('id').inTable('user')
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('donation')
}
