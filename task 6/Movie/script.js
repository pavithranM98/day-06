// a) and b) Constructor for the Movie Class
class Movie {
  // Constructor that takes title, studio, and rating as arguments
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating; // Default rating is "PG"
  }
}
// c) Method getPG for Filtering Movies Rated "PG"
class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  // Static method to get movies with "PG" rating
  static getPG(movieArray) {
    return movieArray.filter((movie) => movie.rating === "PG");
  }
}
// d) Create an Instance with Specific Properties
// Create a new instance of Movie with specific title, studio, and rating
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

console.log(casinoRoyale); // Outputs: Movie { title: 'Casino Royale', studio: 'Eon Productions', rating: 'PG-13' }
