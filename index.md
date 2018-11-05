---
layout: home
title: Welcome
description: description
field-guide: None
---

<div style="text-align: center"><p>
The Field Guide of Future Craft is an cross-disciplinary knowledge base pertaining to creative technologies, edited and maintained by the Interdisciplinary Technology Lab at Pratt Institute. Its purpose is to bootstrap the learning process within studios at Pratt Institute, and broaden the technical prowess of our students across the board, in the hope discovering how technology, technique, craft and reason interlink our various disciplines.</p>
</div>

<br><br><br><br><br><br><br><br>

<h2 class="bgChange" data-background="./assets/images/global/yellowBG.png">Our Project</h2>
Since our formation in 2011 as the Digital Futures Group through our transition into the ITL, we have purveyed over one hundred digital seminars and provided a decade of service in the forms of creating, curating, delivering and supporting educational content and initiatives within the School of Architecture. In our tenure, we consistently maintained that the tenets of digital craftsmanship are immutable: lessons in design software outlast their manifestations.

We have come to believe that the ultimate user manual for implementing technology in creative work is not only writable, but the resources and talent to do so are already at our grasp.

This project, called the Future Craft Field Guides, or FCFG for short, is the consolidation of our knowledge base: technology’s manifold implementations in the arts are keyframed at the macro and micro levels, spanning from fundamentals to content creation. On its face, the Field Guide serves to broaden the technical prowess of our students, but our project is to also discover how technology, technique, craft and reason interlink our various disciplines - if we could draw that web, what would we learn? What could we do with it? FCFG is such an  asset.

---
# How to contribute
---

### Editing an existing page
- You can edit on this website directly (Github.com) using the above 
- We recommend using [Typora](https://typora.io/#download), a beautiful offline markdown editor. See the **Using Typora** section below.
- In the **pages** folder, go to the field guide folder you want to edit. 
- **Click** on the appropriate page file (.md file) that you want to edit.
- **Write your content** Write your content. See the below information on how to write with markdown, add images and special content.

### Creating a new page
- **Navigate to the field guide folder on this website and create a new file with a .md extension** If you want to add a new page, add it to said folder with the extension .md (Ex. introduction.md)
- **Add a header to the file** You will need to add a header to the file, which we call the "front matter" (metadata about the page) that is **critical** to the pages functionality. It lets our compiler know where to add the page in the field guide, the pages layout, the pages title and description, and what order the page ought to go in. Front matter looks like this:
**Example Header (From Adobe Field Guide**
``` yaml
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

## Using Typora
[Typora](https://typora.io/#download) is an offline markdown editor.

### [Download Typora Here](https://typora.io/#download)

To download the contents of the FCFG onto your computer, you will need Github Desktop.

### [Download Github Desktop Here](https://desktop.github.com/)

### Cloning(Downloading locall) the repository (The FCFG)
- Clone the Repo in Github Desktop (File - Clone) with this url:
  - _https://github.com/lelandjobson/github_pages_tut_01_
  - **This will produce a folder with the repository in it in Documents/Github.**

- Now you can open typora, and go to File - Open Folder, choose the folder of the repository you want to work in, and type away!
  - See the below information on how to write with markdown, add images and special content.

## How to write in Markdown Syntax
The text you are currently reading was written in markdown, and is the README.md file at the root of this repository. 
Markdown is a way of styling text and content with simple special characters. These characters change the text size, text style, help you create tables, special blocks, links, embeds, and much more.
The Future Craft Field Guides use a flavor of markdown called [Kramdown](http://kramdown.gettalong.org).
Markdown is converted into HTML. 

### [You can find a complete guide for using markdown to write here.](https://kramdown.gettalong.org/quickref.html)

### Basic markdown:
<------ NOTE - IGNORE ALL ARROWS, THOSE ARE MY COMMENTS <------
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


![grass](img/image.jpg) <----- this is an image. the text [grass] is the alt of the image, which will show up when the image isn't loaded, as well as when the user hovers over it

```
## Adding images to the field guide
All field guides will have their own **images** folder within them.
To insert an image with markdown:
- Add the picture to the images folder in the appropriate field guide. (ex. babyphoto.png)
- Use the following markdown syntax:
```
![My caption](./images/babyphoto.png)
```
The image will now be nested into the field guide

## Adding dynamic background images
A unique feature of the FCFG is the dynamic background that ties thematically to the content.
These background changes are triggered by **headings** with embedded reference to the image in its metadata. 
Adding a background change is straightforward.

- Add the background image you want to use in the field guides **images** folder
- For the heading of a topic, instead of creating a heading with markdown like this:
```
## Vectors
```
Do this:
```
<h2 class="bgChange" data-background="./images/vectorBackgroundImage.png">Vectors</h2>
```
In this example, vectorBackgroundImage.png is the name of the background image we want to use, which has been added to the field guide folder. You can name the image anything you want, but we ask that you stick to the convention (myimagename)BackgroundImage.png.

## Adding Sketchfab Models
Showing a sketchfab model on our page is easy. Simply grab the embed code for the viewport from the Sketchfab website. It should look something like this:
``` html
<iframe width="800" height="600" src="https://sketchfab.com/models/338f5aa603b24ec6b9303596867e3285/embed?autostart=1" frameborder="0" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe>
```

Simply add this to the front 
``` html
<div class="sketchfab-embed-wrapper">
``` 

And this at the end
``` html
</div>
```

Creating this:
``` html
<div class="sketchfab-embed-wrapper"><iframe width="800" height="600" src="https://sketchfab.com/models/338f5aa603b24ec6b9303596867e3285/embed?autostart=1" frameborder="0" allowvr allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" onmousewheel=""></iframe></div>
```

## Adding Video Embeds
Vimeo/Youtube embeds work similarly to Sketchfab (using an iframe). You can get these directly from the video's webpage (embed code) and paste it in. Example:
``` html
<iframe src="https://player.vimeo.com/video/261402433" width="640" height="1138" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/261402433">ITL Robot Penholder Hello World</a> from <a href="https://vimeo.com/user7298135">Leland Jobson</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
```

## Adding components
FGFC uses Bootstrap 4.0 for special components, such as alert bars, buttons, dropdowns and more. For example, the grey and green boxes you see. You can visit the bootstrap website below and paste in code for special components.

### [Boostrap components](https://getbootstrap.com/docs/4.1/components/alerts/)

Pro tip - If you see a component on another page that you want to use, you can simple copy and paste it into your page and change the content there as necessary.

---
# Development Assistance
---
If you want to add styles, make infrastructural changes, or just use an offline editor to work with markdown and preview changes, 
you can get started with the following series of steps

### Install
- [Visual Studio Code](https://code.visualstudio.com/download)
- [Github Desktop](https://desktop.github.com/)
- [Ruby Runtime](http://www.rubyinstaller.org)
  - Get the latest WITH DEVKIT (x64)
  - Follow the command line instructions. When asked what package to install, use 1, or the simplest package.

### Clone the repository
- Clone the Repo in Github Desktop (File - Clone) with this url:
  - _https://github.com/lelandjobson/github_pages_tut_01_
  - **This will produce a folder with the repository in it in Documents/Github.**
  - In the github desktop window in the Branches dropdown, select the **gh-pages** branch
- Navigate to the local folder with the repository in it (...\Documents\GitHub\github_pages_tut_01 ) 
and open a command line window
  - You can do this in Windows in windows explorer by typing cmd.exe into the textbox on the explorer where the folder's path is displayed and hitting enter. 
- Type in and hit enter: 
   - _gem install bundler_
- When that is finished, in the same console window, do the same for  
   - _gem install github-pages_ 
- Then
   - _gem install jekyll-last-modified-at_
- Close the console window, and open a new one and do
   - _jekyll serve_
- open Google Chrome and go to
   - http://localhost:4000/

You should now see the website running locally on this page, and you can make changes as you see fit.

### Pushing Changes
Speak to Leland Jobson or David Mans about merging changes you've made into the FCFG.

