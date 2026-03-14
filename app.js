import OpenAI from "openai";
import readline from "readline";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Paste your resume:\n", async (resume) => {

  console.log("\nAnalyzing resume using LLM...\n");

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are an expert recruiter analyzing resumes."
      },
      {
        role: "user",
        content: `Analyze this resume and give improvement suggestions:\n${resume}`
      }
    ]
  });

  console.log(response.choices[0].message.content);

  rl.close();
});
