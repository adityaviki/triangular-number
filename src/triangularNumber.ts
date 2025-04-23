/**
 * Calculates the nth triangular number
 * @param n - The position in the sequence (1-based)
 * @returns The nth triangular number
 */
export function getTriangularNumber(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * Finds all divisors of a number
 * @param num - The number to find divisors for
 * @returns Array of divisors
 */
export function findDivisors(num: number): number[] {
    const divisors: number[] = [];
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            divisors.push(i);
            if (i !== num / i) {
                divisors.push(num / i);
            }
        }
    }
    return divisors.sort((a, b) => a - b);
}

/**
 * Finds the first triangular number with at least the specified number of divisors
 * @param minDivisors - Minimum number of divisors required
 * @returns Object containing the triangular number and its divisors
 */
export function findFirstTriangularNumberWithDivisors(minDivisors: number): {
    number: number;
    divisors: number[];
} {
    let n = 1;
    while (true) {
        const triangularNumber = getTriangularNumber(n);
        const divisors = findDivisors(triangularNumber);
        if (divisors.length >= minDivisors) {
            return {
                number: triangularNumber,
                divisors,
            };
        }
        n++;
    }
}

/**
 * Gets the nth triangular number and its divisors
 * @param n - The position in the sequence (1-based)
 * @returns Object containing the triangular number and its divisors
 */
export function getTriangularNumberWithDivisors(n: number): {
    number: number;
    divisors: number[];
} {
    const triangularNumber = getTriangularNumber(n);
    const divisors = findDivisors(triangularNumber);
    return {
        number: triangularNumber,
        divisors,
    };
}
