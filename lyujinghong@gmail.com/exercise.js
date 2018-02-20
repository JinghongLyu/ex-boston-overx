var exercise = {};

exercise.salaries = null;
exercise.salary = null;

// load salary and data
exercise.load = function(salary, boston){
    exercise.salaries = boston.data;
    exercise.salary = salary;
};

// get salaries larger than given salary
exercise.findBiggerSalaries = function(){

    // ---------------------------------------------------
    //   YOUR CODE
    //
    var dataLength = boston.data.length;
    var salarylist = [];
    var biggerlist = []; // a list that holds all salaries larger than certain amount
    for (var i = 0; i < dataLength; i++) {
    //     Return a filtered list of salaries.
        salarylist[i] = exercise.salaries[i][18];
    //     Return salaries larger than exercise.salary
    //     Append the list
        if (salarylist[i]> exercise.salary){
            biggerlist.push(salarylist[i]);
        }
    }
    return biggerlist;
    //     Example: salaries larger than 300K is 8
    // ---------------------------------------------------

};

// filter function
exercise.largerSalary = function largerSalary(item){

    // ---------------------------------------------------
    //   YOUR CODE
    //
    var dataLength = boston.data.length;
    var salary = [];
    var booleanlist = [];
    for (var i = 0; i < dataLength; i++){
        salarylist[i] = exercise.salaries[i][18];
        if (salarylist[i] > exercise.salary){
            booleanlist[i] = 'TRUE';
        }
        else{
            booleanlist[i] = 'FALSE';
        }
    }
    //     Return a boolean (true/false) if item
    //     is larger than exercise.salary
    // ---------------------------------------------------

};