exports.up = function (knex) {
    return knex.schema.createTable("hospital", function (table) {
        table.increments('id').primary()
        table.string('name').notNullable()
        table.string('phone').notNullable()
        table.string('street').notNullable()
        table.string('number').notNullable()
        table.string('city').notNullable()
        table.string('state', 2).notNullable()
        table.string('zip').notNullable()
    }).then(function () {
        return knex("hospital").insert([
            {
                name: "Hospital Israelita Albert Einstein",
                phone: "(11) 2151-1233",
                street: "Av. Albert Einstein",
                number: "627",
                city: "São Paulo",
                state: "SP",
                zip: "05652-900"
            },
            {
                name: "Hospital 9 de Julho",
                phone: "(11) 3147-9999",
                street: "R. Peixoto Gomide",
                number: "545",
                city: "São Paulo",
                state: "SP",
                zip: "01409-002"
            },
            {
                name: "Hospital São Paulo",
                phone: "(11) 5576-4522",
                street: "R. Napoleão de Barros",
                number: "715",
                city: "São Paulo",
                state: "SP",
                zip: "04024-002"
            },
            {
                name: "Hospital Samaritano",
                phone: "(11) 3821-5300",
                street: "R. Conselheiro Brotero",
                number: "1486",
                city: "São Paulo",
                state: "SP",
                zip: "01232-010"
            },
            {
                name: "Hospital Santa Isabel",
                phone: "(11) 2176-7700",
                street: "R. Dona Veridiana",
                number: "311",
                city: "São Paulo",
                state: "SP",
                zip: "01238-010"
            },
            {
                name: "Hospital São Camilo",
                phone: "(11) 3172-6800",
                street: "Av. Pompéia",
                number: "1178",
                city: "São Paulo",
                state: "SP",
                zip: "05022-001"
            },
            {
                name: "Hospital Santa Virgínia",
                phone: "(11) 2799-3100",
                street: "Av. Celso Garcia",
                number: "2294",
                city: "São Paulo",
                state: "SP",
                zip: "03014-000"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            },
            {
                name: "Hospital Santa Paula",
                phone: "(11) 2799-3100",
                street: "Av. Santo Amaro",
                number: "2468",
                city: "São Paulo",
                state: "SP",
                zip: "04556-100"
            }
        ])
    })
}

exports.down = function (knex) {
    return knex.schema.dropTable('hospital')
}
