// This file is machine-generated - changes may be lost.

'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating ideas for the "Chip Quest" game.
 *
 * - generateChipQuestIdeas - A function that generates game ideas based on a user prompt.
 * - ChipQuestIdeasInput - The input type for the generateChipQuestIdeas function.
 * - ChipQuestIdeasOutput - The return type for the generateChipQuestIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChipQuestIdeasInputSchema = z.object({
  prompt: z.string().describe('A prompt to inspire ideas for the Chip Quest game.'),
});
export type ChipQuestIdeasInput = z.infer<typeof ChipQuestIdeasInputSchema>;

const ChipQuestIdeasOutputSchema = z.object({
  ideas: z.string().describe('A list of ideas for the Chip Quest game.'),
});
export type ChipQuestIdeasOutput = z.infer<typeof ChipQuestIdeasOutputSchema>;

export async function generateChipQuestIdeas(input: ChipQuestIdeasInput): Promise<ChipQuestIdeasOutput> {
  return chipQuestIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'chipQuestIdeasPrompt',
  input: {schema: ChipQuestIdeasInputSchema},
  output: {schema: ChipQuestIdeasOutputSchema},
  prompt: `You are a game designer brainstorming ideas for a new game called "Chip Quest".\n\n  The user will provide a prompt to inspire you. Based on the prompt, generate a list of ideas for the game's theme, mechanics, or storyline.\n\n  Prompt: {{{prompt}}}`,
});

const chipQuestIdeasFlow = ai.defineFlow(
  {
    name: 'chipQuestIdeasFlow',
    inputSchema: ChipQuestIdeasInputSchema,
    outputSchema: ChipQuestIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
