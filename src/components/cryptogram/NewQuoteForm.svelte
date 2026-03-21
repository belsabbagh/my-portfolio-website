<script>
    import { quotes } from "../core/quotes";

    function submitQuote(e) {
        e.preventDefault();
        const text = e.target.quote.value;
        const author = e.target.author.value;
        quotes.push({ text, author });

        e.target.reset();
    }
</script>

<form onsubmit={submitQuote}>
    <label for="quote">Quote</label>
    <textarea name="quote" id="quote" cols="30" rows="5"></textarea>
    <label for="author">Author</label>
    <input type="text" name="author" id="author" />
    <button type="submit">Submit</button>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        max-width: fit-content;
        margin: auto;
    }
</style>
