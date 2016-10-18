// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Routing;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;

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
        /// This method gets called by the runtime. Use this method to add services to the container.
        /// For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        /// </summary>
        /// <param name="services">Specifies the contract for a collection of service descriptors.</param>
        public void ConfigureMvcServices(IServiceCollection services)
        {
            services
                .AddMvc()
                .AddJsonOptions(options =>
                {
#if DEBUG
                    options.SerializerSettings.Formatting = Formatting.Indented;
#else
                    options.SerializerSettings.Formatting = Formatting.None;
#endif
                    options.SerializerSettings.MissingMemberHandling = MissingMemberHandling.Ignore;
                    options.SerializerSettings.PreserveReferencesHandling = PreserveReferencesHandling.None;
                    options.SerializerSettings.ObjectCreationHandling = ObjectCreationHandling.Replace;
                    options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                    options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                    options.SerializerSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
                    options.SerializerSettings.Converters = new JsonConverter[]
                    {
                        new StringEnumConverter { CamelCaseText = true },
                        new IsoDateTimeConverter() // DateTimeFormat = "yyyy-MM-ddTHH:mm:ss.fffZ"
                    };
                });
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app">Defines a class that provides the mechanisms to configure an application's request  pipeline.</param>
        /// <param name="env">Provides information about the web hosting environment an application is running in.</param>
        /// <param name="logFactory">Represents a type used to configure the logging system.</param>
        public void ConfigureMvc(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory logFactory)
        {
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}");

                // Matches any other request that doesn't appear to have a filename extension (defined as 'having a dot in the last URI segment').
                // This means you'll correctly get 404s for /some/dir/non-existent-image.png instead of returning the SPA HTML.
                // However, it means requests like /customers/isaac.newton will *not* be mapped into the SPA, so if you need to accept
                // URIs like that you'll need to match all URIs, e.g.:
                //    routes.MapRoute("spa-fallback", "{*anything}", new { controller = "Home", action = "Index" });
                // (which of course will match /customers/isaac.png too, so in that case it would serve the PNG image at that URL if one is on disk,
                // or the SPA HTML if not).
                routes.MapSpaFallbackRoute(
                    name: "spa-fallback",
                    defaults: new RouteValueDictionary { { "controller", "Home" }, { "action", "Index" } });
            });
        }
    }
}
