import { c as config } from "./config-352e7003.js";
import pgPromise from "pg-promise";
const pgp = pgPromise();
const db = pgp(config.connection);
const { ParameterizedQuery: PQ } = pgp;
export { PQ as P, db as d };
