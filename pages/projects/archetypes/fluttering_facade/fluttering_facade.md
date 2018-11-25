---
layout: project
title: Fluttering Facade
description: A panelized surface with folded elements, resulting in a kinetic or fluttering effect. 
category: Projects
subcategory: Archetypes
order: 1
difficulty: easy
processes: ['Surface Panelization']
platforms: ['Rhinoceros','Grasshopper']
---

## Final Product

<div class="sketchfab-embed-wrapper"><iframe src="https://sketchfab.com/models/1414a55e746f4fc6be1f94b67b7ba581/embed" frameborder="0" allow="autoplay; fullscreen; vr" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe></div>



### Walkthrough

Begin by creating a flat four point surface in Rhinoceros using the **srfpt** or  **plane** commands. Turn on the control points of the surface and drag two opposite corners downward or upward to produce a hypar. This will be our base surface

![](.\images\01.PNG)

Open grasshopper. Reference your surface and plug it into a **divide surface** component, setting the UVs to an equal integer.

![](.\images\0.PNG)

Create a set of quad panels along this surface. Refer to the *Surface Panelization* process attached at the top of this article. In the above image, we use the C# script, which outputs a polyline. 

![](.\images\3.PNG)

Get the four corners of each panel from your surface panelization process. We use the **Control points** component shown above. For surfaces, use the **Deconstruct Brep** component instead.

The point list is connected to the **List Item** component, which splits each corner into a separate stream.

Plug the 2nd and 4th streams (i+1 & i+3) into a **Move** component which will receive a **Unit Z vector** as its **motion input**. This will move two of the corners in each panel directly upward.

For each quad panel, we will create two triangular panels using the Construct Mesh component. For each triangle, recombine the streams shown back in order using a **merge** component, or as shown by **holding shift** and combining streams in their order (from i to i+3). These are fed into a **construct mesh** component.

![](.\images\5.PNG)

You should now have something like the above. We used preview components from the **Human** toolkit to visualize the object and its edges in the viewport with color and material.

You can now **Bake** your panelized structure, or feed it into another process for further articulation.

<u>Congratulations, you've completed this project. Show your friends!</u>