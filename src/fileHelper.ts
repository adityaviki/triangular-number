import * as fs from 'fs';
import * as path from 'path';

/**
 * Formats the output string for both console and file
 * @param number - The triangular number
 * @param divisors - Array of divisors
 * @returns Formatted string
 */
export function formatOutput(number: number, divisors: number[]): string {
    return `${number}: ${divisors.join(',')}`;
}

/**
 * Saves the result to a file
 * @param filename - Name of the file to save to
 * @param content - Content to save
 * @returns Promise that resolves when the file is saved
 */
export async function saveToFile(filename: string, content: string): Promise<void> {
    const outputDir = path.join(process.cwd(), 'output');

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }

    const filePath = path.join(outputDir, filename);
    await fs.promises.writeFile(filePath, content, 'utf8');
}

/**
 * Generates filename for the nth term
 * @param n - The position in the sequence
 * @returns Formatted filename
 */
export function generateNthTermFilename(n: number): string {
    return `Divisors and sum of ${n}th term.txt`;
}

/**
 * Generates filename for minimum divisors search
 * @param minDivisors - Minimum number of divisors
 * @returns Formatted filename
 */
export function generateMinDivisorsFilename(minDivisors: number): string {
    return `The first triangle number ${minDivisors}.txt`;
}
