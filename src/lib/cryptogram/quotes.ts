export interface Quote {
  text: string;
  author: string;
  tags: string[];
}

const quotesDataPromise = import('./quotes.json');

/**
 * Dynamically loads quotes via module import and returns a random matching quote.
 */
export async function getRandomQuote(
  tags: string[] = ['programming'],
): Promise<Quote> {
  const { default: data } = await quotesDataPromise;
  const quotesList = (data as { quotes: Quote[] }).quotes;
  const taggedQuotes = quotesList.filter((quote) => {
    return quote.tags && tags.some((tag) => quote.tags.includes(tag));
  });

  if (taggedQuotes.length === 0) {
    throw new Error(
      `No quotes found matching any of the tags: ${tags.join(', ')}`,
    );
  }

  const randomIndex = Math.floor(Math.random() * taggedQuotes.length);
  const randomQuote = taggedQuotes[randomIndex];

  if (!randomQuote) {
    throw new Error("Couldn't find quote");
  }

  return randomQuote;
}
