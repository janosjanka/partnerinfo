// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;

namespace Partnerinfo.Campaign
{
    /// <summary>
    /// Represents a campaign period with a unique identifier in the system.
    /// </summary>
    public class CampaignItem
    {
        /// <summary>
        /// Gets or sets the primary key for this campaign.
        /// </summary>
        /// <value>
        /// The primary key.
        /// </value>
        public int Id { get; set; }

        /// <summary>
        /// Gets or sets a set of key/value pairs that configure this campaign.
        /// </summary>
        /// <value>
        /// A set of key/value pairs.
        /// </value>
        public CampaignOptions Options { get; set; }

        /// <summary>
        /// Gets or sets the date and time, in UTC, when this campaign was last modified.
        /// </summary>
        /// <value>
        /// The date and time, in UTC, when this campaign was last modified.
        /// </value>
        public DateTime ModifiedDate { get; set; } = DateTime.UtcNow;

        /// <summary>
        /// Gets or sets the user identity who modified this campaign.
        /// </summary>
        /// <value>
        /// The user identity who modified this campaign.
        /// </value>
        public IUserIdentity ModifiedBy { get; set; }
    }
}
