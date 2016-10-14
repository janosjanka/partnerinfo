# Partnerinfo Core

Partnerinfo (PI) Core defines core interfaces and functionality.

1. This is a lightweight and extensible library that does not have any knowledges about persistance storages,
   validation libraries, plugin models, and so on. As a result, you should never add a reference to one of these
   libraries in this class library. Keep it clean and simple focusing on data and business operations.

2. Do not use reflection and other meta data readers. Use fluent APIs instead of christmas tree-like
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

4. Similarly to [ASP.NET Identity Core](https://github.com/aspnet/Identity), this library also uses
   [anemic domain model](https://en.wikipedia.org/wiki/Anemic_domain_model) rather than a rich data model.

    Advantages:

    - Clear separation between logic and data.
    - Works well for simple applications.
    - Results in stateless logic, which facilitates scaling out.
    - Avoids the need for a complex OO-Database mapping layer.
