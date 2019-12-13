# Markdown For Docify

## 안녕하세요

**Markdown** is created by [Daring Fireball](http://daringfireball.net/); the original guideline is [here](http://daringfireball.net/projects/markdown/syntax). Its syntax, however, varies between different parsers or editors. **docsify** is using [GitHub Flavored Markdown][GFM].


## tabs

```
<!-- tabs:start -->

#### ** English **

Hello!

#### ** French **

Bonjour!

#### ** Italian **

Ciao!

<!-- tabs:end -->
```

<!-- tabs:start -->

#### ** English **

Hello!

#### ** French **

Bonjour!

#### ** Italian **

Ciao!

<!-- tabs:end -->


### 한글입숨

수 거친 주며, 희망의 보내는 소담스러운 얼음이 때까지 봄바람이다. 따뜻한 품었기 커다란 것은 사람은 긴지라 트고, 미인을 고행을 있으랴? 천하를 청춘을 있는 것이다. 우리 청춘을 능히 바이며, 위하여서, 때문이다. 불어 뛰노는 굳세게 싹이 있는 이것이야말로 광야에서 뿐이다. 귀는 작고 꽃 인간은 듣는다. 가치를 인간이 산야에 지혜는 바로 못할 얼음과 뭇 교향악이다. 두기 같이, 인간에 속에 들어 오아이스도 얼마나 있는 대한 이것이다. 쓸쓸한 지혜는 피어나기 이상 속잎나고, 영원히 듣는다. 되는 같지 든 소리다.이것은 굳세게 인간의 우리 넣는 인생을 보라. 산야에 방지하는 풀밭에 않는 같이 품으며, 청춘을 풀이 아름다우냐?

시들어 이상 물방아 내려온 이것이다. 뛰노는 우리는 얼마나 그들은 것이다. 있는 황금시대를 사람은 인생에 끝까지 이 풍부하게 어디 위하여, 것이다. 보이는 찾아다녀도, 못하다 무엇을 바이며, 아름다우냐? 그들은 이상은 풍부하게 같은 철환하였는가? 무한한 오직 군영과 있다. 모래뿐일 새가 인간의 따뜻한 커다란 귀는 있는 이상의 풀이 있는가? 청춘을 용감하고 만천하의 것이다. 가슴에 산야에 우리의 운다. 끓는 것은 뜨고, 가지에 붙잡아 살 할지라도 석가는 그들의 교향악이다. 우리 무엇을 것은 보배를 것이다.

#### 한글입숨33

갑 길을 위하여, 방황하여도, 것이 위하여, 인간에 실현에 아름다우냐? 속에서 살 찬미를 인간은 공자는 이것이다. 있는 밥을 별과 우리의 이것은 무한한 인간의 옷을 힘있다. 것이다.보라, 뼈 새가 봄바람이다. 희망의 커다란 날카로우나 위하여서. 바이며, 가치를 이상, 피다. 만물은 원대하고, 풀이 보는 것이다. 영락과 기관과 있는 과실이 품고 있음으로써 사막이다. 과실이 착목한는 풀이 피고, 어디 가치를 이것은 청춘 시들어 부패뿐이다. 산야에 안고, 얼마나 불어 것이다. 힘차게 그것을 하는 주며, 현저하게 그들의 이것이다.


## Block 요소

### Paragraph and line breaks

A paragraph is simply one or more consecutive lines of text. In markdown source code, paragraphs are separated by two or more blank lines. In docsify, you only need one blank line (press `Return` once) to create a new paragraph.

Press `Shift` + `Return` to create a single line break. Most other markdown parsers will ignore single line breaks, so in order to make other markdown parsers recognize your line break, you can leave two spaces at the end of the line, or insert `<br/>`.

### Headers

Headers use 1-6 hash (`#`) characters at the start of the line, corresponding to header levels 1-6. For example:

``` markdown
# This is an H1

## This is an H2

###### This is an H6
```

In docsify, input ‘#’s followed by title content, and press `Return` key will create a header.

### Blockquotes

Markdown uses email-style > characters for block quoting. They are presented as:

``` markdown
> This is a blockquote with two paragraphs. This is first paragraph.
>
> This is second pragraph. Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.



> This is another blockquote with one paragraph. There is three empty line to seperate two blockquote.
```

In docsify, inputting ‘>’ followed by your quote contents will generate a quote block. docsify will insert a proper ‘>’ or line break for you. Nested block quotes (a block quote inside another block quote) by adding additional levels of ‘>’.

### Lists

Input `* list item 1` will create an unordered list - the `*` symbol can be replace with `+` or `-`.

Input `1. list item 1` will create an ordered list - their markdown source code is as follows:

``` markdown
## un-ordered list
*   Red
*   Green
*   Blue

## ordered list
1.  Red
2. 	Green
3.	Blue
```

### Task List

Task lists are lists with items marked as either [ ] or [x] (incomplete or complete). For example:

``` markdown
- [ ] a task list item
- [ ] list syntax required
- [ ] normal **formatting**, @mentions, #1234 refs
- [ ] incomplete
- [x] completed
```

You can change the complete/incomplete state by clicking on the checkbox before the item.

### (Fenced) Code Blocks

docsify only supports fences in GitHub Flavored Markdown. Original code blocks in markdown are not supported.

Using fences is easy: Input \`\`\` and press `return`. Add an optional language identifier after \`\`\` and we'll run it through syntax highlighting:

``` markdown
Here's an example:

​```
function test() {
  console.log("notice the blank line before this function?");
}
​```

syntax highlighting:
​```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
​```
```

### Math Blocks

You can render *LaTeX* mathematical expressions using **MathJax**.

To add a mathematical expression, input `$$` and press the 'Return' key. This will trigger an input field which accepts *Tex/LaTex* source. For example:


$$
\mathbf{V}_1 \times \mathbf{V}_2 =  \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial X}{\partial u} &  \frac{\partial Y}{\partial u} & 0 \\
\frac{\partial X}{\partial v} &  \frac{\partial Y}{\partial v} & 0 \\
\end{vmatrix}
$$


In the markdown source file, the math block is a *LaTeX* expression wrapped by a pair of ‘$$’ marks:

``` markdown
$$
\mathbf{V}_1 \times \mathbf{V}_2 =  \begin{vmatrix}
\mathbf{i} & \mathbf{j} & \mathbf{k} \\
\frac{\partial X}{\partial u} &  \frac{\partial Y}{\partial u} & 0 \\
\frac{\partial X}{\partial v} &  \frac{\partial Y}{\partial v} & 0 \\
\end{vmatrix}
$$
```

You can find more details [here](http://support.docsify.io/Math/).

### Tables

Input `| First Header  | Second Header |` and press the `return` key. This will create a table with two columns.

After a table is created, putting focus on that table will open up a toolbar for the table where you can resize, align, or delete the table. You can also use the context menu to copy and add/delete individual columns/rows.

The full syntax for tables is described below, but it is not necessary to know the full syntax in detail as the markdown source code for tables is generated automatically by docsify.

In markdown source code, they look like:

``` markdown
| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |
```

You can also include inline Markdown such as links, bold, italics, or strikethrough in the table.

Finally, by including colons (`:`) within the header row, you can define text in that column to be left-aligned, right-aligned, or center-aligned:

``` markdown
| Left-Aligned  | Center Aligned  | Right Aligned |
| :------------ |:---------------:| -----:|
| col 3 is      | some wordy text | $1600 |
| col 2 is      | centered        |   $12 |
| zebra stripes | are neat        |    $1 |
```

A colon on the left-most side indicates a left-aligned column; a colon on the right-most side indicates a right-aligned column; a colon on both sides indicates a center-aligned column.

### Footnotes

``` markdown
You can create footnotes like this[^footnote].

[^footnote]: Here is the *text* of the **footnote**.
```

will produce:

You can create footnotes like this[^footnote].

[^footnote]: Here is the *text* of the **footnote**.

Hover over the ‘footnote’ superscript to see content of the footnote.

### Horizontal Rules

Inputting `***` or `---` on a blank line and pressing `return` will draw a horizontal line.

------

### YAML Front Matter

docsify now supports [YAML Front Matter](http://jekyllrb.com/docs/frontmatter/). Input `---` at the top of the article and then press `Return` to introduce a metadata block. Alternatively, you can insert a metadata block from the top menu of docsify.

### Table of Contents (TOC)

Input `[toc]` and press the `Return` key. This will create a  “Table of Contents” section. The TOC extracts all headers from the document, and its contents are updated automatically as you add to the document.

## Span Elements

Span elements will be parsed and rendered right after typing. Moving the cursor in middle of those span elements will expand those elements into markdown source. Below is an explanation of the syntax for each span element.

### Links

Markdown supports two styles of links: inline and reference.

In both styles, the link text is delimited by [square brackets].

To create an inline link, use a set of regular parentheses immediately after the link text’s closing square bracket. Inside the parentheses, put the URL where you want the link to point, along with an optional title for the link, surrounded in quotes. For example:

``` markdown
This is [an example](http://example.com/ "Title") inline link.

[This link](http://example.net/) has no title attribute.
```

will produce:

This is [an example](http://example.com/"Title") inline link. (`<p>This is <a href="http://example.com/" title="Title">`)

[This link](http://example.net/) has no title attribute. (`<p><a href="http://example.net/">This link</a> has no`)

#### Internal Links

**You can set the href to headers**, which will create a bookmark that allow you to jump to that section after clicking. For example:

Command(on Windows: Ctrl) + Click [This link](#block-elements) will jump to header `Block Elements`. To see how to write that, please move cursor or click that link with `⌘` key pressed to expand the element into markdown source.

#### Reference Links

Reference-style links use a second set of square brackets, inside which you place a label of your choosing to identify the link:

``` markdown
This is [an example][id] reference-style link.

Then, anywhere in the document, you define your link label on a line by itself like this:

[id]: http://example.com/  "Optional Title Here"
```

In docsify, they will be rendered like so:

This is [an example][id] reference-style link.

[id]: http://example.com/	"Optional Title Here"

The implicit link name shortcut allows you to omit the name of the link, in which case the link text itself is used as the name. Just use an empty set of square brackets — for example, to link the word “Google” to the google.com web site, you could simply write:

``` markdown
[Google][]
And then define the link:

[Google]: http://google.com/
```

In docsify, clicking the link will expand it for editing, and command+click will open the hyperlink in your web browser.

### URLs

docsify allows you to insert URLs as links, wrapped by `<`brackets`>`.

`<i@docsify.io>` becomes <i@docsify.io>.

docsify will also automatically link standard URLs. e.g: www.google.com.

### Images

Images have similar syntax as links, but they require an additional `!` char before the start of the link. The syntax for inserting an image looks like this:

``` markdown
![Alt text](/path/to/img.jpg)

![Alt text](/path/to/img.jpg "Optional title")
```

You are able to use drag & drop to insert an image from an image file or your web browser. You can modify the markdown source code by clicking on the image. A relative path will be used if the image that is added using drag & drop is in same directory or sub-directory as the document you're currently editing.

If you’re using markdown for building websites, you may specify a URL prefix for the image preview on your local computer with property `docsify-root-url` in YAML Front Matters. For example, input `docsify-root-url:/User/Abner/Website/docsify.io/` in YAML Front Matters, and then `![alt](/blog/img/test.png)` will be treated as `![alt](file:///User/Abner/Website/docsify.io/blog/img/test.png)` in docsify.

You can find more details [here](https://support.docsify.io/Images/).

### Emphasis

Markdown treats asterisks (`*`) and underscores (`_`) as indicators of emphasis. Text wrapped with one `*` or `_` will be wrapped with an HTML `<em>` tag. E.g:

``` markdown
*single asterisks*

_single underscores_
```

output:

*single asterisks*

_single underscores_

GFM will ignore underscores in words, which is commonly used in code and names, like this:

> wow_great_stuff
>
> do_this_and_do_that_and_another_thing.

To produce a literal asterisk or underscore at a position where it would otherwise be used as an emphasis delimiter, you can backslash escape it:

``` markdown
\*this text is surrounded by literal asterisks\*
```

docsify recommends using the `*` symbol.

### Strong

A double `*` or `_` will cause its enclosed contents to be wrapped with an HTML `<strong>` tag, e.g:

``` markdown
**double asterisks**

__double underscores__
```

output:

**double asterisks**

__double underscores__

docsify recommends using the `**` symbol.

### Code

To indicate an inline span of code, wrap it with backtick quotes (`). Unlike a pre-formatted code block, a code span indicates code within a normal paragraph. For example:

``` markdown
Use the `printf()` function.
```

will produce:

Use the `printf()` function.

### Strikethrough

GFM adds syntax to create strikethrough text, which is missing from standard Markdown.

`~~Mistaken text.~~` becomes ~~Mistaken text.~~

### Underlines

Underline is powered by raw HTML.

`<u>Underline</u>` becomes <u>Underline</u>.

### Emoji :smile:

Input emoji with syntax `:smile:`.

User can trigger auto-complete suggestions for emoji by pressing `ESC` key, or trigger it automatically after enabling it on preference panel. Also, inputting UTF-8 emoji characters directly is also supported by going to `Edit` -> `Emoji & Symbols` in the menu bar (macOS).

### Inline Math

To use this feature, please enable it first in the `Preference` Panel -> `Markdown` Tab. Then, use `$` to wrap a TeX command. For example: `$\lim_{x \to \infty} \exp(-x) = 0$` will be rendered as LaTeX command.

To trigger inline preview for inline math: input “$”, then press the `ESC` key, then input a TeX command.

You can find more details [here](http://support.docsify.io/Math/).

### Subscript

To use this feature, please enable it first in the `Preference` Panel -> `Markdown` Tab. Then, use `~` to wrap subscript content. For example: `H~2~O`, `X~long\ text~`/

### Superscript

To use this feature, please enable it first in the `Preference` Panel -> `Markdown` Tab. Then, use `^` to wrap superscript content. For example: `X^2^`.

### Highlight

To use this feature, please enable it first in the `Preference` Panel -> `Markdown` Tab. Then, use `==` to wrap highlight content. For example: `==highlight==`.

## HTML

You can use HTML to style content what pure Markdown does not support. For example, use `<span style="color:red">this text is red</span>` to add text with red color.

### Embed Contents

Some websites provide iframe-based embed code which you can also paste into docsify. For example:

```Markdown
<iframe height='265' scrolling='no' title='Fancy Animated SVG Menu' src='http://codepen.io/jeangontijo/embed/OxVywj/?height=265&theme-id=0&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>
```

### Video

You can use the `<video>` HTML tag to embed videos. For example:

```Markdown
<video src="xxx.mp4" />
```

### Other HTML Support

You can find more details [here](http://support.docsify.io/HTML/).

[GFM]: https://help.github.com/articles/github-flavored-markdown/

## important content
```
!> **Time** is money, my friend!
```
render as:

!> **Time** is money, my friend!

## General tips

```
?> _TODO_ unit test
```
render as:

?> _TODO_ unit test

## Task Lists
```
- [ ] foo
- bar
- [x] baz
  - [ ] bim
  - [ ] lim
  ```
render as:
- [ ] foo
- bar
- [x] baz
  - [ ] bim
  - [ ] lim

## Image resizing
```
![logo](https://docsify.js.org/_media/icon.svg ':size=50x100')
![logo](https://docsify.js.org/_media/icon.svg ':size=100')
![logo](https://docsify.js.org/_media/icon.svg ':size=10%')
```
render as:
![logo](https://docsify.js.org/_media/icon.svg ':size=50x100')
![logo](https://docsify.js.org/_media/icon.svg ':size=100')
![logo](https://docsify.js.org/_media/icon.svg ':size=10%')

## Customise ID for headings
```
### hello-world :id=hello-world
```
render as:
```
<h3 id="hello-world">
<a href="http://localhost:3000/#/?id=hello-world" data-id="hello-world" class="anchor">
<span>hello-world</span>
</a>
</h3>
```

## Markdown in html tag
```
<div style='color: red'>

- listitem
- listitem
- listitem
</div>
```
render as:
<div style='color: red'>

- listitem
- listitem
- listitem
</div>

## details & summary

만물이 대자재천(大自在天)*에서 생긴다고 말하는 사람들이 있고, 위뉴천(韋紐天)**에서 생긴다는 말도 있고, 화합(和合)으로부터 생긴다는 말도 있고, 시(時)에서 생간다는 말도 있고, 세성(世性)에서 생긴다는 말도 있고 변화(變化)에서 생긴다는 말도 있고, 자연(自然)에서 생긴다는 말도 있고 미진(微塵)에서 생긴다는 말도 있다. 이런 잘못으로 무인론(無因論), 그릇된 인과론(因果論),



```
<details>
<summary>Self-assessment (Click to expand)</summary>

- Abc
- Abc

?> _TODO_ unit test

</details>
```
render as:
<!-- <details>
<summary>Self-assessment (Click to expand)</summary>

- Abc
- Abc

?> _TODO_ unit test

</details> -->



```
<h2>HTML <mark>Marked</mark> Formatting</h2>
<p>HTML <mark>Marked</mark> Formatting</p>
<p>My favorite color is <del>blue</del> red.</p>
<p>This is <sub>subscripted</sub> text.</p>
<p>This is <sup>superscripted</sup> text.</p>
```
<h2>HTML <mark>Marked</mark> Formatting</h2>
<p>HTML <mark>Marked</mark> Formatting</p>
<p>My favorite color is <del>blue</del> red.</p>
<p>This is <sub>subscripted</sub> text.</p>
<p>This is <sup>superscripted</sup> text.</p>


This is <sup>superscripted</sup> text.

<p>Here is a quote from WWF's website:</p>
<blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature.
The world's leading conservation organization,
WWF works in 100 countries and is supported by
1.2 million members in the United States and
close to 5 million globally.
</blockquote>

```
<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>
```
<p>The <abbr title="World Health Organization">WHO</abbr> was founded in 1948.</p>

<address>
Written by John Doe.<br>
Visit us at:<br>
Example.com<br>
Box 564, Disneyland<br>
USA
</address>

<p><cite>The Scream</cite> by Edvard Munch. Painted in 1893.</p>
<bdo dir="rtl">This text will be written from right to left</bdo>

[Dhammacakkappavattana-sutta](sutta.md)

<!-- [filename](sutta.md ':include :type=code') -->

## 내부 헤더라인 링크
```
[link](?id=image-resizing)
```
render as:

이 링크는 `## image-resizing` 로 이동합니다.
[link](?id=image-resizing)