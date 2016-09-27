// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Partnerinfo.Identity.EntityFrameworkCore
{
    /// <summary>
    /// Base class for the Entity Framework database context used for identity management.
    /// </summary>
    /// <seealso cref="Microsoft.AspNetCore.Identity.EntityFrameworkCore.IdentityDbContext{Partnerinfo.Identity.EntityFrameworkCore.UserItem, Partnerinfo.Identity.EntityFrameworkCore.RoleItem, System.Int32}" />
    public sealed class IdentityDbContext : IdentityDbContext<UserItem, RoleItem, int>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="IdentityDbContext" /> class.
        /// </summary>
        public IdentityDbContext()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="IdentityDbContext" /> class.
        /// </summary>
        /// <param name="options">The options to be used by a <see cref="T:Microsoft.EntityFrameworkCore.DbContext" />.</param>
        public IdentityDbContext(DbContextOptions options)
            : base(options)
        {
        }

        /// <summary>
        /// Configures the schema needed for the identity framework.
        /// </summary>
        /// <param name="builder">The builder being used to construct the model for this context.</param>
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);

            builder.HasDefaultSchema("Identity");

            builder.Entity<UserItem>().ToTable("Users");
            builder.Entity<IdentityUserClaim<int>>().ToTable("UserClaims");
            builder.Entity<IdentityUserLogin<int>>().ToTable("UserLogins");
            builder.Entity<IdentityUserRole<int>>().ToTable("UserRoles");
            builder.Entity<IdentityUserToken<int>>().ToTable("UserTokens");

            builder.Entity<RoleItem>().ToTable("Roles");
            builder.Entity<IdentityRoleClaim<int>>().ToTable("RoleClaims");
        }
    }
}
