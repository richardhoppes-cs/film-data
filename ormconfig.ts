import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db",
  port: 5432,
  username: "filmdata",
  password: "filmdata",
  database: "filmdata",
  synchronize: true, // Set to false in production
  logging: true,
  entities: ["src/entity/*.ts"],
});