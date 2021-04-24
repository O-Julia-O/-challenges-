/*
    Given five positive integers, find the minimum and maximum 
    values that can be calculated by summing exactly four of the five integers. 
    Then print the respective minimum and maximum values as a single line of 
    two space-separated long integers. 

    comments
    ! comment RED
    * comment GREEN
    & ROSE COMMENTS
    ^ YELLOW COMMENTS
    ~ PURPLE COMMENTS
    ? BLUE COMMENTS
    TODO colorful comments ORANGE *-*

    anchors
    LINK 
    SECTION
    ANCHOR 
    REVIEW
    NOTE
    FIXME
    STUB
*/

let array = [1, 2, 3, 4, 5];

function miniMaxSum(arr) {
    let max = 0;
    let min = arr[0];

    for (let i = 0; i < arr.length; i++)
    {
        if (max < arr[i])
        {
            max = arr[i];
        }

        if (min > arr[i])
        {
            min = arr[i];
        }
    }

    console.log(min);
    console.log(max);
}

function sumElements(arr) {
    let arrSums = [];
    

    for (let i = 0; i < arr.length; i++)
    {
        let sum = 0;

        for (let j = 0; j < arr.length; j++)
        {
            if (j !== i) {
                sum += arr[j];
            }
        }

        arrSums.push(sum);
    }

    return arrSums;
}

console.log(miniMaxSum(sumElements(array)));