export default {
  collectCoverageFrom: ["**/*.{js,ts,tsx}", "!**/node_modules/**"],
  coverageDirectory: "coverage",
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["node_modules", "build", "cypress"],
};
