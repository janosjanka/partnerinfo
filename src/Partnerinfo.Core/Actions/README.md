## Actions aka Activities & Links

An action simply means an activity in a workflow-like environment. The goal of it is to enable people (especially marketing specialists) to
define business processes in a comfortable way.

####Design Decisions

1. Anyone can write custom activities and inject those into the system using a plug-in model, such as Managed Extensibility Framework (MEF).
2. Actions can be used in both workflow activities or standalone modules. Altough Workflow Foundation supports reliability and recovery
   but also makes the application platform-agnostic. [Workflow Foundation and System.Xaml are not supported on .NET Core](https://github.com/dotnet/corefx/issues/2394) for the time being.
3. Response time must be very fast because of million clicks on action links on the Web.
   Performance is a critical factor for an online marketing system.