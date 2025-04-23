# Highly Divisible Triangular Number

This program helps find highly divisible triangular numbers. A triangular number is a number that can be represented as a triangle with dots.

For example, the 7th triangular number is 28, which can be represented as:

`28: 1, 3, 6, 10, 15, 21, 28`

## Features

The program offers two main functionalities:

1. Find the nth triangular number and its divisors
2. Find the first triangular number that has more than X divisors

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

## Usage

Build the program:

```bash
npm build
```

Run the program:

```bash
npm start
```

The program will present a menu with the following options:

1. Find nth triangular number and its divisors
2. Find first triangular number with minimum X divisors
   Q. Quit

### Option 1: Find nth triangular number

- Enter the position in the sequence (e.g., 5 for the 5th triangular number)
- The program will display the triangular number and its divisors
- Results will be saved to a file named "Divisors and sum of Nth term.txt"

### Option 2: Find first triangular number with X divisors

- Enter the minimum number of divisors required
- The program will find the first triangular number that has more than the specified number of divisors
- Results will be saved to a file named "The first triangle number X.txt"

## Development

### Available Scripts

- `npm start` - Run the compiled program
- `npm run dev` - Run the program directly with TypeScript
- `npm run build` - Compile TypeScript to JavaScript
- `npm test` - Run tests
- `npm run lint` - Check code for style issues
- `npm run lint:fix` - Automatically fix linting issues
- `npm run format` - Format code using Prettier
- `npm run prepare` - Install Husky git hooks

### Dependencies

#### Development Dependencies

- `@types/jest` - TypeScript definitions for Jest
- `@types/node` - TypeScript definitions for Node.js
- `@typescript-eslint/eslint-plugin` - ESLint plugin for TypeScript
- `@typescript-eslint/parser` - TypeScript parser for ESLint
- `eslint` - JavaScript/TypeScript linter
- `eslint-config-prettier` - ESLint configuration for Prettier compatibility
- `eslint-plugin-prettier` - ESLint plugin for Prettier formatting
- `husky` - Git hooks manager
- `jest` - Testing framework
- `prettier` - Code formatter
- `ts-jest` - TypeScript support for Jest
- `ts-node` - TypeScript execution environment
- `typescript` - TypeScript compiler

### Running Tests

```bash
npm test
```

### Linting

```bash
npm run lint
```

To automatically fix linting issues:

```bash
npm run lint:fix
```

### Formatting

```bash
npm run format
```

### Building

To compile TypeScript to JavaScript:

```bash
npm run build
```

### Development Mode

To run the program directly with TypeScript:

```bash
npm run dev
```

## Project Structure

- `src/` - Source code
    - `index.ts` - Main application entry point
    - `triangularNumber.ts` - Core functionality for triangular numbers
    - `fileHelper.ts` - File handling utilities
- `test/` - Test files
- `output/` - Generated output files
