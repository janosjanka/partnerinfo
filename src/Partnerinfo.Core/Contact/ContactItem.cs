// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
using Newtonsoft.Json.Linq;

namespace Partnerinfo.Contact
{
    /// <summary>
    /// Represents a contact with a unique identifier in the system.
    /// </summary>
    /// <seealso cref="Partnerinfo.IUserIdentity" />
    public class ContactItem : IUserIdentity
    {
        /// <summary>
        /// Gets or sets the primary key for this contact provided by a storage provider.
        /// </summary>
        /// <value>
        /// The primary key.
        /// </value>
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets the email address for this contact provided by a storage provider.
        /// </summary>
        /// <value>
        /// The email.
        /// </value>
        public string Email { get; set; }

        /// <summary>
        /// Gets or sets the phone number for this contact provided by a storage provider.
        /// </summary>
        /// <value>
        /// The phone number.
        /// </value>
        public string PhoneNumber { get; set; }

        /// <summary>
        /// Gets or sets the first name for this contact provided by a storage provider.
        /// </summary>
        /// <value>
        /// The first name.
        /// </value>
        public string FirstName { get; set; }

        /// <summary>
        /// Gets or sets the first name for this contact provided by a storage provider.
        /// </summary>
        /// <value>
        /// The first name.
        /// </value>
        public string MiddleName { get; set; }

        /// <summary>
        /// Gets or sets the last name for this contact provided by a storage provider.
        /// </summary>
        /// <value>
        /// The last name.
        /// </value>
        public string LastName { get; set; }

        /// <summary>
        /// Gets or sets the gender for this contact provided by a storage provider.
        /// </summary>
        /// <value>
        /// The gender.
        /// </value>
        public PersonGender Gender { get; set; }

        /// <summary>
        /// Gets the birthday for this contact provided by a storage provider.
        /// </summary>
        /// <value>
        /// The birthday.
        /// </value>
        public DateTime? Birthday { get; set; }

        /// <summary>
        /// Gets or sets a set of key/value pairs for this contact provided by a storage provider.
        /// </summary>
        /// <value>
        /// A set of key/value pairs.
        /// </value>
        public JObject Attributes { get; set; }

        /// <summary>
        /// Gets or sets the user identity who modified this contact.
        /// </summary>
        /// <value>
        /// The user identity who modified this contact.
        /// </value>
        public IUserIdentity ModifiedBy { get; set; }

        /// <summary>
        /// Gets or sets the date and time, in UTC, when this contact was last modified.
        /// </summary>
        /// <value>
        /// The date and time, in UTC, when this contact was last modified.
        /// </value>
        public DateTimeOffset ModifiedDate { get; set; } = DateTimeOffset.UtcNow;

        /// <summary>
        /// Gets or sets the sponsor who invited this contact to join.
        /// </summary>
        /// <value>
        /// The sponsor.
        /// </value>
        public IUserIdentity Sponsor { get; set; }

        /// <summary>
        /// Gets a collection of <see cref="BusinessTagInfo" />s to be belonging to this <see cref="ContactItem" />.
        /// </summary>
        /// <value>
        /// A collection of <see cref="BusinessTagInfo" />s to be belonging to this <see cref="ContactItem" />.
        /// </value>
        public ICollection<BusinessTagInfo> BusinessTags { get; } = new List<BusinessTagInfo>();
    }
}
