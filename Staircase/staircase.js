/* Staircase detail

This is a staircase of size n = 4:
1234
   #|1 n-3 === _ _ _ #
  ##|2 n-2 === _ _ # #
 ###|3 n-1 === _ # # #
####|4 n-0 === # # # #
Its base and height are both equal to N. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size N. */

function printStaircase(n) {
    for (let i = 1; i <= n; i++)
    {
        let line = "";

        for (let j = 1; j <= n; j++)
        {

            /* line += ( j <= n-i ) ? " " : "#" */

            if (j <= n-i) {
                line += " "
            }
            else 
            {
                line += "#";
            }
        }

        console.log(line);
    }
}

printStaircase(4);
