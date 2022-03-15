import config from "$src/config.json";
import pgPromise from "pg-promise";
const pgp = pgPromise();
export const db = pgp(config.connection);
export const { ParameterizedQuery: PQ } = pgp;