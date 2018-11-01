# Future Craft Field Guides

## Introduction
Since our formation in 2011 as the Digital Futures Group through our transition into the ITL, we have purveyed over one hundred digital seminars and provided a decade of service in the forms of creating, curating, delivering and supporting educational content and initiatives within the School of Architecture. In our tenure, we consistently maintained that the tenets of digital craftsmanship are immutable: lessons in design software outlast their manifestations.

We have come to believe that the ultimate user manual for implementing technology in creative work is not only writable, but the resources and talent to do so are already at our grasp.

This project, calledd the Future Craft Field Guides, or FCFG for short, is the consolidation of our knowledge base: technology’s manifold implementations in the arts are keyframed at the macro and micro levels, spanning from fundamentals to content creation. On its face, the Field Guide serves to broaden the technical prowess of our students, but our project is to also discover how technology, technique, craft and reason interlink our various disciplines - if we could draw that web, what would we learn? What could we do with it? FCFG is such an  asset.

# How to contribute

### Editing an existing page
- You can edit on this website directly (Github.com) using the above 
- In the **pages** folder, go to the field guide folder you want to edit. 
- **Click** on the appropriate page file (.md file) that you want to edit.
- **Write your content** Write your content. See the below information on how to write with markdown, add images and special content.

### Creating a new page
- **Navigate to the field guide folder on this website and create a new file with a .md extension** If you want to add a new page, add it to said folder with the extension .md (Ex. introduction.md)
- **Add a header to the file** You will need to add a header to the file, which we call the "front matter" (metadata about the page) that is **critical** to the pages functionality. It lets our compiler know where to add the page in the field guide, the pages layout, the pages title and description, and what order the page ought to go in. Front matter looks like this:
**Example Header (From Adobe Field Guide**
```
---
layout: post
title: Image Types
description: A top level introduction to the adobe suite and its products.
field-guide: Adobe Field Guide
order: 1
---
```
- _layout: post_ Do not change this.
- _title_ The title of this page
- _description_ A short description of what this page is about
- _field-guide_ The guide that this content belongs to. Files in the same folder should have the same field-guide. This is what groups pages together on the navbar.
- _order_ The order this page is in the navbar, also sets the previous/next page buttons on the website

- **Write your content** Write your content. See the below information on how to write with markdown, add images and special content.


## How to write in Markdown Syntax
The text you are currently reading was written in markdown, and is the README.md file at the root of this repository. 
Markdown is a way of styling text and content with simple special characters. These characters change the text size, text style, help you create tables, special blocks, links, embeds, and much more.
The Future Craft Field Guides use a flavor of markdown called [Kramdown](http://kramdown.gettalong.org).
Markdown is converted into HTML. 

### [You can find a complete guide for using markdown to write here.](https://kramdown.gettalong.org/quickref.html)

### Basic markdown:
### <------ NOTE - IGNORE ALL ARROWS, THOSE ARE MY COMMENTS <------
```
**bold text**
_italic text_


# Heading 1 (Biggest)
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5 (Smallest)

> quote
> second line of above quote
> > nested quote within above quote

[Name of link](http://www.url.to.link.com)

~~~
Code block - put code in here
Multiple lines of code supported.
~~~

~~~ python
Code block that will be styled as python code.
~~~

* * * <----- This creates a horizontal rule (a straight line breaking up the doc)
--- <----- So does this

1. This is a list item
  1. This is a list within the above list item
2. This is the list item after the first list item

* This is a list item with a bullet
* This too

term
: definition of term
: another definition of the term


| Header1 | Header2 | Header3 |  <---- this is a table
|:--------|:-------:|--------:|
| cell1   | cell2   | cell3   |
| cell4   | cell5   | cell6   |

```
