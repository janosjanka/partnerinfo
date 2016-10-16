// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

namespace Partnerinfo
{
    /// <summary>
    /// Represents an optional value.
    /// </summary>
    /// <typeparam name="T">The type</typeparam>
    public struct Optional<T>
    {
        private readonly bool _hasValue;
        private readonly T _value;

        /// <summary>
        /// Gets a value indicating whether the current object has a value.
        /// </summary>
        /// <value>
        ///   <c>true</c> if this instance has value; otherwise, <c>false</c>.
        /// </value>
        public bool HasValue => _hasValue;

        /// <summary>
        /// Gets the value of the current object.
        /// </summary>
        /// <value>
        /// The value.
        /// </value>
        public T Value => _value;

        /// <summary>
        /// Initializes a new instance to the specified value.
        /// </summary>
        /// <param name="value">The value.</param>
        public Optional(T value)
        {
            _hasValue = true;
            _value = value;
        }

        /// <summary>
        /// Creates a new object initialized to a specified value.
        /// </summary>
        /// <param name="value">The value.</param>
        /// <returns>
        /// The result of the conversion.
        /// </returns>
        public static implicit operator Optional<T>(T value) => new Optional<T>(value);
    }
}
