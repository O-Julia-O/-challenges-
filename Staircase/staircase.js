/* Staircase detail

This is a staircase of size n = 4:
1234
   #|1 n-3 === _ _ _ #
  ##|2 n-2 === _ _ # #
 ###|3 n-1 === _ # # #
####|4 n-0 === # # # #
Its base and height are both equal to N. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size N. */

/* #     */
/* ##    */
/* ###   */

function printStaircase(typeOfPyramide, n)
{
    let processor;

    switch(typeOfPyramide) 
    {
        case 1: 
            processor = calcLeftSide;
            break;
        case 2 : 
            processor = calcRightSide;
            break;
        case 3 : 
            processor = calcFlipRight;
            break;
        case 4 : 
            processor = calcFlipLeft;
            break;
        default : 
            console.log("This type we don't have.")
            return;
    }    

    
    createPyramide(n, processor)
}


function createPyramide(n, processor)
{
    for (let i = 1; i <= n; i++)
    {
        let line = "";

        for (let j = 1; j <= n; j++)
        {
            line += processor(i, j, n);
        }

        console.log(line)
    }
}

function calcFlipLeft(i, j, n)
{
    return (j <= n - i + 1) ? "#" : " ";
}

function calcFlipRight(i, j, n)
{
    return (j < i) ? " " : "#";
}

function calcLeftSide(i, j, n)
{
    return (j < i+1) ? "#" : " ";
}

function calcRightSide(i, j, n)
{
    return (j <= n-i ) ? " " : "#";
}

printStaircase(1, 9);
printStaircase(2, 4);
printStaircase(3, 6);
printStaircase(4, 4);
printStaircase(5, 4);


