import { faker } from "@faker-js/faker";

function FakerData(count) {
  const data = Array.from({ length: count != null ? count : 20 }, () => ({
    id: faker.datatype.number(),
    name: faker.person.fullName(),
    address: faker.location.city(),
    country: faker.location.country(),
    age: faker.datatype.number({ min: 18, max: 99 }),
    occupation: faker.name.jobTitle(),
    vehicle: {
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      name: faker.vehicle.vehicle(),
      year: faker.datatype.number({ min: 1960, max: 2023 }),
      color: faker.vehicle.color(),
      vin: faker.vehicle.vin(),
      age: faker.datatype.number({ min: 0, max: 15 }),
    },
  }));

  return data;
}
export default FakerData;
