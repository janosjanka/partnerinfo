# Prima-Verda Core

## Design Goals

1. Domain Driven Design (DDD)
   https://en.wikipedia.org/wiki/Domain-driven_design

    1.1 Entity:
	    An object that is not defined by its attributes, but rather by a thread of continuity and its identity.

    1.2 Value Object:
	    An object that contains attributes but has no conceptual identity. They should be treated as immutable.

    1.3 Aggregate:
	    A collection of objects that are bound together by a root entity, otherwise known as an aggregate root.
	    The aggregate root guarantees the consistency of changes being made within the aggregate by forbidding
	    external objects from holding references to its members.

    1.4 Domain Event:
	    A domain object that defines an event (something that happens).
	    A domain event is an event that domain experts care about.

	1.5 Service:
		When an operation does not conceptually belong to any object.
		Following the natural contours of the problem, you can implement these operations in services.

	1.6 Repository:
		Methods for retrieving domain objects should delegate to a specialized Repository object
		such that alternative storage implementations may be easily interchanged

	1.7 Factory:
		Methods for creating domain objects should delegate to a specialized Factory object
		such that alternative implementations may be easily interchanged

2. https://en.wikipedia.org/wiki/Composition_over_inheritance

	To favor composition over inheritance is a design principle that gives the design higher flexibility,
	giving business-domain classes and more stable business domain in the long term.
	In other words, HAS-A can be better than an IS-A relationship.

	Initial design is simplified by identifying system object behaviors in separate interfaces instead of
	creating a hierarchical relationship to distribute behaviors among business-domain classes via inheritance.
	This approach more easily accommodates future requirements changes that would otherwise require
	a complete restructuring of business-domain classes in the inheritance model. Additionally,
	it avoids problems often associated with relatively minor changes to an inheritance-based model
	that includes several generations of classes.

3. This assembly does not have knowledge of persistance storage.