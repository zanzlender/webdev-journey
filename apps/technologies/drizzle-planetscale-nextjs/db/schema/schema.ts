import { InferModel, relations } from "drizzle-orm";
import { int, mysqlEnum, mysqlTable, serial, uniqueIndex, varchar } from "drizzle-orm/mysql-core";

export const Users = mysqlTable(
  "users",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", {
      length: 256,
    }),
    address: varchar("address", { length: 512 }),
    city_id: int("city_id"),
  },
  (Users) => ({
    nameIndex: uniqueIndex("name_idx").on(Users.name),
  })
);

export type User = InferModel<typeof Users>;

export const UsersCities = relations(Users, ({ one, many }) => ({
  city: one(Cities, {
    fields: [Users.city_id],
    references: [Cities.id],
  }),
}));

export const Cities = mysqlTable("cities", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 256 }),
  popularity: mysqlEnum("popularity", ["unknown", "known", "popular"]),
});

export type City = InferModel<typeof Cities>;
