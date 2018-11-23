---
layout: post
title: Surface Panelization
# aka: [ 'Polychains' ]
category: Processes
subcategory: Discretization
description: How to turn a 3d surface into discrete panels.
# description-credit: Merriam-Webster
dependencies: [ 'Lines' ]
platforms: [ 'Rhinoceros','Grasshopper' ]
order: 0
---


![](.\images\flutter\fluttering.PNG)

There are several cases in which a designer will need to discretize a form into smaller pieces. It's common to represent the extents of an enclosure system, for example, using a NURBS surface, and converting that surface into a faceted, panelized system that follows it as a guide. In parametric modeling, this mitigates many of the pain points which come with upstream changes in form. 




---
# Techniques
---


## Lunchbox

The Lunchbox toolkit for **grasshopper** comes with a set of panelization tools for surfaces. Referencing your surface in Grasshopper and plugging it into any of these components will return surfaces representing the panels.



![](.\images\LunchboxPanels.png)



#### Walkthrough

- **Reference** your **surface** in **grasshopper** with a surface parameter object.

- Drop in a Quad Panels component from the **Lunchbox** toolbar

- Add integer sliders for the U and V divisions of the surface, and plug them into their respective inputs. These will dictate how many panels the component should create in the U and V axis of the surface

- You can divide into panels of an **approximate size** by using the **Dimensions** component and dividing by the desired panel size in that direction, then feeding the result into its respective input on the component

  ![](.\images\LunchboxPanels.gif)


## C# Scripting in Grasshopper (Quad Panels)

You can write your own C# component for grasshopper to collect points of a surface into groups of quad panels. We will collect the points in the below order and use them to create polylines. 

![uviter2](.\images\uviter2.PNG)


The walkthrough below will detail a simple approach with a flattened list of points coming from the **Divide Surface** component.

> See the Surface UV and Multidimensional Array articles for more information on the techniques shown here.



#### Walkthrough

- **Reference** your **surface** into **grasshopper** using a surface parameter object.

![0](.\images\flutter\0.PNG)

- Drop in a **Divide Surface** component and two i**nteger sliders** for your UV and connect. **Flatten** the output points by right clicking and flattening the list.
- Drop in a **C#** component, and change the input parameters to the following:
  - **Points**
    - Type hint: Point3d
    - List Access
  - **V**
    - Type hint: Integer
    - Item Access
- Change the output parameters to the following:
  - **A**
    - This will be used to debug if necessary.
  - **Panels**
    - This will be a return a list of polylines.
- Plug components into eachother as shown above.

![0](.\images\flutter\1.PNG)

- We set up a **List** of **polylines** called **panels** which will receive output from the iterator
- In the definition of the **for loop**, we will skip the last row of points in the list, by subtracting the size of the row (V) and two from the total count of the points. We subtract two from the list count to account for the fact that the number of points in a row is one greater than the number of panels (5 points = 4 lines), and the number of items in the list is one greater than the highest index of that list (first item in a list is the zeroeth).
- In the beginning of the **for loop**, we will check if i is an nth point and skip it. In our case, we want to skip the last point in every row. We calculate this using the **modulo** (i + 1) % (V + 1).
- For the sake of example, I verbosely capture the indices of the four points of each panel. Forgive me for using numbers in the variable name.
- We grab the points from our incoming Points list with the four indices and create a list of points that will be used to construct our polyline.
- We set **A** to pts just in case something goes wrong as your replicate this and want to see if the loop is running.
- When the **for loop** has finished, we set our **output parameter** on the **C# component** to the list of polylines we've created.

![2](.\images\flutter\2.PNG)

- The next step for us is to extract the control points from the polylines we've outputted, which you can use to create a surface panel, mesh panel, or other products.

