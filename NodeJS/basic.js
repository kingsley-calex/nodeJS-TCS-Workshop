// Function to check data types
function getDataTypes() {
    // return null
    return {
        number : 18,
        string : "Calex",
        array : [7,18],
        object : {
            "Kingsley" : 18,
            "Prince" : 9,
            "Lia" : 1
        }
    }
}


// Function to calculate the sum using a for loop
function sumUsingForLoop(limit) {
let sum = 0;
for(let i = 1 ; i <= limit ; i++)
{
    sum += i
}
//    logic here

    return sum;
}

// Function to calculate the sum using a while loop
function sumUsingWhileLoop(limit) {
    let sum = 0;
    while(limit > 0)
    {
        sum += limit
        limit--;
    }

    // logic here


    return sum;
}

// Function to check if a number is positive
function isPositive(num) {
    if(num > 0)
    return true
return false
}

// Function to check if a number is even or odd
function isEven(num) {
    if((num & 1) == 0)
        return 'even'
    return 'odd'
}

// Function to check if a string contains a specific substring
function containsSubstring(str, substring) {
    let len1 = str.length
    let len2 = substring.length
    for(let i = 0 ; i <= len1 - len2 ; i++)
    {
        let j;
        for(j = 0 ; j < len2 ; j++)
        {
            if(str.charAt(i + j) != substring.charAt(j))
            {
                break;
            }
        }
        if(j == len2)
        {
            return true;
        }
    }
    return false;
}

module.exports = { getDataTypes, sumUsingForLoop, sumUsingWhileLoop, isPositive, isEven, containsSubstring }
