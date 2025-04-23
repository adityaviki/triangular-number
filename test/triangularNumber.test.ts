import {
    getTriangularNumber,
    findDivisors,
    findFirstTriangularNumberWithDivisors,
    getTriangularNumberWithDivisors,
} from '../src/triangularNumber';

describe('Triangular Number Functions', () => {
    describe('getTriangularNumber', () => {
        it('should calculate the correct triangular number for given position', () => {
            expect(getTriangularNumber(1)).toBe(1);
            expect(getTriangularNumber(2)).toBe(3);
            expect(getTriangularNumber(3)).toBe(6);
            expect(getTriangularNumber(4)).toBe(10);
            expect(getTriangularNumber(5)).toBe(15);
            expect(getTriangularNumber(6)).toBe(21);
            expect(getTriangularNumber(7)).toBe(28);
        });
    });

    describe('findDivisors', () => {
        it('should find all divisors of a number', () => {
            expect(findDivisors(1)).toEqual([1]);
            expect(findDivisors(3)).toEqual([1, 3]);
            expect(findDivisors(6)).toEqual([1, 2, 3, 6]);
            expect(findDivisors(10)).toEqual([1, 2, 5, 10]);
            expect(findDivisors(15)).toEqual([1, 3, 5, 15]);
            expect(findDivisors(21)).toEqual([1, 3, 7, 21]);
            expect(findDivisors(28)).toEqual([1, 2, 4, 7, 14, 28]);
        });
    });

    describe('findFirstTriangularNumberWithDivisors', () => {
        it('should find the first triangular number with at least the specified number of divisors', () => {
            const result = findFirstTriangularNumberWithDivisors(5);
            expect(result.number).toBe(28);
            expect(result.divisors).toEqual([1, 2, 4, 7, 14, 28]);
        });
    });

    describe('getTriangularNumberWithDivisors', () => {
        it('should get the nth triangular number and its divisors', () => {
            const result = getTriangularNumberWithDivisors(5);
            expect(result.number).toBe(15);
            expect(result.divisors).toEqual([1, 3, 5, 15]);
        });
    });
});
