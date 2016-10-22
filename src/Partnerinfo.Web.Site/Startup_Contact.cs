// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Partnerinfo.Contact;
using Partnerinfo.Contact.EntityFrameworkCore;

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
        public void ConfigureContactServices(IServiceCollection services)
        {
            // TODO: Write a ContactBuilder to do these just like ASP.NET Identity.
            services.AddDbContext<ContactDbContext>(options => options.UseSqlServer(Configuration["ConnectionStrings:DefaultConnection"]));
            services.AddScoped<OperationErrorDescriber>();
            services.AddScoped<IContactStore>(factory => new ContactStore(factory.GetRequiredService<ContactDbContext>()));
            services.AddScoped<ContactManager>();
        }

        /// <summary>
        /// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        /// </summary>
        /// <param name="app">Defines a class that provides the mechanisms to configure an application's request  pipeline.</param>
        /// <param name="env">Provides information about the web hosting environment an application is running in.</param>
        /// <param name="logFactory">Represents a type used to configure the logging system.</param>
        public void ConfigureContact(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory logFactory)
        {
            // For more details on creating database during deployment see http://go.microsoft.com/fwlink/?LinkID=615859
            if (!env.IsDevelopment())
            {
                try
                {
                    using (var serviceScope = app.ApplicationServices.GetRequiredService<IServiceScopeFactory>().CreateScope())
                    {
                        serviceScope.ServiceProvider.GetService<ContactDbContext>().Database.Migrate();
                    }
                }
                catch
                {
                }
            }
        }
    }
}
