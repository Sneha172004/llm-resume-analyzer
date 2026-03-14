const readline = require("readline");

console.log("LLM Resume Analyzer");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Paste your resume:\n", function(resume) {

  console.log("\nAnalyzing resume...\n");

  console.log("Resume:");
  console.log(resume);

  console.log("\nSuggestions:");
  console.log("- Add measurable achievements");
  console.log("- Mention backend technologies used");
  console.log("- Include GitHub project links");

  rl.close();
});
