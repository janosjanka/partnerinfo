// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using System.Collections.Generic;

namespace Partnerinfo.Contact
{
    /// <summary>
    /// Represents a contact with a unique identifier in the system.
    /// </summary>
    public class ContactItem
    {
        /// <summary>
        /// Gets or sets the primary key for this contact.
        /// </summary>
        /// <value>
        /// The primary key.
        /// </value>
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets a collection of dynamic attributes for this contact.
        /// </summary>
        /// <value>
        /// A collection of dynamic attributes.
        /// </value>
        public ContactAttributes Attributes { get; set; }

        /// <summary>
        /// Gets or sets the date and time, in UTC, when this contact was last modified.
        /// </summary>
        /// <value>
        /// The date and time, in UTC, when this contact was last modified.
        /// </value>
        public DateTime ModifiedDate { get; set; } = DateTime.UtcNow;

        /// <summary>
        /// Gets or sets the user identity who modified this contact.
        /// </summary>
        /// <value>
        /// The user identity who modified this contact.
        /// </value>
        public IUserIdentity ModifiedBy { get; set; }

        /// <summary>
        /// Gets a collection of <see cref="ActivityTagInfo" />s to be belonging to this <see cref="ContactItem" />.
        /// </summary>
        /// <value>
        /// A collection of <see cref="ActivityTagInfo" />s to be belonging to this <see cref="ContactItem" />.
        /// </value>
        public virtual ICollection<ActivityTagInfo> ActivityTags { get; } = new List<ActivityTagInfo>();
    }
}
