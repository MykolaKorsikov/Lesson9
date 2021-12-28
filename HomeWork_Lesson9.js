//Introduce strict rule for one of the parameters in the class

class Movie {
    constructor(title, IMDbRating, duration) {
        this.title = title;
        this.duration = duration;
        if (isNaN(IMDbRating)) {
            return console.log('Enter rating as a number (e.g. 9.5):')
        } else if (parseFloat(IMDbRating) <0 || parseFloat(IMDbRating)> 10) {
            return console.log('Enter rating which is between 0 and 10.00:');
        } else {
            this.IMDbRating = parseFloat(IMDbRating);
        }
    }
};

//Creating new object
const item1 = new Movie('Titanic', '0.00', "3:14");
console.log(item1);

//TDD
if (item1.IMDbRating >= 10 || item1.IMDbRating <= 0 || isNaN(item1.IMDbRating)){
    console.log('Validation failed.');
} else{
    console.log('Validation passed.');
}