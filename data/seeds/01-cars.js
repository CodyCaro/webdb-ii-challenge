exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cars").insert([
        {
          VIN: 1,
          make: "rowValue1",
          model: "",
          mileage: 1,
          transmissionType: "",
          titleStatus: ""
        }
      ]);
    });
};
