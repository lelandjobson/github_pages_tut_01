---
layout: post
title: Curves
description: An overview of Rhinoceros
field-guide: Rhinoceros Field Guide
order: 2
---

Whether working in 2D or 3D space, curves, and the control of them, provide the basis for all preceding geometry relative to the geometric hierarchy of points, curves, surfaces and solids.

<div class=centered>
{{ 'https://sketchfab.com/models/e35c726f93704d12b9069fb7cc064a13' | noembed }}
</div>

Whether working in 2D or 3D space, curves, and the control of them, provide the basis for all preceding geometry relative to the geometric hierarchy of points, curves, surfaces and solids.

Understanding this is paramount to the broader objectives of this field guide. Surfaces, and solids for that matter, will only be as controlled, and ultimately as successful, as the curves that you use to generate them. And controlling curves is dependent upon the control or allocation of points which either comprise any one curve or influence anyone curve - i.e. curve points vs. control points.

Building a valid, well-structured, scaffold using control points and curves towards surfaces is the approach that should be adopted.

From these base scaffolds, processes for procedurally modeling can vary in degrees of surface articulation via tools and techniques but will ultimately depend largely on the preemptive actions undertaken and the iterative creation of and refinement of subservient geometry as a means to an end.

> As an anecdotal Rule-of-Thumb, and one surface made should have at least 5X as many curves.

---

## CURVE COMMAND TOOLSET

<div class="alert alert-info"><span class="glyphicon glyphicon-hand-down" aria-hidden="true"></span><strong> Helpfiles rule!</strong> In Rhino, go to help, command list, and type in any of the tools or commands sighted below in order to access further step by step information and parameters of each. Commands are denoted in <span class="label label-default">Labels</span>.
</div>

* ####**Polyline** <span class="label label-default">Polyline</span> <span class="label label-default">Pline</span>

Draws a multi-segment polyline consisting of line or arc segments. Note: A polyline consists of line segments that are joined end to end.
Curve or Control Point Curve - Curve - Draws a curve from control point locations.
Interpolated Curve - InterpCrv - Draws a curve through selected locations in space. Note: Many CAD programs use the term spline to describe an interpolated curve.

* ####**Control Points On** <span class="label label-default">PointsOn</span>

Displays control points. Control points are coefficients of NURBS basis functions. Sometimes also called control vertex or node. Control points are used as "grips" on objects such as curves, surfaces, lights, hatch boundaries, and dimensions and cannot be separated from their objects.
* When you control-point edit curves that are smooth and consist of several curve segments joined together, the curve will fuse into a single curve that cannot be exploded. If necessary you can use the Split command with the Point option and Knot object snap to break the curve into segments.
To ensure the seams of polysurfaces do not accidentally crack open, polysurface control points cannot be turned on. To control-point edit a polysurface, Explode the object into separate surfaces first or use the <span class="label label-default">ExtractSrf</span> command to separate the surfaces you want to edit.
* While control points are on, they can be selected and deleted. This changes the shape of the curve or surface.


* ####**Edit Points On** <span class="label label-default">EditPtOn</span>

Displays points on the curve evaluated at knot averages.
* For example, if the curve degree is three and the knot vector is 0, 0, 0, 1, 2, 3, 3, 3 the edit points are points on the curve evaluated at these parameter values: 0, 1/3, 1, 2, 8/3, 3 Edit points are like control points except they are always located on the curve and moving one edit point generally changes the shape of the entire curve (moving one control point only changes the shape of the curve in a sub region). Edit points are most useful when you need a point on the interior of a curve to pass exactly through a certain location. Control point editing is preferred when you need to change the look of a curve and maintaining "fairness" is important. 

* The edit points in Rhino are points on the curve evaluated at knot averages. They are not knots themselves.
While edit points are on, they can be selected and deleted. This changes the shape of the curve. <br></br>


* ####**Extend** <span class="label label-default">Extend</span>

Lengthens a curve.
* You can use any combination of curves, surfaces, and solids as boundary edges.
* If you want to extend two curves to meet each other simultaneously, use the Connect command. <br></br>


* ####**Fillet** <span class="label label-default">Fillet</span>

Adds a tangent arc between two curves and trims or extends the curves to the arc.
* ####**Trim** <span class="label label-default">Trim</span>

Cut and delete selected portions of an object at the intersection with another object.
* If it is difficult to select the parts to trim off, use the <span class="label label-default">Split</span> command and then delete the unwanted parts.
* Use the <span class="label label-default">Untrim</span> command to remove a trimming boundary from a surface.
* When trimming a surface with a curve in a plan parallel view like the default <span class="label label-default">Top</span>, <span class="label label-default">Front</span>, and <span class="label label-default">Right</span> views, the cutting curve is projected on the surface in the view direction.

* When trimming a surface with a planar curve in an angled parallel or a perspective view like the default <span class="label label-default">Perspective</span> view, the cutting curve is projected on the surface in a direction perpendicular to the curve plane.

* When trimming a surface with a 3-D curve in an angled parallel or a perspective view, the cutting curve is pulled on the surface by closest points.


* ####**Join** <span class="label label-default">Join</span>

Connects objects together to form a single object. Join turns lines into polylines, curves into polycurves, surfaces and polysurfaces into polysurfaces or solids.
* You can join curves that are arranged sequentially.

* When Joining curves, the old curves are discarded and a new one added.

* The coordinates of the two joined ends are replaced with a single coordinate half way between the two original ends.


* ####**Explode** <span class="label label-default">Explode</span>

Breaks objects down into components.
* ####**Offset** <span class="label label-default">Offset</span>

Copies a curve so that all locations on the copied curve are a specified distance from the original curve.


* ####**Rebuild** <span class="label label-default">Rebuild</span>

Reconstructs selected curves or surfaces to a specified degree and control point number.
* Turn on control points and curvature graph to see the details of the curve structure.

* A group of curves will be rebuilt with curves of a specified degree and specified number of control points. The knot of the resulting curve more evenly spaced. To rebuild a curve with uneven knot spacing but a more accurate fit, use the <span class="label label-default">FitCrv</span> command.


* ####**Close Curve** <span class="label label-default">CloseCrv</span>

Closes open curves. Curves are closed either with a straight segment or, if they are within joining tolerance of one another, by moving the curve end point to the curve start point.


* ####**Tween Curves** <span class="label label-default">TweenCurves</span>

Creates curves between two open or closed input curves.
* ####**Project** <span class="label label-default">Project</span>

Creates curves or points on a surface that are the intersections of the surface and curves or points projected toward the construction plane.

* You can select all the projection objects and target surfaces before starting the command.
The curves are projected vertical to the construction plane that is active when the surface selection is completed.
* If the projection misses the selected surfaces and polysurfaces, a curve will not be created. Make sure the correct construction plane is active when you select the surfaces.
* The <span class="label label-default">Pull</span> command will suck the curve back toward the surface by closest points. The <span class="label label-default">Project</span> command will not work in situations where you want to pull a curve onto a cylinder when the curve goes most of the way around the cylinder. Use the <span class="label label-default">Pull</span> command in this case.
* The Project command creates complex curves that can be simplified with the Rebuild command. You will need to be careful with the <span class="label label-default">Rebuild</span> command and use enough points to keep the curve trimmable.
* The <span class="label label-default">Project</span> command can be faster than <span class="label label-default">Extrude</span> followed by <span class="label label-default">Trim</span> or <span class="label label-default">Split</span>.
* Smooth projection curves create smooth trim curves. Basic shapes like ellipses, circles, lines, and free-form curves work well for projection curves.


* ####**Project To C-Plane** <span class="label label-default">ProjectToCplane</span>

Flattens objects onto the construction plane.


* ####**Rotate 2D** <span class="label label-default">Rotate</span>

Rotates objects around an axis perpendicular to the current construction plane.
* ####**Rotate 3D** <span class="label label-default">Rotate3d</span>

Rotates objects around a specified axis in 3-D space.


* ####**Move Vertically** <span class="label label-default">Move</span> + <span class="label label-default">V</span>

Moves objects from one location to another. Vertical - Moves the object vertical to the current construction plane.


* ####**Select Curves** <span class="label label-default">SelCrv</span>

Selects all curves.

* ####**Select Open Curves** <span class="label label-default">SelOpenCrv</span>

Selects all open curves.
* ####**Select Closed Curves** <span class="label label-default">SelClosedCrv</span>

Selects all closed curves.

---

```

WORKFLOWS

*See folder for temporary workflow shorts.
**Suggested Settings :: Perp Snap, End Snap, Intersect Snap, Smart Track
Osnaps

BUILD WIRE FRAME SCAFFOLD, ROTATE 3D -
link

PRODUCE A SPLINE, OR SERIES, OFFSET STANDARD, POINTS ON -- EDIT, REBUILD, EDIT -- REBUILD IN PREPARATION TO LOFT

OFFSET THROUGH POINT, POLYLINE, TRIM, JOIN, REBUILD

```




