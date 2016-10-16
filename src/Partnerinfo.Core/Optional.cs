// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Represents an optional value that can be used to express your intention instead of using nulls.
    /// </summary>
    /// <typeparam name="T">The underlying value type of the <see cref="Optional{T}" /> generic type.</typeparam>
    public struct Optional<T>
    {
        /// <summary>
        /// Gets a value indicating whether the current object has a value.
        /// </summary>
        /// <value>
        ///   <c>true</c> if this instance has value; otherwise, <c>false</c>.
        /// </value>
        public bool HasValue { get; }

        /// <summary>
        /// Gets the value of the current object.
        /// </summary>
        /// <value>
        /// The value.
        /// </value>
        public T Value { get; }

        /// <summary>
        /// Initializes a new instance of the <see cref="Optional{T}" /> struct.
        /// </summary>
        /// <param name="value">The value.</param>
        public Optional(T value)
        {
            HasValue = true;
            Value = value;
        }

        /// <summary>
        /// Performs an implicit conversion from <see cref="T" /> to <see cref="Optional{T}" />.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <returns>
        /// The result of the conversion.
        /// </returns>
        public static implicit operator Optional<T>(T value) => new Optional<T>(value);
    }
}
