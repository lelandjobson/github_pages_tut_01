---
layout: principle
title: Polygons
# aka: [ '' ]
category: Principles
subcategory: Geometry
description: A polygon is a plane figure that is bounded by a finite chain of straight line segments closing in a loop to form a closed polygonal chain or circuit. 
description-credit: Wikipedia
dependencies: [ 'Points', 'Lines' ]
platforms: [ 'Rhinoceros', 'Illustrator', 'Grasshopper' ]
order: 0
---
![](.\images\Polygons.PNG)



Segments which form a polygon are called **edges** or **sides**, and the points where two edges meet are its **vertices** (singular: vertex) or corners. The interior of the polygon is sometimes called its body. An **n-gon** is a polygon with **n** sides; for example, a triangle is a 3-gon. 

A regular polygon has equal edge length and subsequently equal interior angles.

![](.\images\not_polygons.PNG)

A polygon is a **closed** 2d geometry, meaning it contains its own area. When described on the **Euclidean plane**, its edges are straight lines.



![](.\images\Interior_angles.PNG)

The sum of the interior angles of a polygon in degrees, regular or not, is the number of its sides **n** or **numSides** - 2, multiplied by 180.

![](.\images\neighbors.PNG)

Some polygons, such as these hexagons, can **neighborhood** with polygons of the same type (fit/meet at every edge without leaving gaps). The example on the right shows a mixture of hexagons and pentagons, which can be connected to each other in 3d space to form a fraction of a soccer ball.