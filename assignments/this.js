/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. global 
* 2. implicit
* 3. explicit
* 4. forgot
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

// code example for Implicit Binding

let obj = { 
    id: 50, 
    first_name: "Shell", 
    last_name: "Baine", 
    email: "sbaine1d@intel.com", 
    shirt_size: "M", 
    company_name: "Gabtype", 
    donation: 171 
    speak: function() {
        return `hi, my name is ${this.first_name}`;
    }
}    

// Principle 3

function Animal2(obj){
    this.age = obj.age,
    this.species = obj.species,
    this.noise = obj.noise,
    this.speak = function() {
        console.log(this)
        return `${this.noise}`;
    }
}

const zebra = new Animal2({
    age: 30,
    species: 'horse',
    noise: 'ungabunga',

})


// code example for New Binding

// Principle 4

// code example for Explicit Binding