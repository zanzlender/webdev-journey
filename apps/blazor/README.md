# Blazor test

_**Written:** 7th of June 2023._

## C# langage

## .NET

> Microsoft’s .NET is a free, open-source developer’s platform for building server-side applications. With .NET, you can use multiple languages (C#, F#, or Visual Basic), libraries, and editors to build web, mobile, gaming, IoT, and desktop applications.

[About .NET - article](https://www.netsolutions.com/insights/net-core-vs-net-framework/)

For building applications, the .NET development framework has two supported platforms:

1. .NET Framework
2. .NET Core

### .NET Framework

The .NET framework was the first software framework introduced by Microsoft, and it was built only for Windows.

Today it only receives bug fixes and reliability updates have been released with no further plans to add new versions.

### .NET Core

> .NET Core is a runtime for applications that support it. Just like NodeJS is a JS runtime.

**.NET Core is a newer version of the .NET domain** that addresses the limitation of the .NET Framework. .NET Core is a cross-platform framework that can be run for Windows, macOS, and Linux. Moreover, it is open-source and accepts contributions from the developer's community.

In November 2020, Microsoft released .NET 5.0, dropping the "Core" branding. Meaning .NET 6.0, .NET 7.0 ... are all .NET Core.

### .NET Standard

Many often search for ".NET Core vs. .NET Framework vs. .NET Standard", believing that .NET Standard is another framework. **However, .NET Standard is a library that, when needed, can be used across all .NET implementations.**

### When to use .NET framework vs .NET Core

The .NET Framework is a better choice if you:

- Already know it or have a team with .NET Framework expertise and don’t have time to learn new technology
- Prefer a stable environment vs. continuous upgrades and changes
- Have nearer release schedules
- Have an existing .NET Framework app and need to extend its functionality (vs. migrating it)
- Are building Windows desktop applications using Windows Forms or WPF

.NET Core is a better choice if you:

- Want to target your apps in a wider variety of operating systems ("create once, run anywhere" cross-platform capability)
- Require high performance and/or scalability
- Are just learning .NET
- Prefer open-source
- Are using Docker containers and/or microservices
- Need to support side-by-side installation

## ASP.NET

> ASP.NET Core is a collection of libraries that form a Framework for building web applications.

Here we differentiate 2 types of ASP.net:

- ASP.NET MVC
- ASP.NET Core

### ASP.NET MVC

Older version of ASP.NET. Discontinued and not recommended for new projects.

Read more about it here: [Why ASP.NET Core is a better solution for building web applications than ASP.NET MVC - article](https://www.resolutesoftware.com/blog/asp-net-mvc-vs-asp-net-core/).

### ASP.NET Core

ASP.NET Core libraries can be used on both .NET Core and the "Full .NET Framework", with the difference being:

- **_ASP.NET Core using .NET Core_** - all dependencies are self-contained, can use most NuGet packages, can't use Windows-specific packages, can execute on Windows, Linux, and Mac.
- **_ASP.NET Core using .NET Framework_** - most dependencies are self-contained, only executes on Windows, will have access to Windows-specific NuGet packages, needs the .NET framework version which is targeted installed on the machine.

**IMPORTANT!** Since v3.0 ASP.NET depends on .NET Core and **cannot be used with .NET Framework anymore**.

## What is Blazor?

> Blazor is a Single Page Application development framework, that enables building web application with HTML, CSS and C#.

Watch this video for a quick overview: [Blazor in 100 seconds - video](https://www.youtube.com/watch?v=QXxNlpjnulI&pp=ygUPYmxhem9yIGZpcmVoc2lw).

## Types of Blazor apps

**Clientside only app** VS **Clientside app with backend** VS **Serverside app**

Read more about the trade-offs for each type here: [Stackoverflow question](https://stackoverflow.com/questions/71265374/blazor-server-side-vs-blazor-webassembly-hosted).

## Tutorial

- [How to learn Blazor](https://www.youtube.com/watch?v=GIcAADklnRo) - general overview, how to learn...
- [Beginner, clientside only Blazor tutorial](https://www.youtube.com/watch?v=WfMHUp8tOVE) - beginner in depth tutorial
