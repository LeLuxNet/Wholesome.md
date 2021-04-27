# New Reddit-flavored Markdown

Markdown is the format in which content is written on Reddit. This is
a guide to Reddit's particular flavor of Markdown, updated for New
Reddit, and current as of September 19, 2018.

# About this document

Text-based content on Reddit &mdash; comments, self-posts, and otherwise &mdash;
is represented as a Reddit-specific variation of the [Markdown]
format, and that format has changed in [New Reddit][re], both in how it is
[parsed] and how it is [rendered]. This is a guide to Reddit-flavored
Markdown, explaining generally how to format content on New Reddit,
and specifically identifying areas where New Reddit-flavored Markdown
is different from Old Reddit-flavored markdown.

Those who exclusively submit content via the default ["Fancy Pants"
editor][fpe] on New Reddit are not exposed to the details described
here. One does not _need_ to know any of this information to use
Reddit &mdash; Fancy Pants is a rich text editor that provides all
the common formatting options like bold, italics, lists, etc.

Within, examples are presented as pairs showing first how the Markdown
is **written** in the editor, then as it is **rendered**, or presented
on the screen. Important *New Reddit notes* about differences between
New Reddit-flavored Markdown and Old Reddit-flavored markdown are
called out in italicized paragraphs marked with a crystal ball
(&#x1F52E;), and general *tips* with the fleur-de-lis (⚜️).

[Markdown]: https://en.wikipedia.org/wiki/Markdown
[re]: https://new.reddit.com
[rendered]: https://en.wikipedia.org/wiki/Rendering_(computer_graphics)
[parsed]: https://en.wikipedia.org/wiki/Parsing
[fpe]: https://new.reddit.com/submit

# Quick reference

This is a condensed cheat-sheet of common Markdown syntax. Read beyond
for excessive amounts of detail.

&#x200b;

| **Written** | **Rendered** |
|-|-|
| `_italic_` or `*italic*` | _italic_ |
| `__bold__` or `**bold**` | __bold__ |
| `___bold-italic___` or `***bold-italic***` | ___bold-italic___ |
| `~~strikethrough~~` | ~~strikethrough~~ |
| `>!spoilers!<` | >!spoilers!< |
| `^superscript` or `^(superscript)` | ^superscript |
| `` `code` `` | `code` |

&#x200b;

| **Written** | **Rendered** |
|-|-|
| `https://www.reddit.com` | https://www.reddit.com |
| `r/announcements` | r/announcements |
| `u/reddit` | u/reddit |

&#x200b;

---
&#x200b;

**Written**:

> `[link](https://redditinc.com)`

or

>     [link][1]
>
>     [1]: https://redditinc.com`

**Rendered**:

[](// r2hack - blockquote-reference definition doesn't work on r2 )

> [link][1]
>
>

[1]: https://example.com

&#x200b;

---
&#x200b;

**Written**:

>     # Heading 1
>     ## Heading 2

**Rendered**:

> # Heading 1
> ## Heading 2

&#x200b;

---
&#x200b;

**Written**:

>     - a
>     - b
>       1. c
>       2. d

**Rendered**:

> - a
> - b
>   1. c
>   2. d

&#x200b;

---
&#x200b;

**Written**:

>     > Lorem blockquote dolor sit amet, consectetur adipiscing elit.
>     > Sed ullamcorper enim libero, ut luctus lorem ultricies ut.
>     > Aenean sed nulla a mauris posuere aliquam bibendum id ipsum.
>     > Fusce non augue mollis, dictum libero sed, blockquote enim.

**Rendered**:

> > Lorem blockquote dolor sit amet, consectetur adipiscing elit.
> > Sed ullamcorper enim libero, ut luctus lorem ultricies ut.
> > Aenean sed nulla a mauris posuere aliquam bibendum id ipsum.
> > Fusce non augue mollis, dictum libero sed, blockquote enim.

&#x200b;

---
&#x200b;

**Written**:

>     | header | header | header | header |
>     |--------|:-------|-------:|:------:|
>     | stuff  | stuff  | stuff  | stuff  |

**Rendered**:

> | header | header | header | header |
> |--------|:-------|-------:|:------:|
> | stuff  | stuff  | stuff  | stuff  |

&#x200b;

---
&#x200b;

**Written** *(note the indentation)*:

>         fn main() {
>             println!("hey")
>         }

**Rendered**:

>     fn main() {
>         println!("hey")
>     }


# Where to use Markdown on Reddit

Markdown content can be submitted in a number of places on Reddit. The
primary uses of Markdown are in a post's _self-text_ (the body of a
text post) and in comments.

When you [submit] a text post or comment in New Reddit, by default
you are submitting non-Markdown content via the [WYSIWYG] "Fancy
Pants" editor (on desktop at least &mdash; the story may be different
on mobile platforms). If, instead, you click "Switch to markdown" on the post submission
screen, then you'll be submitting Markdown. Users might prefer Markdown over Fancy Pants for more precise control over their document, for access to occasional
[features that Fancy Pants doesn't support][fancy], or simply by
preference.

[submit]: https://www.reddit.com/submit
[WYSIWYG]: https://en.wikipedia.org/wiki/WYSIWYG

Other places that support Markdown include:

- Wikis &mdash; some subreddits have their own wikis, and there's a
  site-wide wiki.
  - e.g., https://www.reddit.com/r/funny/wiki/index
  - e.g., https://www.reddit.com/wiki/faq
- The subreddit submission text (the text that is displayed in Old
  Reddit when submitting a post to a particular subreddit).
- The New Reddit "text area" sidebar.
- Subreddit rules &mdash; these are displayed in a number of places,
  most prominently on the sidebar, but also on other pages.
  - e.g., https://www.reddit.com/r/funny/about/rules
  - e.g., https://www.reddit.com/r/funny/about/sidebar
- The "about" text on some user profiles in New Reddit - Presently in beta (as an
  [opt-in] feature).

[opt-in]: https://old.reddit.com/profile-beta-confirmation

There are significant differences in support of these latter cases
between Old Reddit and New Reddit, the old Markdown parser, and the
new Markdown parser. For details, see ["Differences in content support between Old Reddit and New Reddit"](#wiki_differences_in_content_support_between_old_reddit_and_new_reddit)


# Reddit-flavored Markdown


## Paragraphs and line breaks

_Paragraphs_ on Reddit are written as lines of text separated by blank
lines.

**Written**:

>     Far out in the uncharted backwaters of the unfashionable end of the
>     western spiral arm of the Galaxy lies a small unregarded yellow sun.
>
>     Orbiting this at a distance of roughly ninety-two million miles is an
>     utterly insignificant little blue green planet whose ape-descended
>     life forms are so amazingly primitive that they still think digital
>     watches are a pretty neat idea.
>
>     This planet has-or rather had-a problem, which was this: most of the
>     people on it were unhappy for pretty much of the time. Many solutions
>     were suggested for this problem, but most of these were largely
>     concerned with the movements of small green pieces of paper, which is
>     the movements of small green pieces of paper, which is odd because on
>     the whole it wasn't the small green pieces of paper that were
>     unhappy.

**Rendered**:

> Far out in the uncharted backwaters of the unfashionable end of the
> western spiral arm of the Galaxy lies a small unregarded yellow sun.
>
> Orbiting this at a distance of roughly ninety-two million miles is an
> utterly insignificant little blue green planet whose ape-descended
> life forms are so amazingly primitive that they still think digital
> watches are a pretty neat idea.
>
> This planet has-or rather had-a problem, which was this: most of the
> people on it were unhappy for pretty much of the time. Many solutions
> were suggested for this problem, but most of these were largely
> concerned with the movements of small green pieces of paper, which is
> the movements of small green pieces of paper, which is odd because on
> the whole it wasn't the small green pieces of paper that were
> unhappy.

Note that _line breaks_ are not displayed &mdash; that is, adjacent lines
are linked together to create a single paragraph. Line breaks
can be added explicitly by ending lines with two spaces, or with a
backslash (`\`).

**Written**  (*note the double spaces at the end of the first line*):

>     Love is the whole thing.  
>     We are only pieces.

**Rendered**:

> Love is the whole thing.  
> We are only pieces.

**Written**  (*note the slash placement and direction*):

>     Out beyond ideas of wrongdoing\
>     and rightdoing there is a field.\
>     I'll meet you there.

**Rendered**:

[](// r2hack )

> Out beyond ideas of wrongdoing  
> and rightdoing there is a field.  
> I'll meet you there.

&#x1F52E; _**New Reddit note**: Creating line breaks with a backslash only works in
New Reddit. While the backslash is clearer to read and write than two
spaces, if you need compatibility with Old Reddit, use two spaces to create your line breaks._

Paragraphs are separated by any number of blank lines, and those blank
lines are not themselves rendered; thus, one can't add an arbitrary
amount of space between paragraphs simply by adding extra blank lines.

**Written**:

>     Be empty of worrying.\
>     Think of who created thought!
>
>
>
>     Why do you stay in prison\
>     When the door is so wide open?

**Rendered**:

[](// r2hack )

> Be empty of worrying.  
> Think of who created thought!
>
>
>
> Why do you stay in prison  
> When the door is so wide open?

⚜️ _**Tip**: A trick for inserting blanks lines is to create a
paragraph containing nothing but ["non-breaking space"][nbsp]._

**Written**:

>     Be empty of worrying.\
>     Think of who created thought!
>
>     &nbsp;
>
>     Why do you stay in prison\
>     When the door is so wide open?

**Rendered**:

[](// r2hack )

> Be empty of worrying.  
> Think of who created thought!
>
> &nbsp;
>
> Why do you stay in prison  
> When the door is so wide open?

[nbsp]: https://en.wikipedia.org/wiki/Non-breaking_space

That `&nbsp;` is a kind of [HTML entity](#wiki_html_entities), useful for a variety
of "tricks" in Markdown.

## Basic text formatting

_Italic_ text is represented by surrounding text with either a single
asterisk (`*`) or underscore (`_`).

**Written**:

>     It is *error* only, and not _truth_, that shrinks from inquiry.

**Rendered**:

> It is *error* only, and not _truth_, that shrinks from inquiry.

_Bold_ text is represented by surrounding text with either double
asterisks (`**`) or double underscores (`__`).

**Written**:

>     It is **error** only, and not __truth__, that shrinks from inquiry.

**Rendered**:

> It is **error** only, and not __truth__, that shrinks from inquiry.

_Bold-italic_ text is represented by surrounding text with either
triple asterisks (`***`) or triple underscores (`___`).

**Written**:

>     It is ***error*** only, and not ___truth___, that shrinks from inquiry.

**Rendered**:

> It is ***error*** only, and not ___truth___, that shrinks from inquiry.

The previous examples emphasized a single word, but emphasis can span
multiple words as well.

Note that in the previous examples the emphasized words were
completely surrounded by stars or underscores. It is also possible to
emphasize only parts of words, _but only with stars_.

**Written**:

>     This is totally sub*der*ma**togly**phic.

**Rendered**:

> This is totally sub*der*ma**togly**phic.

_Strikethrough_ text is represented by surrounding text with
double-tildes (`~~`).

**Written**:

>     The greatest thing you'll ever learn is just to
>     ~~love~~ reddit and be ~~loved~~ reddited in return.

**Rendered**:

> The greatest thing you'll ever learn is just to
> ~~love~~ reddit and be ~~loved~~ reddited in return.

Spoilers can be hidden as _spoilertext_ by surrounding text with `>!`
and `!<`.

**Written**:

>     The greatest thing you'll ever learn is just to >!reddit and be reddited in return!<.

**Rendered**:

> The greatest thing you'll ever learn is just to >!reddit and be reddited in return!<.

_Superscript_ is represented by surrounding text in parentheses
preceded by a caret (`^`).

**Written**:

>     The greatest thing you'll ever learn is just to
>     reddit ^(and be reddited in return).

**Rendered**:

> The greatest thing you'll ever learn is just to
> reddit ^(and be reddited in return).

A single word can also be superscripted by preceding it with just a
caret.

**Written**:

>     The greatest thing you'll ever learn is just to
>     ^reddit and be ^reddited in return.

**Rendered**:

> The greatest thing you'll ever learn is just to
> ^reddit and be ^reddited in return.

&#x1F52E; _**New Reddit note**: There are significant differences in
the parsing of superscript between Old Reddit and New Reddit. Old
Reddit in particular sometimes fails to parse the parenthesized form
if it contains links (like `^(a [b](http://example.com))`). New
Reddit does not (yet) support multiple levels of superscript. And
there are bugs. In both. For maximum superscript compatibility between
Old and New Reddit, stick to the single-word, unparenthesized
superscript syntax and superscript every word, or alternately separate
words with either ["non-breaking space"][nbsp] (`&nbsp;`) or
["quarter-width space"][qws] (`&#x2005;`) HTML entities (the latter
allows for line-breaks in the superscript)._

**Written**:

>     The greatest thing you'll ever learn is just to
>     reddit ^and ^be ^reddited ^in ^return.

**Rendered**:

> The greatest thing you'll ever learn is just to
> reddit ^and ^be ^reddited ^in ^return.

**Written**:

>     The greatest thing you'll ever learn is just to
>     reddit ^and&#x2005;be&#x2005;reddited&#x2005;in&#x2005;return.

**Rendered**:

> The greatest thing you'll ever learn is just to
> reddit ^and&#x2005;be&#x2005;reddited&#x2005;in&#x2005;return.

And if your superscript contains links, then apply superscript
to the link text as well.

**Written**:

>     The greatest thing you'll ever learn is just to
>     reddit ^and [^be ^reddited](https://www.redditgifts.com) ^in ^return.

**Rendered**:

> The greatest thing you'll ever learn is just to
> reddit ^and [^be ^reddited](https://www.redditgifts.com) ^in ^return.

[qws]: https://www.fileformat.info/info/unicode/char/2005/index.htm


## Links

[URLs] beginning with "http://" ot "https://" are
automatically [hyperlinked], as are subreddit names and usernames.
The latter are known as _redditlinks_ and _userlinks_, respectively. Collectively
these are known as _autolinks_.

|**Written**|**Rendered**|
|-|-|
|`http://www.reddit.com`|http://www.reddit.com|
|`https://www.reddit.com`|https://www.reddit.com|
|`/r/announcements`|/r/announcements|
|`r/announcements`|r/announcements|
|`/u/reddit`|/u/reddit|
|`u/reddit`|u/reddit|

[URLs]: https://en.wikipedia.org/wiki/URL
[hyperlinked]: https://en.wikipedia.org/wiki/Hyperlink

⚜️ _**Tip**: Complex URLs can parse in unexpected ways as
autolinks. When you find a URL isn't linking correctly, you can
instead surround the link with angled brackets (`<`, `>`)._

**Written**:

> ```
> <http://example.com/foo/../bar..>
> ```

**Rendered**:

> <http://example.com/foo/../bar..>

Arbitrary text can be explicitly hyperlinked by surrounding it with
square brackets, followed by a URL in parenthesis. The link can
optionally be given a _title_, which is typically shown by the browser
when the user hovers their mouse over the link.

The title must be surrounded by single quotes, double quotes, or
parentheses.

[](// r2hack - the parenthesized case)

|**Written**|**Rendered**|
|-|-|
|`[Rumi](https://en.wikipedia.org/wiki/Rumi)`|[Rumi](https://en.wikipedia.org/wiki/Rumi)|
|`[Zappa](https://en.wikipedia.org/wiki/Frank_Zappa "Frank Zappa - Wikipedia")`|[Zappa](https://en.wikipedia.org/wiki/Frank_Zappa "Frank Zappa")|
|`[Gandhi](https://en.wikipedia.org/wiki/Mahatma_Gandhi 'Mahatma Gandhi - Wikipedia')`|[Gandhi](https://en.wikipedia.org/wiki/Mahatma_Gandhi 'Mahatma Gandhi - Wikipedia')|
|`[Twain](https://en.wikipedia.org/wiki/Mark_Twain (Mark Twain - Wikipedia))`|[Twain](https://en.wikipedia.org/wiki/Mark_Twain "Mark Twain - Wikipedia")|

&#x1F52E; _**New Reddit note**: Titles surrounded by parentheses are only
supported in New Reddit. For compatibility, use quotes._

Links may also be defined as _references_, outside of the paragraph.

**Written**:

>     [Very little] is needed to make a happy life;
>     it is all within yourself, in your [way of thinking][wot].
>
>     [Very little]: https://www.reddit.com/r/Meditation/
>     [wot]: https://www.reddit.com/r/ChangeMyView/

**Rendered**:

[](// r2hack - refs outside blockquotes)

> [Very little] is needed to make a happy life;
> it is all within yourself, in your [way of thinking][wot].

[Very little]: https://www.reddit.com/r/Meditation/
[wot]: https://www.reddit.com/r/ChangeMyView/

By default the reference name is the same as the text in brackets, but
the reference can be named explicitly within a second set of brackets,
as in `[way of thinking][wot]`. Like inline links, reference links can
have titles.

⚜️ _**Tip**: Reference-style links are especially useful for
decluttering text with many links._

**Written**:

>     Somewhere in [la Mancha][lm], in a place whose name I do not care to
>     remember, a gentleman lived not long ago, one of those who has a
>     [lance] and [ancient shield][as] on a shelf and keeps a [skinny nag][sn]
>     and a greyhound for racing.
>
>     [lm]: https://en.wikipedia.org/wiki/La_Mancha
>     [lance]: https://en.wikipedia.org/wiki/Holy_Lance "Holy Lance - Wikipedia"
>     [as]: http://myarmoury.com/feature_shield.html 'The Shield: An Abridged History of its Use and Development'
>     [sn]: https://en.wikipedia.org/wiki/Epona (Epona - Wikipedia)

**Rendered**:

[](// r2hack - refs outside blockquotes)

> Somewhere in [la Mancha][lm], in a place whose name I do not care to
> remember, a gentleman lived not long ago, one of those who has a
> [lance] and [ancient shield][as] on a shelf and keeps a [skinny nag][sn]
> and a greyhound for racing.

[lm]: https://en.wikipedia.org/wiki/La_Mancha
[lance]: https://en.wikipedia.org/wiki/Holy_Lance "Holy Lance - Wikipedia"
[as]: http://myarmoury.com/feature_shield.html 'The Shield: An Abridged History of its Use and Development'
[sn]: https://en.wikipedia.org/wiki/Epona (Epona - Wikipedia)

⚜️ _**Tip**: Note that links can only contain parentheses if
they are "balanced" &mdash; that is, if every "(" is later followed by ")".
To link to a URL with unbalanced parentheses, either [escape] the
parenthesis with backslash ("\\"), or use the alternate linking syntax,
enclosing the URL in matched angle brackets, "<" and ">"._

**Written**:

>     [Parentheses](https://en.wikipedia.org/wiki/\()

**Rendered**:

> [Parentheses](https://en.wikipedia.org/wiki/\()

**Written**:

>     [Parentheses](<https://en.wikipedia.org/wiki/(>)

**Rendered**:

> [Parentheses](<https://en.wikipedia.org/wiki/(>)

[escape]: https://en.wikipedia.org/wiki/Escape_character

On Reddit, links generally must include the [URI scheme], like
"https://", so instead of writing `[a](www.example.com)`, write
`[a](https://www.example.com)`.

[URI scheme]: https://en.wikipedia.org/wiki/Uniform_Resource_Identifier

The full set of prefixes accepted in URLs is "http://", "https://",
"ftp://", "mailto:", "git://", "steam://", "irc://", "news://",
"mumble://", "ssh://", "ircs://", "ts3server://", "/", "#".

## Headings

Section _headings_ have six levels and are written with leading hashes (`#`).

**Written**:

>     # Domain
>
>     ## Kingdom
>
>     ### Phylum
>
>     #### Class
>
>     ##### Order
>
>     ###### Family

**Rendered**:

> # Domain
>
> ## Kingdom
>
> ### Phylum
>
> #### Class
>
> ##### Order
>
> ###### Family

Level 1 and 2 headers can also be written by underlining the header
text with "=" and "-" respectively.

**Written**:

>     Domain
>     ======
>
>     Kingdom
>     -------

**Rendered**:

> Domain
> ======
>
> Kingdom
> -------

## Lists

Lists may be _unordered_ (bulleted) or _ordered_ (numbered).

Unordered lists consist of lines preceded by one of "-" or "*".

**Written**:

>     - Agamemnon
>     - The Libation Bearers
>     - Eumenides

**Rendered**:

> - Agamemnon
> - The Libation Bearers
> - Eumenides

**Written**:

>     * Agamemnon
>     * The Libation Bearers
>     * Eumenides

**Rendered**:

> * Agamemnon
> * The Libation Bearers
> * Eumenides

Unordered lists consist of numbered lines delimited by either "." or ")".

**Written**:

>     1. Agamemnon
>     2. The Libation Bearers
>     3. Eumenides

**Rendered**:

> 1. Agamemnon
> 2. The Libation Bearers
> 3. Eumenides

**Written**:

>     1) Agamemnon
>     2) The Libation Bearers
>     3) Eumenides

**Rendered**:

[](// r2hack )

> 1. Agamemnon
> 2. The Libation Bearers
> 3. Eumenides

&#x1F52E; _**New Reddit note**: Using ")" to define ordered lists only works
in New Reddit. For compatibility with Old Reddit use "."._

On Reddit, ordered lists must start with "1".

Besides the numbering, unordered and ordered lists are otherwise
generally parsed the same, so the remaining examples will use unordered
lists for simplicity.

Each individual entry in a list is called a _list item_. Items can have
any amount of space between them. Adding space can make complex list
items more readable while editing.

**Written**:

>     - Agamemnon
>
>     - The Libation Bearers
>
>
>     - Eumenides

**Rendered**:

> - Agamemnon
>
> - The Libation Bearers
>
>
> - Eumenides

List items may contain sublists.

**Written**:

>     - Homer
>       - The Illiad
>       - The Odyssey
>     - Aeschylus
>       - Agamemnon
>       - The Libation Bearers
>       - Eumenides

**Rendered**:

> - Homer
>   - The Illiad
>   - The Odyssey
> - Aeschylus
>   - Agamemnon
>   - The Libation Bearers
>   - Eumenides

Note that sublists of unordered list items must be preceded by at
least two spaces, while sublists of ordered list items must be
preceded by at least three spaces.

Lists may contain their own paragraphs, blockquotes, and other
types of content.

**Written**:

>     - First of all: Lorem ipsum dolor sit amet, consectetur adipiscing
>       elit.
>
>       > Fusce hendrerit, nunc quis rhoncus tristique, neque augue ornare
>       > enim, ut aliquam libero diam et ligula. Aliquam sagittis sem sed
>       > rutrum luctus. Nunc massa est, egestas eget massa id, lacinia
>       > pretium dui. Nam eget consequat eros, eget commodo urna.
>
>     - But secondly: Phasellus vitae libero sit amet orci tempor lacinia
>       sed at tellus. Curabitur sit amet nibh elit. Quisque pulvinar odio
>       sapien, et condimentum velit convallis et.
>
>       ### Lipsum facts
>
>       |Lorem|Ipsum|Dolor|
>       |-----|-----|-----|
>       |8    |1    |3    |
>       |3    |7    |8    |
>
>       Aenean at dui in sapien sagittis sodales.

**Rendered**:

> - First of all: Lorem ipsum dolor sit amet, consectetur adipiscing
>   elit.
>
>   > Fusce hendrerit, nunc quis rhoncus tristique, neque augue ornare
>   > enim, ut aliquam libero diam et ligula. Aliquam sagittis sem sed
>   > rutrum luctus. Nunc massa est, egestas eget massa id, lacinia
>   > pretium dui. Nam eget consequat eros, eget commodo urna.
>
> - But secondly: Phasellus vitae libero sit amet orci tempor lacinia
>   sed at tellus. Curabitur sit amet nibh elit. Quisque pulvinar odio
>   sapien, et condimentum velit convallis et.
>
>   ### Lipsum facts
>
>   |Lorem|Ipsum|Dolor|
>   |-----|-----|-----|
>   |8    |1    |3    |
>   |3    |7    |8    |
>
>   Aenean at dui in sapien sagittis sodales.

&#x1F52E; _**New Reddit note**: In Markdown, including in Old Reddit,
`+` can also be used to define unordered lists. As of this time,
New Reddit fails to parse such lists._

## Blockquotes

_Blockquotes_ provide a way to emphasize larger amounts of text,
typically used in response comments for quoting others' comments. They
are created by beginning a line with a right pointy-bracket (`>`).

**Written**:

>     > It's so hard to forget pain, but it's even harder to
>     remember sweetness. We have no scar to show for happiness.
>     We learn so little from peace.

**Rendered**:

> > It's so hard to forget pain, but it's even harder to
> remember sweetness. We have no scar to show for happiness.
> We learn so little from peace.

For simple quotes, it's sufficient just to begin the first line of a
paragraph with `>`, as above, and the whole thing will be blockquoted.

For more complex blockquotes, precede every line with `>`.

**Written**:

>     > - First of all: Lorem ipsum dolor sit amet, consectetur adipiscing
>     >   elit.
>     >
>     > - But secondly: Phasellus vitae libero sit amet orci tempor lacinia
>     >   sed at tellus. Curabitur sit amet nibh elit. Quisque pulvinar odio
>     >   sapien, et condimentum velit convallis et.
>     >
>     > > Fusce hendrerit, nunc quis rhoncus tristique, neque augue ornare
>     > > enim, ut aliquam libero diam et ligula. Aliquam sagittis sem sed
>     > > rutrum luctus. Nunc massa est, egestas eget massa id, lacinia
>     > > pretium dui. Nam eget consequat eros, eget commodo urna.
>     >
>     > ### Lipsum facts
>     >
>     > |Lorem|Ipsum|Dolor|
>     > |-----|-----|-----|
>     > |8    |1    |3    |
>     > |3    |7    |8    |
>     >
>     > Aenean at dui in sapien sagittis sodales.

**Rendered**:

> > - First of all: Lorem ipsum dolor sit amet, consectetur adipiscing
> >   elit.
> >
> > - But secondly: Phasellus vitae libero sit amet orci tempor lacinia
> >   sed at tellus. Curabitur sit amet nibh elit. Quisque pulvinar odio
> >   sapien, et condimentum velit convallis et.
> >
> > > Fusce hendrerit, nunc quis rhoncus tristique, neque augue ornare
> > > enim, ut aliquam libero diam et ligula. Aliquam sagittis sem sed
> > > rutrum luctus. Nunc massa est, egestas eget massa id, lacinia
> > > pretium dui. Nam eget consequat eros, eget commodo urna.
> >
> > ### Lipsum facts
> >
> > |Lorem|Ipsum|Dolor|
> > |-----|-----|-----|
> > |8    |1    |3    |
> > |3    |7    |8    |
> >
> > Aenean at dui in sapien sagittis sodales.


## Tables

*Tables* consist of a header row and any number of content rows.
Columns are separated by pipes (`|`), and the header row is separated
from the content rows by dashes (`-`).

**Written**:

>     | Ticker | Investment | Profit |
>     |--------|------------|--------|
>     | BTC    | $100       | $-50   |
>     | ETH    | $1000      | $-500  |
>     | DOGE   | $10000     | $-5000 |

**Rendered**:

> | Ticker | Investment | Profit |
> |--------|------------|--------|
> | BTC    | $100       | $-50   |
> | ETH    | $1000      | $-500  |
> | DOGE   | $10000     | $-5000 |

That second row of the table, the one filled with dashes, is the _marker row_,
and it determines the alignment of the text in the column. Columns in the marker row
beginning with `:` are left-aligned; columns ending with `:` are right-aligned;
columns beginning _and_ ending with `:` are center-aligned; columns containing all dashes
are default-aligned (left-aligned).

**Written**:

>     | Ticker | Investment | Profit |
>     |:-------|-----------:|:------:|
>     | BTC    | $100       | $-50   |
>     | ETH    | $1000      | $-500  |
>     | DOGE   | $10000     | $-5000 |

**Rendered**:

> | Ticker | Investment | Profit |
> |:-------|-----------:|:------:|
> | BTC    | $100       | $-50   |
> | ETH    | $1000      | $-500  |
> | DOGE   | $10000     | $-5000 |

Fortunately, columns don't have to be formatted so they line up with each other to work &mdash;
they can be messy.

**Written**:

>     | Ticker | Investment | Profit |
>     |:-|-:|:-:|
>     | BTC | $100 | $-50 |
>     | ETH | $1000 | $-500 |
>     | DOGE | $10000 | $-5000 |

**Rendered**:

> | Ticker | Investment | Profit |
> |:-|-:|:-:|
> | BTC | $100 | $-50 |
> | ETH | $1000 | $-500 |
> | DOGE | $10000 | $-5000 |

⚜️ _**Tip**: Tables can be written without the row-leading and -ending
pipe (`|`) characters, but the result can be surprising when the
parser has to guess whether the row is a table row or something else.
Leading and trailing pipes make it explicit you are writing a table._


## Code blocks and inline code

There are several ways to represent code in Markdown, which is always
rendered in a monospaced font and rendered exactly as written
&mdash; no Markdown is interpreted inside a region of code.

Short code snippets, _inline code_, can be embedded in paragraphs and
other text, and are delimited by opening and closing backticks (`` `
``).

**Written**:

>     We were wrong: `goto`\
>     is not considered harmful;\
>     `goto` wants to help.

**Rendered**:

[](// r2hack - linebreaks )

> We were wrong: `goto`  
> is not considered harmful;  
> `goto` wants to help.

Longer _code blocks_ can be represented in several ways. The first
is by indenting the entire block of code four spaces.

**Written**:

>         hashOut.data = hashes + SSL_MD5_DIGEST_LEN;
>         hashOut.length = SSL_SHA1_DIGEST_LEN;
>         if ((err = SSLFreeBuffer(&hashCtx)) != 0)
>             goto fail;
>         if ((err = ReadyHash(&SSLHashSHA1, &hashCtx)) != 0)
>             goto fail;
>         if ((err = SSLHashSHA1.update(&hashCtx, &clientRandom)) != 0)
>             goto fail;
>         if ((err = SSLHashSHA1.update(&hashCtx, &serverRandom)) != 0)
>             goto fail;
>         if ((err = SSLHashSHA1.update(&hashCtx, &signedParams)) != 0)
>             goto fail;
>             goto fail;
>         if ((err = SSLHashSHA1.final(&hashCtx, &hashOut)) != 0)
>             goto fail;

**Rendered**:

>     hashOut.data = hashes + SSL_MD5_DIGEST_LEN;
>     hashOut.length = SSL_SHA1_DIGEST_LEN;
>     if ((err = SSLFreeBuffer(&hashCtx)) != 0)
>         goto fail;
>     if ((err = ReadyHash(&SSLHashSHA1, &hashCtx)) != 0)
>         goto fail;
>     if ((err = SSLHashSHA1.update(&hashCtx, &clientRandom)) != 0)
>         goto fail;
>     if ((err = SSLHashSHA1.update(&hashCtx, &serverRandom)) != 0)
>         goto fail;
>     if ((err = SSLHashSHA1.update(&hashCtx, &signedParams)) != 0)
>         goto fail;
>         goto fail;
>     if ((err = SSLHashSHA1.final(&hashCtx, &hashOut)) != 0)
>         goto fail;

&#x1F52E; _**New Reddit note**: Indented code blocks are the only form of code
block that works on Old Reddit. Use them for compatibility._

Typing four spaces in front of every line in a code block is tedious
and error-prone. The easier way is to surround the entire block of
code with _code fences_. A code fence is a line beginning with three
or more backticks (`` ` ``) or three or more twiddlydoodles (`~`).

**Written**:

>     ```
>     if ((err = SSLHashSHA1.update(&hashCtx, &signedParams)) != 0)
>             goto fail;
>             goto fail;
>     ```

**Rendered**:

[](// r2hack - not using backticks)

>     if ((err = SSLHashSHA1.update(&hashCtx, &signedParams)) != 0)
>             goto fail;
>             goto fail;

**Written**:

>     ~~~
>     if ((err = SSLHashSHA1.update(&hashCtx, &signedParams)) != 0)
>             goto fail;
>             goto fail;
>     ~~~

**Rendered**:

[](// r2hack - not using twiddlies)

>     if ((err = SSLHashSHA1.update(&hashCtx, &signedParams)) != 0)
>             goto fail;
>             goto fail;

The opening and closing fence must match, both the character used, and
its repetitions.

⚜️ _**Tip**: When inline code itself contains a backtick, or a fenced
code block itself contains a code fence, the interior backticks and
fences can cause the code region to close early. In these cases, the
fences can be adjusted to accommodate the code. The rest of this
section is about dealing with corner cases._

Consider the following example.

**Written**:

>     ```
>
>     This code didn't work as expected:
>
>     ```
>     if ((err = SSLHashSHA1.update(&hashCtx, &signedParams)) != 0)
>             goto fail;
>             goto fail;
>     ```
>
>     But it tried its best.
>
>     ```

**Rendered**:

[](// r2hack - not using backticks )

>     This code didn't work as expected:
>
> if ((err = SSLHashSHA1.update(&hashCtx, &signedParams)) != 0)
>         goto fail;
>         goto fail;
>
>     But it tried its best.
>

This is a code fence inside of a code fence (i.e., a Markdown code block
containing a Markdown example), and it doesn't render as desired
&mdash; the code inside the interior code fence isn't rendered as code
at all. Instead, the code appears as regular text surrounded by two code
blocks.

This is an easy problem to solve because the code fence syntax has two
different delimiters, (`` ` ``) and (`~`), and it allows code blocks to
be surrounded by more than three delimiters. Just use more backticks in
the outer code fence, or use the other delimiter.

**Written**:

>     ````
>
>     This code didn't work as expected:
>
>     ```
>     if ((err = SSLHashSHA1.update(&hashCtx, &signedParams)) != 0)
>             goto fail;
>             goto fail;
>     ```
>
>     But it tried its best.
>
>     ````

**Rendered**:

[](// r2hack )

>
>     This code didn't work as expected:
>
>     ```
>     if ((err = SSLHashSHA1.update(&hashCtx, &signedParams)) != 0)
>             goto fail;
>             goto fail;
>     ```
>
>     But it tried its best.
>

**Written**:

>     ~~~
>
>     This code didn't work as expected:
>
>     ```
>     if ((err = SSLHashSHA1.update(&hashCtx, &signedParams)) != 0)
>             goto fail;
>             goto fail;
>     ```
>
>     But it tried its best.
>
>     ~~~

**Rendered**:

>
>     This code didn't work as expected:
>
>     ```
>     if ((err = SSLHashSHA1.update(&hashCtx, &signedParams)) != 0)
>             goto fail;
>             goto fail;
>     ```
>
>     But it tried its best.
>

There's a similar trick for inline code as well: inline code can be
surrounded by any number of backticks, and the opening and closing
must match. So if one needs to put a single backtick inside inline code
they can just surround the code with _two_ backticks, ala
``` ``this thing right here - ` - that's a backtick`` ```.

Of course there's one more tricky case here: what if your inline code
itself needs to begin or end with a backtick &mdash; e.g., you want to
illustrate how to write Markdown inline code within inline code? Just
writing _two_ backticks to open the inline code and a single
backtick to begin the inline code doesn't work because it looks like
inline code delimited by _three_ backticks: ````` ```example of inline
code``` `````. If you were to write just that, you would lose the interior
backticks:

| **Written** | **Rendered** |
|-|-|
| ```` ```example of inline code``` ```` | ```example of inline code``` |

Markdown gives one final escape hatch for these situations: _any
space around the inline code is removed_, which allows one to write
the inline code delimiters, space, then the textual backtick:

| **Written** | **Rendered** |
|-|-|
| ``` `` `example of inline code` `` ``` | `` `example of inline code` `` |

This situation admittedly arises most frequently for people writing
Markdown about Markdown (like me!). Hopefully you never encounter it.

Finally, what if you actually _want_ leading or trailing spaces in
your inline code? Well, you are very deep into the weeds. If
you actually find yourself in this situation, you're probably clever
enough to figure out a workaround.

## Thematic breaks

The _thematic break_, a.k.a. the "horizontal rule," is simply a
horizontal line drawn across the page. It can be used to create
visual separation between content. A thematic break is written as a
line containing three or more stars (`*`), dashes (`-`), or
underscores (`_`).

**Written**:

>     Here is a wistful story about grandpa.
>
>     ---
>
>     Here is a picture of a torpid donkey.

**Rendered**:

> Here is a wistful story about grandpa.
>
> ---
>
> Here is a picture of a torpid donkey.

**Written**:

>     Here is a real-life party parrot.
>
>     ***
>
>     Here is deceit, decay, and — ultimately — death.

**Rendered**:

> Here is a real-life party parrot.
>
> ***
>
> Here is deceit, decay, and — ultimately — death.

**Written**:

>     Here is a rusted barn door.
>
>     ___
>
>     Black coffee.

**Rendered**:

> Here is a rusted barn door.
>
> ___
>
> Black coffee.

# More tips and tricks

## Escaping Markdown syntax

_Escaping_ is a way to tell the parser not to interpret special
characters as Markdown, by preceding them with a backslash (`\`).

Sometimes one finds that the parser has interpreted their text in a
way that was unintended. This can happen, for example, if, in the
middle of a paragraph, a hyphen begins a new line.

**Written**:

>     I felt my lungs inflate with the onrush of scenery
>     - air, mountains, trees, people. I thought,
>     "This is what it is to be happy".

**Rendered**:

[](// r2hack - the syntactic error in this example doesn't happen on r2)

> I felt my lungs inflate with the onrush of scenery
>
> - air, mountains, trees, people. I thought,
> "This is what it is to be happy".

In this case the dash is meant to be part of the text, not the start
of a list. Escaping the dash with a backslash fixes the problem.

**Written**:

>     I felt my lungs inflate with the onrush of scenery
>     \- air, mountains, trees, people. I thought,
>     "This is what it is to be happy".

**Rendered**:

> I felt my lungs inflate with the onrush of scenery
> \- air, mountains, trees, people. I thought,
> "This is what it is to be happy".

Another common case where the need to escape arises
with parentheses in links. 

**Written**:

>     [Parenthesis](https://en.wikipedia.org/wiki/))

**Rendered**:

> [Parenthesis](https://en.wikipedia.org/wiki/))

This is supposed to be a link to the Wikipedia article about
parentheses ("<https://en.wikipedia.org/wiki/)>"), but instead it's a
link to "https://en.wikipedia.org/wiki/". Escaping the parenthesis in
the URL causes the parser to not treat it as the closing parenthesis of
the link syntax.

>     [Parenthesis](https://en.wikipedia.org/wiki/\))

**Rendered**:

> [Parenthesis](https://en.wikipedia.org/wiki/\))

## HTML entities

Markdown supports [HTML entities][he], like the relatively common
`&nbsp;` for "non-breaking space". These can be an "escape-hatch" to
write difficult-to-represent content. For example, `&nbsp;` is often
used to insert "empty" paragraphs, providing vertical whitespace where
Markdown doesn't otherwise allow.

In other cases, HTML entities are used to input characters that are
difficult to type, like those above the ASCII range in Unicode, or
characters that have no visual representation.

Some useful examples:

- A dash is inserted with `&mdash;`. This is a longer dash than the
  typical hyphen, and is the [correct character for separating clauses
  in sentences][emd].
- Various [non-ASCII whitespace characters][ws] can be used to insert
  whitespace where Markdown would otherwise not allow it. If you want
  to simply enter an arbitrary amount of space between two words, you
  can &mdash; e.g., by inserting multiple "em space" characters (`&#x2003;`).

[he]: https://developer.mozilla.org/en-US/docs/Glossary/Entity
[emd]: http://www.thepunctuationguide.com/em-dash.html
[ws]: http://jkorpela.fi/chars/spaces.html


## Tips for robots

During the transition we've seen some incompatibility arise in the
syntax that bots were using. Here are some notes from those experiences, as
well as some general info about automatic posting of Markdown.

(Quick plug: This section could use some help from bot authors!)

- In links, don't put spaces between the text (`[...]`) and the URL
  (`(http://example.com)`). This worked in Old Reddit but not
  New Reddit.

- Backslash-escape all parentheses in link URLs (not autolinks), like
  `[text](http://example.com/foo\(bar)`. Parentheses must be balanced
  or they will not be parsed as links, so simply escaping all
  parentheses is sufficient to make all links with parentheses parse
  correctly.

- Alternately, use the pointy-bracket syntax for link URLs
  (`[text](<http://example.com>)`, which accept unbalanced parens. In
  this case though you must URL-escape pointy-brackets, as `%3C` and
  `%3E`.

- If you post autolinks (raw URLs without the bracket syntax),
  consider surrounding them in pointy-brackets (`<` `>`) and
  URL-escaping any pointy-brackets within the URL as `%3C` and `%3E`. This
  will prevent any ambiguity in parsing, particularly at the end of
  autolinks. Note that even within brackets autolinks cannot contain
  spaces, so URL-escape _those_ as `%20`.

- There's just no way to get away from escaping _something_ while
  posting arbitrary links as a bot if you want all URLs to be parsed
  as expected. Details of link parsing are [in the spec][cmspec].

- The new parser and old parser treat HTML-escapes (a la `&nbsp;`)
  differently &mdash; the old one preserves them, in both text and
  links; the new one unescapes them during parsing so that clients
  (many of which are not web browsers) aren't exposed to them. This is
  true both in text and links and is specified as such by CommonMark.
  We don't understand the impact of this on bots, nor have any
  recommendations at this time.

- If there's any chance your superscript will contain links, write
  them by either superscripting every word or separating the
  superscripted words with a ["quarter-width space"][qws]. The nicer
  `^(...)` syntax can't be relied on in Old Reddit when combined
  with links.

[cmspec]: https://spec.commonmark.org/

# Reddit-flavored Markdown compatibility recommendations

These are a few recommendations for writing Markdown that is
compatible with Old Reddit markdown parsing (so long as the old
parser remains in use).

Some of the recommendations are "easy" because they have
equivalents that are as-good in Old Reddit; some are "unfortunate"
because they, well, favor less nice syntax.

Presumably the old parser will be phased out completely at some point
(today it's only used on the old web client &mdash; mobile clients use the
new), at which point these recommendations may change.

On the other hand, if you don't care about formatting on Old Reddit,
then go ahead and do the opposite of all these suggestions!

## Easy compatibility recommendations

- Use quotes for link titles like `[text](http://example.com "title")`
  (as opposed to parentheses for link titles). Old Reddit does not
  support parentheses here.

- Begin and end table columns with pipe characters (`|`). They are
  technically optional, but there are occasional surprise parses when
  they are not used. Both Old Reddit and New Reddit have different
  quirks.

- Delimit ordered lists with dots instead of parentheses &mdash; e.g., (`1. First`).
  Old Reddit does not support the latter.

- Delimit unordered lists with `-` or `*`, not `+`. New Reddit presently
  does not support the latter.

## Unfortunate compatibility recommendations

- Use double spaces instead of a backslash to indicate hard line breaks.
  Old Reddit only supports double spaces.

- Use indented code blocks instead of code fences. Old Reddit only
  supports indented code blocks.

- Don't use nested emphasis like `_this is __really__ important_`.
  Yep, you guessed it: it doesn't work in Old Reddit.

- Don't use multiple levels of superscript (a.k.a. "towers"). It doesn't
  work in New Reddit (at least not yet).

- Continue using common hacks to make superscript support spaces, like
  superscripting every word or joining them with exotic Unicode space
  characters (either `&nbsp;` or `&#x200b;`. Avoid the parenthesized
  superscript syntax, `^(...)` &mdash; it often is misparsed in Old
  Reddit.

# More about Markdown at Reddit

New Reddit's markdown parser, snoomark, is a variation of
[GitHub-flavored Markdown (GFM)][gfm], based on [CommonMark], with the
GFM table and autolink extensions, as well as a modified
strikethrough extension. It also includes Reddit-specific extensions
and Reddit-specific compatibility quirks that deviate from CommonMark.

snoomark is a downstream project of [comrak], which is in turn a
re-implementation of [cmark-gfm], GitHub's CommonMark implementation
with GitHub extensions (GFM), which is in turn downstream of [cmark],
the CommonMark reference implementation. snoomark itself is not (yet)
open source, but changes to comrak are regularly merged into snoomark.

[gfm]: https://github.github.com/gfm/
[CommonMark]: http://commonmark.org/
[comrak]: https://github.com/kivikakk/comrak
[cmark-gfm]: https://github.com/github/cmark
[cmark]: https://github.com/commonmark/cmark

As more Redditors have begun using the post creation and formatting
tools on New Reddit, the philosophy around Markdown support has
fluctuated &mdash; originally, the plan was to move to something
approaching CommonMark and drop all compatibility with Old Reddit
"quirks"; but as the rollout proceeded that position softened, and a
number of compatibility quirks were added to the new parser.

At this time it is not expected that many further compatibility quirks
will be added to New Reddit: it's more likely that Old Reddit will be
upgraded to the new parser. In that scenario, there will be some
amount (hopefully small) of old content that no longer renders
correctly due to parsing differences.

That said, future directions will continue to be evaluated as the rollout
continues and bugs are reported.

Markdown rendering in New Reddit is notably different from Old
Reddit, and from most Markdown-consuming websites for that matter, in that it is not
rendered directly to HTML from Markdown, but through an intermediate,
Reddit-proprietary document format called RTJSON ("Rich Text JSON").
This format is designed to be easily consumed and rendered by all
Reddit clients, web and mobile, whereas in Old Reddit, mobile
clients had various challenges rendering Markdown content
consistently. Details of the RTJSON format are currently unpublished.

# Rationale for transitioning to CommonMark

The new parser was created because the old parser was hard to maintain,
security-critical C code, and adding new features to it was prohibitively
difficult. The new parser is not written in C and so is more
maintainable. Furthermore, the redesign called for new features and
the future ability to add new features.

Development velocity on the old parser was effectively 0. The new
parser receives changes as needed, and most changes don't require a
security review.

The redesign was also an opportunity to upgrade Reddit's ancient
markdown dialect to a modern standards-based CommonMark dialect, where
it can receive the benefits of ongoing upstream development and
standards work, and catch up with approximately 6 years of Markdown's
evolution (whereas Old Reddit's parser was stagnant). This decision of
course has resulted in many complaints that certain Old Reddit
syntaxes don't work in New Reddit, but we have gradually added
backwards compatibility for the most common quirks.

New Reddit Markdown further receives several new niceties inherited
from CommonMark, most notably line breaks with a terminating
backslash and code blocks demarcated by fences instead of indents. During the transition period, of
course those aren't compatible with Old Reddit, but eventually we
would expect them to be "safe" to use without worrying too much about
compatibility &mdash; the mobile clients already understand the new
parser's output; it's just the old web client that doesn't (yet).

Probably the only serious alternative to upgrading to CommonMark would
have been to do a complete rewrite of the old parser in a safe
language, preserving all the Reddit-specific quirks. Presumably, that 
was not seen as desirable, both because of the inordinate amount of 
effort required and because it would have suited nobody but Reddit. The new parser,
on the other hand, is based on an actively maintained CommonMark parser, which is useful
for anybody who wants to parse CommonMark. In the long run, behaving
more like CommonMark will provide a more seamless experience for those
using CommonMark elsewhere, mostly those who are technically adept,
since the vast majority of New Reddit users are using the Fancy Pants
editor. Now Reddit is able to participate in the upstream CommonMark
community (and has already affected upstream implementations and the
CommonMark specification). And again, the combination of a maintainable codebase and
having a standard to conform to means that Reddit can keep its parser up
to date with standards as they evolve.

# Differences between Old Reddit Markdown, New Reddit Markdown, and CommonMark

New Reddit-flavored Markdown inherits from both Old Reddit-flavored
Markdown and CommonMark / GFM, but also differs from both. This
section lists known differences in New Reddit-flavored Markdown from
Old Reddit-flavored Markdown and CommonMark / GFM. It is not
comprehensive.

Differences from Old Reddit are often inherited from CommonMark. Note
that for those who wish their content to render accurately for Old
Reddit users, one may choose not to use these features. (See also ["Reddit-flavored Markdown compatibility recommendations"](#wiki_reddit-flavored_markdown_compatibility_recommendations).)
Differences from CommonMark are often to support Old Reddit Markdown
"quirks". Differences from either may or may not be considered bugs,
depending on who is doing the considering and when.

## Reddit-specific extensions

- Spoilertext &mdash; Spoilertext (`>!spoiler!<`) is Reddit-specific.

- Superscript &mdash; There's no superscript standard, and Reddit
  has its own syntax which continues to be supported (`^`, `^(...)`).

- Strikethrough &mdash; Reddit's syntax is different from
  the GFM extension.

- Redditlinks and userlinks &mdash; Names of subreddits and
  Reddit users, prefixed with `/r/`, `r/`, `/u/`, and `u/`, are
  automatically linked.

- Rich text media &mdash; Reddit supports submissions containing
  images, videos, and gifs, and these are encoded into the Markdown
  with a customized inline image syntax. This feature is only
  supported by the Fancy Pants editor &mdash; the syntax would be
  prohibitively difficult to write manually at present.

- Paragraphs containing only a single zero-width space (`&#x200b;`)
  are empty paragraphs (the ZWS is removed in rendering). This
  supports the Fancy Pants editor.

## New features inherited from CommonMark

- Ordered lists can be written with parentheses, where Old Reddit
  only supported ordered lists with periods: (`1)` vs. `1.`).

- Hard line breaks can be written by terminating lines with `\`, where
  Old Reddit only supported this by terminating lines with a
  double-space. This syntax is more readable and less surprising than
  the double-space syntax.

- [Code blocks][code] can be written with surrounding fences, instead of
  indentation (````` ``` ````` or `~~~`). This popular syntax is arguably
  more writable and readable than the indentation syntax.

## Differences from Old Reddit-flavored Markdown

- The parenthesized superscript syntax (`^(super duper)`) is parsed
  more reliably (e.g., superscript containing links works correctly)
  and once the old parser is phased out, should generally be
  preferred to the non-parenthesized (`^super`) syntax.

- Superscript parses slightly differently in corner-cases &mdash; e.g.,
  `^(^b)`.

- Multiple nested levels of superscript are rendered as a single
  level of superscript. This may be fixed in the future.

  - Ticket: CREATE-1599

- New Reddit does not correctly parse non-parenthesized superscript when
  it precedes a word that is succeeded by a closing square bracket,
  closing parentheses, or closing emphasis.

  - Ticket: CREATE-2474

- Unescaped parentheses in links must be balanced.

  - Previous discussions:
    [1](https://new.reddit.com/r/redesign/comments/8cyf5a/download_the_single_art_link_doesnt_work_markdown/)
  - Ticket: CREATE-1662

- Sublists require at least two spaces of indentation for unordered
  lists and three for ordered lists, where Old Reddit only required
  one space.

  - Previous discussions:
    [1](https://new.reddit.com/r/redesign/comments/8eaagg/markdown_rules_for_lists_dont_follow_the_same/)
  - Ticket: CREATE-1702

- The first table header cell cannot be empty if it is not preceded by
  a leading pipe character (`|`) &mdash; e.g., the following does not work:

  [](// r2hack - r2 won't render this code block w/o help, the blockquote, and the extra lines)

  >     (this line is a hack to open an Old Reddit code block, not part of the example)
  >
  >      |B|C
  >     -|-|-
  >     d|e|f

  - Previous discussions:
    [1](https://new.reddit.com/r/redesign/comments/8edfxx/redesign_is_displaying_some_tables_wrong/)
  - Ticket: CREATE-1701

- The first table "marker" cell cannot be a dash followed by a space if
  it is not preceded by a pipe character (`|`) &mdash; it will instead be interpreted
  as the beginning of a list. For example, the following does not work:

  [](// r2hack - r2 won't render this code block w/o help, the blockquote, and the extra lines)

  >     (this line is a hack to open an Old Reddit code block, not part of the example)
  >
  >     A | B
  >     - | -
  >     c | d

  - Previous discussions:
    [1](https://new.reddit.com/r/redesign/comments/8eter9/table_not_parsed_on_redesign_if_second_row_starts/)
  - Ticket: CREATE-1708

- Spoilertext does not need to be ["flanking"]; i.e., the spoilertext delimiters
  (`>!` and `!<`) will be parsed as such regardless of their adjacency to
  whitespace and punctuation.

  - Previous discussions:
    [1](https://www.reddit.com/r/redesign/comments/8s0qyy/old_inline_spoiler_bug_still_around/)
  - Ticket: CREATE-1534

- Blockquote spoilertext is not supported &mdash; that is, blockquotes
  written with `>!` instead of `>`.

  - Ticket: CREATE-1723

- Link syntax does not allow space between the square brackets (`[]`) and
  the parentheses (`()`).

  - Previous discussions:
    [1](https://www.reddit.com/r/redesign/comments/86qve1/imgur_album_links_dont_work_embedded_or_stand/)
    [2](https://new.reddit.com/r/redesign/comments/8bhpca/hyperlinks_with_space_between_both_elements_are/)
  - Ticket: CREATE-1438

- More than two tildes (`~`) in strikethrough syntax &mdash; e.g., `a
  ~~~b~~~ c` &mdash; are treated differently: in Old Reddit the extras are
  not consumed, whereas in New Reddit they are. Additionally, in New Reddit,
  more than two tildes at the beginning of a line can be interpreted as [code fences][code].

- Lines containing nothing but hashes (`#`) are handled differently:
  in Old Reddit, such lines are entirely consumed and not displayed;
  in New Reddit, 6 or fewer hashes are rendered as an empty header, and
  more than 6 are rendered as a paragraph containing hashes.

- Some corner cases around parsing of links containing spaces,
  specifically with respect to their interaction with link titles, are
  different.

- There are other cases of link-parsing differences, some considered
  bugs, and some undecided.

  - Previous discussions:
    [1](https://www.reddit.com/r/redesign/comments/8si6l7/redesigns_markdown_does_not_parse_all_urls)
  - Ticket: CREATE-2206

- Some cases of "word-interior" bold+italic (a.k.a. strong+emph)
  parsing are different. For example, Old Reddit will parse `a**_b_**c` as
  bold+italic while CommonMark doesn't.

  - Previous discussions:
    [1](https://new.reddit.com/r/redesign/comments/8by4s3/small_bug_that_breaks_the_fancy_pants_editor/)

- Ordered lists must start from "1". Other start numbers are not
  supported. Old Reddit parsed other start numbers, though it
  always rendered lists as starting from 1.

- New Reddit consistently allows nested emphasis, like `_a __b c b__ d_`,
  whereas Old Reddit misparses this in many cases.

- Links inside links are parsed differently &mdash; e.g.,
  `[[a](http://example.com)](http://example.com)`

- New Reddit link text doesn't allow spoilertext inside link text.

  - Ticket: CREATE-2623

- Unordered lists demarcated with `+` do not work in New Reddit. This
  is in violation of the CommonMark spec.

  - Ticket: CREATE-2403

- Headings cannot contain arbitrary _inlines_ like italics in New
  Reddit. This is in violation of the CommonMark spec.

  - Ticket: CREATE-2668

- Reddit applies a "prefix whitelist", mostly consisting of URI
  schemes, to all links. In New Reddit those prefixes can be succeeded
  by whitespace whereas in Old Reddit they could not. E.g.,
  `[a](http:// example.com)` is allowed in New Reddit.

- Similarly, New Reddit allows the URL prefix alone as a valid URL,
  while Old Reddit requires the prefix to be followed by other characters.

- Paragraph content followed by a line that looks like an unordered
  list is interpreted as the close of a paragraph and the opening of
  an unordered list, whereas Old Reddit continued the paragraph.

- Reference link definitions can appear inside blockquotes.

- Inline code spans that contain backticks can be contained with any
  number of sequential backticks, whereas in Old Reddit, the outermost
  backticks need to be the longest string of backticks in the code
  span. ``` `` `code` `` ``` works in both, ``` ` ``code`` ` ``` only
  works in New Reddit.

- Nested block elements (like [lists] and [blockquotes][bq] and
  [tables]) can be opened on the same line as list items.

["flanking"]: https://github.github.com/gfm/#left-flanking-delimiter-run

## Differences from CommonMark / GFM

- Embedded images are not supported in Markdown mode, only in Fancy Pants mode.

- Superscript syntax is like Old Reddit, not comrak.

- Ordered lists must start from "1". Other start numbers are not supported.

- Links can contain spaces.

- Lines containing only hashes (`#`) are treated differently.

- Headers do not require spaces after hashes.

- Headers with more than 6 hashes are parsed differently, as level-6 headers
  with hashes in the header text (e.g., `#######valhallaforolaf`). In CommonMark,
  such constructs are not parsed as headers.

- A row of table cells can begin with a dash followed by a space,
  whereas in CommonMark that would open a new unordered list:

  [](// r2hack - r2 won't render this code block w/o help, the blockquote, and the extra lines)

  >     (this line is a hack to open an Old Reddit code block, not part of the example)
  >
  >     A | B | C
  >     --|---|--
  >     - | e | f

  (Note though that this does not currently apply to the "marker" row that follows
  the header row, so the following does not parse as a table,

  [](// r2hack - r2 won't render this code block w/o help, the blockquote, and the extra lines)

  >     (this line is a hack to open an Old Reddit code block, not part of the example)
  >

  >     A | B | C
  >     - | - | -
  >     - | e | f

  whereas it does in Old Reddit.)

- Strikethrough requires two tildes (`~~`) per Old
  Reddit, not one, per CommonMark.

- Relative links are not supported.

- Inline HTML is not supported.

- Unordered lists demarcated with `+` do not work in New Reddit.

- Headings cannot contain arbitrary inlines like italics in New
  Reddit.

# Differences in content support between Old Reddit and New Reddit

The ["Where to use Markdown on Reddit"][where] section described the
specific features of Reddit that accept Markdown as input. As of yet,
there are significant differences in support of these various cases
between Old Reddit and New Reddit, the old Markdown parser, and the new
Markdown parser.

Here are the dirty details.

- _selftext_ &mdash; While New Reddit uses the new Markdown
  parser/renderer to render selftext in most places, including on that
  post's own page and in the "lightbox" (the popup that appears upon
  clicking a post in the listing page), it uses the _old_ Markdown
  parser in the listing previews, both in the default cardview and in
  the "expando" (i.e., the details that open after clicking the icon with
  two opposing arrows) in Classic view.

- _wikis_ &mdash; Presently only rendered via Old Reddit.

- _subreddit description_ &mdash; Not interpreted as Markdown in
  New Reddit. Furthermore, the formerly multiline content is restricted
  to a single line.

- _subreddit submission text_ &mdash; Not rendered at all in New Reddit.

- _New Reddit's "text area" sidebar_ &mdash; Uses Old Reddit's renderer.

- _subreddit rules_ &mdash; Always rendered with the Old Reddit
  renderer.

- _new-style user profiles' "about" text_ &mdash; Always rendered
  with the Old Reddit renderer.

# Differences between Fancy Pants and Markdown

The Fancy Pants WYSIWYG editor generally supports most Markdown features that
Reddit supports, but it does have some limitations. Under the
hood, Fancy Pants stores its documents as Markdown, but its interface
does not support all Reddit Markdown features.

- HTML entities cannot be entered into Fancy Pants.

- Fancy Pants has much lower "nesting limits" than raw Markdown.
  Nesting limits impact the depth that nested lists and blockquotes
  are allowed to create in the document.

- Media like images and videos can be embedded in content via the
  Fancy Pants editor but not in raw markdown.

- Fancy Pants only supports a single heading level.

- Fancy Pants does not support putting arbitrary block elements like
  lists, blockquotes, and tables inside lists or blockquotes.

- Fancy Pants does not support link reference definitions &mdash;
  repeated links must be inserted repeatedly.

- Fancy Pants does not support hard line breaks.

- Fancy Pants is able to create blank lines, whereas Markdown cannot.
  It does this with a backwards-compatible hack by inserting
  paragraphs containing a single zero-width space (`&#x200b;`), which
  the Markdown parser later converts to an empty paragraph. Technically,
  Markdown authors can do the same trick.

Even though the submission page has the option to switch between Fancy
Pants and Markdown modes, be wary of switching from Markdown back to Fancy
Pants. Although switching from Fancy Pants to Markdown is expected
to be lossless, the reverse is not true. E.g., if your Markdown
contains HTML entities, they will be converted to plain Unicode during
the conversion, deeply nested lists will be lost, etc. Furthermore,
upon switching _back_ to Markdown from Fancy Pants, the exact Markdown
you entered will be lost, replaced by Markdown generated by Fancy
Pants.


# Credits and further reading

A big thanks to /u/brson for creating this document and working so diligently
to improve our parser. The basic organization of this page and its content
were influenced by /u/AnteChrono's [Reddit Markdown Primer][prime], /u/Raerth's [Reddit
Comment Formatting][fmt], the existing ["commenting" wiki page][cmt],
and the [CommonMark help page][cmh].

Quotes and references used as examples:

- "Far out in the uncharted backwaters..." &mdash; [Douglas Adams]
- "Out beyond ideas of wrongdoing...", "Love is the whole thing...", "Be empty of worrying..." &mdash; [Rumi]
- "Very little is needed to make a happy life..." &mdash; [Marcus Aurelius]
- "Somewhere in la Mancha..." &mdash; [Miguel de Cervantes]
- "It is error only..." &mdash; [Thomas Paine]
- "The greatest thing you'll ever learn..." &mdash; [eden ahbez]
- "Agamemnon, ..." &mdash; [Aeschylus]
- "It's so hard to forget pain..." &mdash; [Chuck Palahniuk]
- "I felt my lungs inflate..." &mdash; [Sylvia Plath]

[Douglas Adams]: https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy
[Rumi]: https://en.wikipedia.org/wiki/Rumi
[Marcus Aurelius]: https://en.wikipedia.org/wiki/Marcus_Aurelius
[Miguel de Cervantes]: https://en.wikipedia.org/wiki/Don_Quixote
[Thomas Paine]: https://en.wikipedia.org/wiki/Thomas_Paine
[eden ahbez]: https://en.wikipedia.org/wiki/Eden_ahbez
[Aeschylus]: https://en.wikipedia.org/wiki/Oresteia
[Chuck Palahniuk]: https://en.wikipedia.org/wiki/Chuck_Palahniuk
[Sylvia Plath]: https://en.wikipedia.org/wiki/Sylvia_Plath

[prime]: https://www.reddit.com/r/reddit.com/comments/6ewgt/reddit_markdown_primer_or_how_do_you_do_all_that/c03nik6/
[fmt]: https://www.reddit.com/r/raerth/comments/cw70q/reddit_comment_formatting/
[cmt]: https://www.reddit.com/wiki/commenting
[cmh]: http://commonmark.org/help/
[about]: #wiki_about_this_document
[quick]: #wiki_quick_reference
[where]: #wiki_where_to_use_markdown_on_reddit
[syntax]: #wiki_reddit-flavored_markdown
[para]: #wiki_paragraphs_and_line_breaks
[basic]: #wiki_basic_text_formatting
[links]: #wiki_links
[headings]: #wiki_headings
[lists]: #wiki_lists
[bq]: #wiki_blockquotes
[tables]: #wiki_tables
[code]: #wiki_code_blocks_and_inline_code
[tb]: #wiki_thematic_breaks
[tricks]: #wiki_more_tips_and_tricks
[esc]: #wiki_escaping_markdown_syntax
[ents]: #wiki_html_entities
[bots]: #wiki_tips_for_robots
[rec]: #wiki_reddit-flavored_markdown_compatibility_recommendations
[md]: #wiki_more_about_markdown_at_reddit
[rat]: #wiki_rationale_for_transitioning_to_commonmark
[diff]: #wiki_differences_between_old_reddit_markdown.2C_new_reddit_markdown.2C_and_commonmark
[tent]: #wiki_differences_in_content_support_between_old_reddit_and_new_reddit
[fancy]: #wiki_differences_between_fancy_pants_and_markdown
[cred]: #wiki_credits_and_further_reading