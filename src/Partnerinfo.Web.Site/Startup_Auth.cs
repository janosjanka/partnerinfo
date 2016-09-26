// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
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
        /// This method gets called by the runtime. Use this method to add services to the container.
        /// For more information on how to configure your application, visit http://go.microsoft.com/fwlink/?LinkID=398940
        /// </summary>
        /// <param name="services">Specifies the contract for a collection of service descriptors.</param>
        public void ConfigureAuthServices(IServiceCollection services)
        {
            services.AddAuthentication();
            services.AddAuthorization();
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app">Defines a class that provides the mechanisms to configure an application's request  pipeline.</param>
        /// <param name="env">Provides information about the web hosting environment an application is running in.</param>
        /// <param name="logFactory">Represents a type used to configure the logging system.</param>
        public void ConfigureAuth(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory logFactory)
        {
            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                CookieHttpOnly = true,
                CookieName = ResourceKeys.IdentityTokenCookieName
            });

            //app.UseJwtBearerAuthentication(new JwtBearerOptions
            //{
            //    AutomaticAuthenticate = true,
            //    AutomaticChallenge = true,
            //    AuthenticationScheme = JwtBearerDefaults.AuthenticationScheme,
            //    RequireHttpsMetadata = false
            //    Audience = "http://localhost:64019/",
            //    Authority = "http://localhost:64019/"
            //});
        }
    }
}
