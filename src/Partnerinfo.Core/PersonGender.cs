// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Represents the gender of a person.
    /// </summary>
    public enum PersonGender : byte
    {
        /// <summary>
        /// Indicates no gender specification.
        /// </summary>
        Unknown = 0,

        /// <summary>
        /// Indicates a male.
        /// </summary>
        Male = 1,

        /// <summary>
        /// Indicates a female.
        /// </summary>
        Female = 2
    }
}
