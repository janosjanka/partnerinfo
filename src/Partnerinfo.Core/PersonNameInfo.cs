// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Represents an immutable, thread-safe, and cachable person name as DDD value object.
    /// </summary>
    public sealed class PersonNameInfo
    {
        /// <summary>
        /// Represents an empty person name object.
        /// </summary>
        public static readonly PersonNameInfo Empty = new PersonNameInfo();

        /// <summary>
        /// Gets or sets the first name for this contact provided by a storage provider.
        /// </summary>
        /// <value>
        /// The first name.
        /// </value>
        public string FirstName { get; private set; }

        /// <summary>
        /// Gets or sets the first name for this contact provided by a storage provider.
        /// </summary>
        /// <value>
        /// The first name.
        /// </value>
        public string MiddleName { get; private set; }

        /// <summary>
        /// Gets or sets the last name for this contact provided by a storage provider.
        /// </summary>
        /// <value>
        /// The last name.
        /// </value>
        public string LastName { get; private set; }

        /// <summary>
        /// Prevents a default instance of the <see cref="PersonNameInfo" /> class from being created.
        /// </summary>
        /// <remarks>
        /// The parameterless constructor enables two-way serialization scenarios.
        /// </remarks>
        private PersonNameInfo()
        {
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="PersonNameInfo" /> class.
        /// </summary>
        /// <param name="firstName">A <see cref="string" /> that contains a first name.</param>
        /// <param name="lastName">A <see cref="string" /> that contains a last name.</param>
        public PersonNameInfo(string firstName, string lastName)
        {
            FirstName = firstName;
            LastName = lastName;
        }

        /// <summary>
        /// Initializes a new instance of the <see cref="PersonNameInfo" /> class.
        /// </summary>
        /// <param name="firstName">A <see cref="string" /> that contains a first name.</param>
        /// <param name="middleName">A <see cref="string" /> that contains a middle name.</param>
        /// <param name="lastName">A <see cref="string" /> that contains a last name.</param>
        public PersonNameInfo(string firstName, string middleName, string lastName)
        {
            FirstName = firstName;
            MiddleName = middleName;
            LastName = lastName;
        }

        /// <summary>
        /// Returns a <see cref="string" /> that represents this instance.
        /// </summary>
        /// <returns>
        /// A <see cref="string" /> that represents this instance.
        /// </returns>
        public sealed override string ToString() => $"{nameof(FirstName)}: {FirstName}, {nameof(MiddleName)}: {MiddleName}, {nameof(LastName)}: {LastName}";
    }
}
