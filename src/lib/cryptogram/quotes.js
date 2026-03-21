const quotes = {
  quotes: [
    {
      text: 'My mom used to say today is a great day for a great day.',
      author: 'Angela Lopez\nFrom "The Rookie"',
      tags: ['entertainment'],
    },
    {
      text: 'Get that woman out of your house.',
      author: 'Wade Grey\nFrom "The Rookie"',
      tags: ['entertainment'],
    },
    {
      text: 'I thought Charlie was a guy.',
      author: 'Angela Lopez\nFrom "The Rookie"',
      tags: ['entertainment'],
    },
    {
      text: 'I love Rookie Day. It’s Christmas and the Purge in one.',
      author: 'Timothy Bradford\nFrom "The Rookie"',
      tags: ['entertainment'],
    },
    {
      text: 'Don’t make me pull the "buried alive" card.',
      author: 'Lucy Chen\nFrom "The Rookie"',
      tags: ['entertainment'],
    },
    {
      text: "The only way to show you I'm a good cop is to show you I'm a good cop.",
      author: 'Angela Lopez\nFrom "The Rookie"',
      tags: ['entertainment'],
    },
    {
      text: 'I would shut that down so fast.',
      author: 'Celina Juarez\nFrom "The Rookie"',
      tags: ['entertainment'],
    },
    {
      text: "In my mind, I'm hitting you right now.",
      author: 'Lucy Chen\nFrom "The Rookie"',
      tags: ['entertainment'],
    },
    {
      text: 'Nothing like a traumatic event to make you realize that your life is empty.',
      author: 'Pam\nFrom "The Rookie"',
      tags: ['entertainment'],
    },
    {
      text: 'I just found out this morning that Bailey has been dead more than once.',
      author: 'John Nolan\nFrom "The Rookie"',
      tags: ['entertainment'],
    },
    {
      text: 'Walking on water and developing software from a specification are easy if both are frozen.',
      author: 'Edward V Berard',
      tags: ['programming'],
    },
    {
      text: 'Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter.',
      author: 'Eric S. Raymond',
      tags: ['programming'],
    },
    {
      text: 'Talk is cheap. Show me the code.',
      author: 'Linus Torvalds',
      tags: ['programming'],
    },
    {
      text: 'In God we trust. All others must bring data.',
      author: 'W. Edwards Demming',
      tags: ['programming'],
    },
    {
      text: 'In theory, theory and practice are the same. In practice, they’re not.',
      author: 'Yoggi Berra',
      tags: ['programming'],
    },
    {
      text: 'You can’t have great software without a great team, and most software teams behave like dysfunctional families.',
      author: 'Jim McCarthy',
      tags: ['programming'],
    },
    {
      text: 'The best programmers are not marginally better than merely good ones. They are an order-of-magnitude better, measured by whatever standard: conceptual creativity, speed, ingenuity of design, or problem-solving ability.',
      author: 'Randall E. Stross',
      tags: ['programming'],
    },
    {
      text: 'People think that computer science is the art of geniuses but the actual reality is the opposite, just many people doing things that build on each other, like a wall of mini stones.',
      author: 'Donald Knuth',
      tags: ['programming'],
    },
    {
      text: 'Most of you are familiar with the virtues of a programmer. There are three, of course: laziness, impatience, and hubris.',
      author: 'Larry Wall',
      tags: ['programming'],
    },
    {
      text: 'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.',
      author: 'Linus Torvalds',
      tags: ['programming'],
    },
    {
      text: 'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.',
      author: 'Martin Golding',
      tags: ['programming'],
    },
    {
      text: 'Nine people can’t make a baby in a month.',
      author: 'Fred Brooks',
      tags: ['programming'],
    },
    {
      text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
      author: 'Martin Fowler',
      tags: ['programming'],
    },
    {
      text: 'Programming is like sex. One mistake and you have to support it for the rest of your life.',
      author: 'Michael Sinz',
      tags: ['programming'],
    },
    {
      text: 'If builders built buildings the way programmers wrote programs, then the first woodpecker that came along would destroy civilization.',
      author: 'Gerald Weinberg',
      tags: ['programming'],
    },
    {
      text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
      author: 'Brian W. Kernighan',
      tags: ['programming'],
    },
    {
      text: 'Some people, when confronted with a problem, think "I know, I\'ll use regular expressions." Now they have two problems.',
      author: 'Jamie Zawinski',
      tags: ['programming'],
    },
    {
      text: 'You can use an eraser on the drafting table or a sledgehammer on the construction site',
      author: 'Frank Lloyd Wright',
      tags: ['programming'],
    },
    {
      text: 'The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.',
      author: 'Tom Cargill',
      tags: ['programming'],
    },
    {
      text: 'There are only two kinds of languages: the ones people complain about and the ones nobody uses.',
      author: 'Bjarne Stroustrup',
      tags: ['programming'],
    },
    {
      text: "It's all talk until the code runs.",
      author: 'Ward Cunningham',
      tags: ['programming'],
    },
    {
      text: 'Given enough eyeballs, all bugs are shallow.',
      author: 'Linus Torvalds',
      tags: ['programming'],
    },
    {
      text: 'A clever person solves a problem. A wise person avoids it.',
      author: 'Albert Einstein',
      tags: ['programming'],
    },
    {
      text: 'Being a good software engineer is 3% talent, 97% not being distracted by the internet.',
      author: 'Unknown',
      tags: ['programming'],
    },
    {
      text: 'Any sufficiently advanced technology is indistinguishable from magic.',
      author: 'Arthur C. Clarke',
      tags: ['programming'],
    },
    {
      text: "A ship in port is safe, but that's not what ships are built for.",
      author: 'Grace Hopper',
      tags: ['programming'],
    },
    {
      text: 'The imposter syndrome is real. Luckily, it goes away.',
      author: 'Kimber Lockhart',
      tags: ['programming'],
    },
    {
      text: 'Know how to learn. Then, want to learn.',
      author: 'Katherine Johnson',
      tags: ['programming'],
    },
    {
      text: 'Never trust a computer you can’t throw out a window.',
      author: 'Steve Wozniak',
      tags: ['programming'],
    },
    {
      text: 'When in doubt, use brute force.',
      author: 'Ken Thompson',
      tags: ['programming'],
    },
    {
      text: 'Once a new technology starts rolling, if you’re not part of the steamroller, you’re part of the road.',
      author: 'Stewart Brand',
      tags: ['programming'],
    },
    {
      text: 'The most disastrous thing that you can ever learn is your first programming language.',
      author: 'Alan Kay',
      tags: ['programming'],
    },
    {
      text: 'Optimism is an occupational hazard of programming. Feedback is the treatment.',
      author: 'Kent Beck',
      tags: ['programming'],
    },
    {
      text: 'The function of good software is to make the complex appear to be simple.',
      author: 'Grady Booch',
      tags: ['programming'],
    },
    {
      text: "I'm not a great programmer. I'm just a good programmer with great habits.",
      author: 'Kent Beck',
      tags: ['programming'],
    },
  ],
};

/**
 * Retrieves a random quote from the 'quotes' array that includes at least one of the specified tags.
 * Defaults to filtering for quotes tagged with 'programming' if no tags are provided.
 *
 * @param {string[]} tags An array of tags to filter quotes by (e.g., ['programming', 'javascript']).
 * Defaults to ['programming'].
 * @returns {object} A random quote object that matches one or more tags, or null if no matching quote is found.
 */
export function getRandomQuote(tags = ['programming']) {
  // 1. Filter the quotes array to only include quotes that contain at least one of the input tags
  const taggedQuotes = quotes.quotes.filter((quote) => {
    // Ensure the quote has tags and that the quote's tags array has some intersection with the input tags array.
    // Array.prototype.some() checks if at least one element in the 'tags' array satisfies the condition.
    return quote.tags && tags.some((tag) => quote.tags.includes(tag));
  });

  // 2. Check if any quotes were found
  if (taggedQuotes.length === 0) {
    console.warn(
      `No quotes found matching any of the tags: ${tags.join(', ')}`,
    );
    return null;
  }

  // 3. Select a random quote from the filtered array
  const randomIndex = Math.floor(Math.random() * taggedQuotes.length);
  return taggedQuotes[randomIndex];
}

export { quotes };
