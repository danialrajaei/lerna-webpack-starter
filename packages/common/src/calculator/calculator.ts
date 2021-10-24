export const add = (...nums: number[]) => {
    return nums.reduce((previousValue, currentValue) => previousValue + currentValue);
}