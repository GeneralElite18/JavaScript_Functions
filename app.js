console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(num){

    let isNegative = false
    if(num < 0){
        num *= -1;
        isNegative = true;
    }

    for(let i = 0; i < num; i++){
        if(i % 2 == 1){
            if(isNegative){
                console.log(-i);
            }
            else{
                console.log(i);
            }

        }
    }

}

printOdds(18);
printOdds(-32)

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age){

    let aboveSixteen = "";
    let belowSixteen = "";

    if(userName){
        aboveSixteen = "Congrats " + userName + ", you can drive!";
        belowSixteen = "Sorry " + userName + ", but you need to wait until you're 16.";
    }
    else{
        console.log("NO USERNAME INPUT");
    }

    if(age){
        if(age < 16){
            console.log(belowSixteen);
        }
        else{
            console.log(aboveSixteen);
        }
    }
    else{
        console.log("NO AGE INPUT");
    }
}

checkAge("Alex", 23);


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function quadrantCheck(x, y){
    if(x == 0 && y == 0){
        console.log("(" + x + "," + y + ") is at origin");
    }
    else if(x == 0 && y != 0){
        console.log("(" + x + "," + y + ") is on y axis");
    }
    else if(x != 0 && y == 0){
        console.log("(" + x + "," + y + ") is on x axis");
    }
    else if(x > 0 && y > 0){
        console.log("(" + x + "," + y + ") is in Quadrant 1");
    }
    else if(x < 0 && y > 0){
        console.log("(" + x + "," + y + ") is in Quadrant 2");
    }
    else if(x < 0 && y < 0){
        console.log("(" + x + "," + y + ") is in Quadrant 3");
    }
    else if(x > 0 && y < 0){
        console.log("(" + x + "," + y + ") is in Quadrant 4");
    }
}

quadrantCheck(54,-3);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangleType(a, b, c){

    if(a + b <= c){
        console.log("Invalid Triangle");
    }
    else if(a == b && b == c){
        console.log("Equilateral Triangle");
    }
    else if(a == b || b == c){
        console.log("Isosceles Triangle");
    }
    else if(a != b != c){
        console.log("Scalene Triangle");
    }
}

triangleType(1, 2, 2);
triangleType(1, 1, 2);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataPlanCheck(planLimit, day, usage){
    let period = 30;

    //Validations for inputs
    if(day > period){
        console.log("Invalid amount of days. A month plan is only 30 days!");
        return;
    }

    if(usage > planLimit){
        console.log("You have already exceeded your data plan!");
        return;
    }

    //Days left Message
    let daysLeftMessage = day + " days used, " + (period - day) + " days remaining.";
    console.log(daysLeftMessage);

    //Average Daily Use Message
    let averageDailyUse = usage / day;
    console.log("Average daily use: " + (Math.round(averageDailyUse * 100) / 100) + " GB/day");

    //Checking if they will exceed their plan at current rate
    if(averageDailyUse * period > planLimit){
        let limitOverflowAmount = averageDailyUse * period - planLimit;
        console.log("Continuing this high usage, you'll exceed your data plan by " + (Math.round(limitOverflowAmount * 100) / 100) + " GB.");
        
        let daysLeft = period - day;
        let maxDailyUse = (planLimit - usage) / daysLeft;
        console.log("To stay below your data plan, use no more than " + (Math.round(maxDailyUse * 100) / 100) + " GB/day");
    }
    else if(averageDailyUse * period <= planLimit){
        console.log("You are chillin, no need to worry about exceeding your data plan at this rate.");
    }
}

dataPlanCheck(150, 23, 25);