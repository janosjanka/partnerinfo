// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.EntityFrameworkCore;

namespace Partnerinfo.Contact.EntityFrameworkCore
{
    public class ContactDbContext : DbContext
    {
        /// <summary>
        /// Gets or sets the <see cref="Microsoft.EntityFrameworkCore.DbSet`1" /> of products.
        /// </summary>
        public DbSet<ContactItem> Contacts { get; set; }

        /// <summary>
        /// Initializes a new instance of the <see cref="ContactDbContext" /> class.
        /// </summary>
        public ContactDbContext()
            : base()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="ContactDbContext" /> class.
        /// </summary>
        /// <param name="options">The options to be used by a <see cref="T:Microsoft.EntityFrameworkCore.DbContext" />.</param>
        public ContactDbContext(DbContextOptions options)
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

            builder.HasDefaultSchema("Contact");
        }
    }
}
