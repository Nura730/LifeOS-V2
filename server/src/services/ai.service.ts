import OpenAI from "openai"

const openai =
  new OpenAI({
    apiKey:
      process.env.OPENAI_API_KEY,
  })

export const generateAIReflection =
  async (
    content: string,
    mood: number
  ) => {
    const prompt = `
You are an advanced behavioral performance coach.

Analyze this user reflection and emotional state.

Mood Score: ${mood}/10

Reflection:
${content}

Provide:
- behavioral insight
- emotional interpretation
- productivity coaching
- execution advice

Keep response under 120 words.
`

    const completion =
      await openai.chat.completions.create(
        {
         model: "gpt-3.5-turbo",

          messages: [
            {
              role: "system",
              content:
                "You are an elite behavioral intelligence coach.",
            },

            {
              role: "user",
              content:
                prompt,
            },
          ],
        }
      )

    return completion
      .choices[0]
      .message.content
  }