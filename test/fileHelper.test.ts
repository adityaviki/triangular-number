import {
    formatOutput,
    saveToFile,
    generateNthTermFilename,
    generateMinDivisorsFilename,
} from '../src/fileHelper';

// Mock modules
jest.mock('fs', () => ({
    existsSync: jest.fn(),
    mkdirSync: jest.fn(),
    promises: {
        writeFile: jest.fn(),
    },
}));

jest.mock('path', () => ({
    join: jest.fn((...args) => args.join('/')),
}));

// Import mocked modules
import * as fs from 'fs';

describe('File Handler Functions', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe('formatOutput', () => {
        it('should format the output string correctly', () => {
            expect(formatOutput(28, [1, 2, 4, 7, 14, 28])).toBe('28: 1,2,4,7,14,28');
            expect(formatOutput(15, [1, 3, 5, 15])).toBe('15: 1,3,5,15');
        });
    });

    describe('saveToFile', () => {
        it('should create output directory if it does not exist', async () => {
            (fs.existsSync as jest.Mock).mockReturnValue(false);
            (fs.promises.writeFile as jest.Mock).mockResolvedValue(undefined);

            await saveToFile('test.txt', 'test content');

            expect(fs.mkdirSync).toHaveBeenCalledWith(expect.stringContaining('output'));
            expect(fs.promises.writeFile).toHaveBeenCalledWith(
                expect.stringContaining('output/test.txt'),
                'test content',
                'utf8',
            );
        });

        it('should save file without creating directory if it exists', async () => {
            (fs.existsSync as jest.Mock).mockReturnValue(true);
            (fs.promises.writeFile as jest.Mock).mockResolvedValue(undefined);

            await saveToFile('test.txt', 'test content');

            expect(fs.mkdirSync).not.toHaveBeenCalled();
            expect(fs.promises.writeFile).toHaveBeenCalledWith(
                expect.stringContaining('output/test.txt'),
                'test content',
                'utf8',
            );
        });
    });

    describe('generateNthTermFilename', () => {
        it('should generate correct filename for nth term', () => {
            expect(generateNthTermFilename(5)).toBe('Divisors and sum of 5th term.txt');
            expect(generateNthTermFilename(1)).toBe('Divisors and sum of 1th term.txt');
        });
    });

    describe('generateMinDivisorsFilename', () => {
        it('should generate correct filename for minimum divisors', () => {
            expect(generateMinDivisorsFilename(6)).toBe('The first triangle number 6.txt');
            expect(generateMinDivisorsFilename(1)).toBe('The first triangle number 1.txt');
        });
    });
});
