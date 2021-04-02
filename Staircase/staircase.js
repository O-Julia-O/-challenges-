/* Staircase detail

This is a staircase of size n = 4:

   #
  ##
 ###
####
Its base and height are both equal to N. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size N. */

function printStaircase(n) 
{
    let stringHashtags = [n];

    /* for (let i = 1; i <= n; i++) 
    {
        stringHashtags.push(" ")
        console.log(stringHashtags)
    } */

    for (let i = n; i >= 1; i--) 
    {
        stringHashtags.unshift("#")
        console.log(String(stringHashtags))
    }
}

printStaircase(4)
