import * as readline from 'readline';
import {
    getTriangularNumberWithDivisors,
    findFirstTriangularNumberWithDivisors,
} from './triangularNumber';
import {
    formatOutput,
    saveToFile,
    generateNthTermFilename,
    generateMinDivisorsFilename,
} from './fileHelper';

const inputOutputInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/**
 * Prompts the user for input
 * @param question - The question to ask
 * @returns Promise that resolves with the user's answer
 */
function prompt(question: string): Promise<string> {
    return new Promise((resolve) => {
        inputOutputInterface.question(question, resolve);
    });
}

/**
 * Handles the nth term option
 */
async function handleNthTerm(): Promise<void> {
    const n = parseInt(
        await prompt(
            'Enter the position in the sequence (e.g., 5 for the 5th triangular number): ',
        ),
        10,
    );

    if (isNaN(n) || n < 1) {
        console.log('Please enter a valid positive number.');
        return;
    }

    const result = getTriangularNumberWithDivisors(n);
    const output = formatOutput(result.number, result.divisors);

    console.log(output);
    await saveToFile(generateNthTermFilename(n), output);
    console.log(`Results have been saved to ${generateNthTermFilename(n)}`);
}

/**
 * Handles the minimum divisors option
 */
async function handleMinDivisors(): Promise<void> {
    const minDivisors = parseInt(
        await prompt('Enter the minimum number of divisors required: '),
        10,
    );

    if (isNaN(minDivisors) || minDivisors < 1) {
        console.log('Please enter a valid positive number.');
        return;
    }

    const result = findFirstTriangularNumberWithDivisors(minDivisors);
    const output = formatOutput(result.number, result.divisors);

    console.log(
        `The triangle number is ${result.number} and divisors are ${result.divisors.join(',')}`,
    );
    await saveToFile(generateMinDivisorsFilename(minDivisors), output);
    console.log(`Results have been saved to ${generateMinDivisorsFilename(minDivisors)}`);
}

/**
 * Displays the main menu
 */
async function showMenu(): Promise<void> {
    console.log('\nHighly Divisible Triangular Number');
    console.log('1. Find nth triangular number and its divisors');
    console.log('2. Find first triangular number with minimum X divisors');
    console.log('Q. Quit');

    const choice = await prompt('\nEnter your choice (1, 2, or Q): ');

    switch (choice.toUpperCase()) {
        case '1':
            await handleNthTerm();
            break;
        case '2':
            await handleMinDivisors();
            break;
        case 'Q':
            console.log('Goodbye!');
            inputOutputInterface.close();
            return;
        default:
            console.log('Invalid choice. Please try again.');
    }

    if (choice.toUpperCase() !== 'Q') {
        await showMenu();
    }
}

// Start the application
showMenu().catch((error) => {
    console.error('An error occurred:', error);
    inputOutputInterface.close();
});
