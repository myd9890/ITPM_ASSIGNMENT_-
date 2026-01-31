# ITPM Assignment 01 - Swift Translator Test Suite

## Overview
This project contains a comprehensive automated test suite for the [Swift Translator](https://www.swifttranslator.com/) application. The tests validate the translation functionality from English phonetic Sinhala text to Sinhala script.

## Project Structure
```
├── tests/
│   └── example.spec.ts          # Main test file with 34+ test cases
├── playwright-report/           # Generated test reports
├── test-results/               # Test execution results
├── playwright.config.ts        # Playwright configuration
├── package.json                # Project dependencies
├── IT23271814_Assignment1_TestCases.xlsx  # Test case specifications
└── README.md                   # This file
```

## Technologies Used
- **Playwright** (v1.58.1) - End-to-end testing framework
- **Node.js** - JavaScript runtime
- **TypeScript** - Type-safe JavaScript

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/PrageeDG/ITPM-Assignment01.git
   cd ITPM-Assignment01
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run specific test file
```bash
npx playwright test tests/example.spec.ts
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### View test report
```bash
npx playwright show-report
```

## Test Coverage

The test suite includes **34 test cases** organized into three categories:

### Positive Functional Tests (Pos_Fun_0001 - Pos_Fun_0024)
Tests that verify successful translation of various Sinhala sentence structures:
- Greetings and names
- Simple statements and questions
- Polite requests
- Tense variations (present, past, future)
- Complex sentences with conditionals and contrasts
- Mixed English technical terms
- Punctuation and special formatting
- Multi-line and paragraph input

### Negative Functional Tests (Neg_Fun_0001 - Neg_Fun_0010)
Tests that verify the translator gracefully handles invalid or edge-case inputs:
- Joined words without spaces
- Heavy typos
- Slang and mixed abbreviations
- Random symbols
- Very long inputs
- Only numbers
- Empty input
- Emojis
- Excessive line breaks
- URLs mixed with text

### UI Tests (Pos_UI_0001)
Tests for user interface functionality:
- Clear button functionality

## Test Helpers

The test suite includes helper functions for common operations:

- **`waitForSinhalaToAppear(page)`** - Waits for Sinhala Unicode characters to appear on the page
- **`waitForExpectedText(page, expected)`** - Polls for expected translated text with timeout
- **`runTestWithStatus(testCaseName, fn)`** - Wraps tests to log pass/fail status

## Configuration

Playwright configuration can be modified in `playwright.config.ts`. Key settings:
- Base URL: `https://www.swifttranslator.com/`
- Timeout: 20 seconds for custom waits
- Browser: Chromium (default)

## Test Results

Test results are automatically generated in:
- `test-results/` - Detailed test execution results
- `playwright-report/` - HTML report with screenshots and traces

## Troubleshooting

### Tests timing out
- Increase timeout values in `waitForExpectedText()` calls
- Check if the website is responding
- Ensure stable internet connection

### Browser not found
- Run `npx playwright install` to install browsers
- Check Playwright version compatibility

### Text not being found
- Verify the expected Sinhala text matches the translator output
- Check Unicode character ranges are correct

## Contributing

When adding new test cases:
1. Follow the existing naming convention (Pos_Fun_XXXX, Neg_Fun_XXXX, etc.)
2. Use helper functions for consistency
3. Add descriptive test names and comments
4. Update this README with new test categories if needed

## License

ISC

## Repository

- **GitHub**: https://github.com/PrageeDG/ITPM-Assignment01
- **Issue Tracker**: https://github.com/PrageeDG/ITPM-Assignment01/issues
