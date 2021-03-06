//Data from the program
var firstName = "Steven";
var surName = "Hancock";
var birthDate = new Date("5/7/1990");


//User connects
var user1 = {
    firstName: firstName,
    lastName: surName,
    age: 40,
    birthDate: birthDate,
    fullName: function() {
      //THIS can replace user1.
        return user1.firstName + " " + this.lastName;
    },
    incrementAge: function() {
        this.age++;
    },
    loginCheck: function() {
        var today = new Date();
        if (this.birthDate.getMonth() === today.getMonth() && this.birthDate.getDate() === today.getDate()) {
            this.birthDay();
        }
    },
    birthDay: function() {
        console.log("Happy Birthday");
        this.incrementAge();
    }
};

user1.loginCheck();
