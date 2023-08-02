class Meal {
    constructor(name, calories) {
        this.id = Math.random(16).toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    }
}

class Workout {
    constructor(name, calories) {
        this.id = Math.random(16).toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    }
}

export {
    Meal, 
    Workout
}