// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace Partnerinfo
{
    /// <summary>
    /// Provides the entry point for an application, and is required for all applications.
    /// ASP.NET searches the primary assembly for a class named Startup (in any namespace).
    /// You can specify a different assembly to search using the Hosting:Application configuration key.
    /// </summary>
    public sealed partial class Startup
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="Startup" /> class.
        /// </summary>
        /// <param name="env">Provides information about the web hosting environment an application is running in.</param>
        public Startup(IHostingEnvironment env)
        {
            Configuration = new ConfigurationBuilder()
                .SetBasePath(env.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables()
                .Build();
        }

        /// <summary>
        /// Gets the root of an <see cref="Microsoft.Extensions.Configuration.IConfiguration" /> hierarchy.
        /// </summary>
        /// <value>
        /// The root of an <see cref="Microsoft.Extensions.Configuration.IConfiguration" /> hierarchy.
        /// </value>
        public IConfigurationRoot Configuration { get; }

        /// <summary>
        /// This method gets called by the runtime. Use this method to add services to the container.
        /// For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        /// </summary>
        /// <param name="services">Specifies the contract for a collection of service descriptors.</param>
        public void ConfigureServices(IServiceCollection services)
        {
            ConfigureLocalizationServices(services);
            ConfigureIdentityServices(services);
            ConfigureAuthServices(services);
            ConfigureMvcServices(services);
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app">Defines a class that provides the mechanisms to configure an application's request  pipeline.</param>
        /// <param name="env">Provides information about the web hosting environment an application is running in.</param>
        /// <param name="logFactory">Represents a type used to configure the logging system.</param>
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory logFactory)
        {
            logFactory.AddConsole(Configuration.GetSection("Logging"));
            logFactory.AddDebug();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions
                {
                    // This watches for any changes you make to source files on disk (e.g., .ts/.html/.sass/etc. files),
                    // and automatically rebuilds them and pushes the result into your browser window, without even needing to reload the page.
                    // https://github.com/aspnet/JavaScriptServices/tree/dev/src/Microsoft.AspNetCore.SpaServices#webpack-hot-module-replacement
                    HotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/home/error");
            }

            // Enables static file serving for the current request path.
            app.UseStaticFiles();

            ConfigureLocalization(app, env, logFactory);
            ConfigureIdentity(app, env, logFactory);
            ConfigureAuth(app, env, logFactory);
            ConfigureMvc(app, env, logFactory);
        }
    }
}
