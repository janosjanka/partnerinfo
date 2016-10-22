// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Partnerinfo.Contact.EntityFrameworkCore
{
    /// <summary>
    /// Base class for the Entity Framework database context used for contact management.
    /// </summary>
    /// <seealso cref="Microsoft.EntityFrameworkCore.DbContext" />
    public sealed class ContactDbContext : DbContext
    {
        /// <summary>
        /// Gets or sets the <see cref="Microsoft.EntityFrameworkCore.DbSet`1" /> of contacts.
        /// </summary>
        /// <value>
        /// The <see cref="Microsoft.EntityFrameworkCore.DbSet`1" /> of contacts.
        /// </value>
        public DbSet<ContactItem> Contacts { get; set; }

        /// <summary>
        /// Initializes a new instance of the <see cref="ContactDbContext" /> class.
        /// </summary>
        public ContactDbContext()
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

            builder.Entity<ContactItem>(b =>
            {
                // Shadow properties       
                b.Property(typeof(int?), "SponsorId");
                //b.Property(typeof(int?), "ModifiedById");

                // Visible properties
                b.Property(p => p.ConcurrencyStamp).HasMaxLength(64).IsConcurrencyToken();

                // Keys & Indexes
                b.HasKey(p => p.Id);
                // b.HasAlternateKey(p => p.Uri);
                // b.HasIndex(p => p.Uri).IsUnique();

                // Relationships
                b.HasOne(typeof(ContactItem), nameof(ContactItem.Sponsor))
                    .WithOne()
                    .OnDelete(DeleteBehavior.SetNull);

                // TODO: This is just a test now.
                b.Ignore(p => p.Attributes);
                b.Ignore(p => p.ModifiedBy);
                b.Ignore(p => p.BusinessTags);

                //b.HasOne(typeof(Identity.EntityFrameworkCore.UserItem), nameof(ContactItem.ModifiedBy))
                //    .WithOne()
                //    .OnDelete(DeleteBehavior.Restrict);

                b.ToTable("Contacts");
            });
        }
    }
}
