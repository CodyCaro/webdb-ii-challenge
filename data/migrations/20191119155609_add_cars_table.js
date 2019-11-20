exports.up = function(knex) {
  return knex.schema.createTable("cars", function(table) {
    table.increments();
    table.string("VIN", 128).notNullable();
    table.string("make", 64).notNullable();
    table.string("model", 64).notNullable();
    table.integer("mileage").notNullable();
    table.string("transmissionType", 128);
    table.string("titleStatus", 128);

    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars");
};
