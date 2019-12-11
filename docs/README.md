# Headline


> An awesome project.

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