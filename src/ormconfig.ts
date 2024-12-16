import { DataSource } from 'typeorm'

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST || "db",
  port: process.env.DATABASE_PORT ? parseInt(process.env.DATABASE_PORT) : 5432,
  username: process.env.DATABASE_USERNAME || "filmdata",
  password: process.env.DATABASE_PASSWORD || "filmdata",
  database: process.env.DATABASE_NAME || "filmdata",
  synchronize: process.env.DATABASE_SYNCHRONIZE ? Boolean(process.env.DATABASE_SYNCHRONIZE) : true,
  logging: process.env.DATABASE_LOGGING ? Boolean(process.env.DATABASE_LOGGING) : true,
  entities: ["src/entity/*.ts"],
});
