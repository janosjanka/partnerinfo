# Partnerinfo Core

Partnerinfo (PI) Core defines core interfaces and functionality.

1. This is a lightweight and extensible library that does not have any knowledges about persistance storages,
   validation libraries, plugin models, and so on. As a result, you should never add a reference to one of these
   libraries in this class library. Keep it clean and simple focusing on data and business operations.

2. Do not use reflection and other meta data readers even if you can cache information about types and members.
   Fortunately, .NET Core organized them out from the core library. Use fluent APIs instead of christmas tree-like
   attributes for everything, including validation, MEF, EF, etc. Performance is much better than using a bunch of attributes.

3. [Composition over inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance)
   
   To favor composition over inheritance is a design principle that gives the design higher flexibility,
   giving business-domain classes and more stable business domain in the long term.
   In other words, HAS-A can be better than an IS-A relationship.

   Initial design is simplified by identifying system object behaviors in separate interfaces instead of
   creating a hierarchical relationship to distribute behaviors among business-domain classes via inheritance.
   This approach more easily accommodates future requirements changes that would otherwise require
   a complete restructuring of business-domain classes in the inheritance model. Additionally,
   it avoids problems often associated with relatively minor changes to an inheritance-based model
   that includes several generations of classes.

4. [Domain Driven Design (DDD)](https://en.wikipedia.org/wiki/Domain-driven_design])
    - **Entity**: An object that is not defined by its attributes, but rather by a thread of continuity and its identity.
    - **Value Object**: An object that contains attributes but has no conceptual identity. They should be treated as immutable.
    - **Aggregate**: A collection of objects that are bound together by a root entity, otherwise known as an aggregate root.
	  The aggregate root guarantees the consistency of changes being made within the aggregate by forbidding
	  external objects from holding references to its members.
    - **Domain Event**: A domain object that defines an event (something that happens). A domain event is an event that domain experts care about.
    - **Service**: When an operation does not conceptually belong to any object. Following the natural contours of the problem,
      you can implement these operations in services.
    - **Repository**: Methods for retrieving domain objects should delegate to a specialized Repository object such that
      alternative storage implementations may be easily interchanged.
    - **Factory**: Methods for creating domain objects should delegate to a specialized Factory object such that
      alternative implementations may be easily interchanged.

   [Anemic domain model](https://en.wikipedia.org/wiki/Anemic_domain_model])
    - Clear separation between logic and data (procedural programming).
    - Works well for simple applications.
    - Results in stateless logic, which facilitates scaling out.
    - Avoids the need for a complex OO-Database mapping layer.