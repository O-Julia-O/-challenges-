/* 
    You are in charge of the cake for a child's birthday. 
    You have decided the cake will have one candle for each year of their total age. 
    They will only be able to blow out the tallest of the candles. 
    Count how many candles are tallest. 
*/

function birthdayCakeCandles(candles) 
{
    let tallestCandle = 0;
    let quantitytallestCandle = 0;

    for (let i = 0; i < candles.length; i++)
    {
        if (tallestCandle < candles[i])
        {
            tallestCandle = candles[i];
        }
    }

    for (let j = 0; j < candles.length; j++)
    {
        if (candles[j] === tallestCandle)
        {
            quantitytallestCandle++;
        }
    }

    return quantitytallestCandle;
}