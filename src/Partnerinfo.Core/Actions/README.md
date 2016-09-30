## Actions aka Activities & Links

An action simply means an activity in a workflow-like environment. The goal of it is to enable people (especially marketing specialists) to
define business processes in a comfortable way.

####Design Decisions

1. Developers can develop custom activities and inject those into the system using a plug-in model, such as Managed Extensibility Framework (MEF).
2. Actions are micro-tasks and not monolitic durable instances => Response time must be very fast because of million clicks on action links on the Web.
3. It should run on .NET Core (Workflow Foundation is not supported) => It should be cross-platform-ready.