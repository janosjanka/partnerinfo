## Actions aka Activities & Links

An action simply means an activity in a workflow-like environment. The goal of it is to enable people (especially marketing specialists) to
define business processes in a comfortable way.

####Design Decisions

1. Anyone can write custom activities and inject those into the system using a plug-in model, such as Managed Extensibility Framework (MEF).
2. Actions are micro-tasks (response time must be very fast because of million clicks on action links on the Web).
4. Cross-platform support & performance (response time, native AoT compilation, etc.) is a critical factor for an online marketing system.
6. Implementation itself allows anyone to write Workflow Foundation activities around actions making those platform-dependent and slow.