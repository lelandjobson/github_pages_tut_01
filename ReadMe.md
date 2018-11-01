# Future Craft Field Guides

Sandbox for [Pratt Itl](https://itl.pratt.edu) Field Guides
website using Markdown and git.

## How to contribute

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
Markdown is a way of styling text and content with simple special characters. These characters change the text size, text style, help you create tables, special blocks, links, embeds, and much more.
The Future Craft Field Guides use a flavor of markdown called [Kramdown](http://kramdown.gettalong.org).
```

```
