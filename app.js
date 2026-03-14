console.log("LLM Resume Analyzer Project");

const resume = `
Computer Engineering student skilled in React, Node.js and backend APIs.
Built a task management system and event registration platform.
`;

function analyzeResume(text) {
    console.log("\nAnalyzing resume...\n");
    console.log(text);

    console.log("\nSuggestions:");
    console.log("- Add measurable achievements");
    console.log("- Include GitHub project links");
    console.log("- Highlight backend technologies used");
}

analyzeResume(resume);
