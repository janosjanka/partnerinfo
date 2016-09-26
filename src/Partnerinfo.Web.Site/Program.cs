// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;

namespace Partnerinfo
{
    /// <summary>
    /// An ASP.NET Core app is simply a console app that creates a web server in its Main method.
    /// https://docs.asp.net/en/latest/intro.html#application-anatomy
    /// </summary>
    public sealed class Program
    {
        public static void Main(string[] args)
        {
            var config = new ConfigurationBuilder()
                .AddCommandLine(args)
                .AddEnvironmentVariables(prefix: "ASPNETCORE_")
                .Build();

            // Kestrel is a cross-platform web server based on libuv, a cross-platform asynchronous I/O library.
            // https://docs.asp.net/en/latest/fundamentals/servers.html#kestrel
            //
            // If you intend to deploy your application on a Windows server,
            // you should run IIS as a reverse proxy server that manages and proxies requests to Kestrel.
            // If deploying on Linux, you should run a comparable reverse proxy server such as Apache or Nginx
            // to proxy requests to Kestrel.

            var host = new WebHostBuilder()
                .UseConfiguration(config)
                .UseKestrel()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .UseStartup<Startup>()
                .Build();

            host.Run();
        }
    }
}
