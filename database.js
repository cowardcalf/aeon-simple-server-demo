import db from "diskdb";

db.connect('./data', ['movies']);

if (!db.movies.find().length) {
  const movie = { id: "tt0110357", name: "The Lion King", genre: "animation" };
  db.movies.save(movie);
}

console.log(db.movies.find());

export default db;