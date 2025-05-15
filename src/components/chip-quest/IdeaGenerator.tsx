'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { generateChipQuestIdeas, type ChipQuestIdeasOutput } from '@/ai/flows/chip-quest-ideas';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const ideaFormSchema = z.object({
  prompt: z.string().min(5, { message: 'Prompt must be at least 5 characters long.' }).max(200, { message: 'Prompt must be 200 characters or less.' }),
});

type IdeaFormValues = z.infer<typeof ideaFormSchema>;

const IdeaGenerator = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [generatedIdeas, setGeneratedIdeas] = useState<ChipQuestIdeasOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<IdeaFormValues>({
    resolver: zodResolver(ideaFormSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const onSubmit: SubmitHandler<IdeaFormValues> = async (data) => {
    setIsLoading(true);
    setGeneratedIdeas(null);
    setError(null);
    try {
      const result = await generateChipQuestIdeas({ prompt: data.prompt });
      setGeneratedIdeas(result);
    } catch (e) {
      console.error(e);
      setError('Failed to generate ideas. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 p-4 border border-border rounded-lg bg-card shadow-sm">
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-lg font-heading text-primary/90">Your Idea Prompt</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="e.g., 'A hidden level based on old internet forums'" 
                    {...field}
                    className="text-base focus:border-primary"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full font-heading text-lg">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Generating...
              </>
            ) : (
              <>
                <Wand2 className="mr-2 h-5 w-5" />
                Generate Ideas
              </>
            )}
          </Button>
        </form>
      </Form>

      {error && (
        <Alert variant="destructive">
          <AlertTitle className="font-heading">Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {generatedIdeas && (
        <Card className="shadow-md border-border">
          <CardHeader>
            <CardTitle className="text-2xl font-heading text-primary/90">AI Generated Ideas</CardTitle>
            <CardDescription>Based on your prompt: "{form.getValues('prompt')}"</CardDescription>
          </CardHeader>
          <CardContent>
            <Textarea
              readOnly
              value={generatedIdeas.ideas}
              className="min-h-[150px] text-base bg-secondary/20 border-dashed"
              rows={8}
            />
             <p className="text-xs text-muted-foreground mt-2 text-center">Note: AI generated content may require refinement.</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default IdeaGenerator;
