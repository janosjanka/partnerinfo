// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
using System.Collections.Immutable;

namespace Partnerinfo
{
    /// <summary>
    /// A static factory class to create new instances of the generic <see cref="ListResult{T}" /> class
    /// using type inference or deduction on methods. These factory methods also enable us to cache
    /// immutable instances decreasing GC pressure.
    /// </summary>
    public static class ListResult
    {
        /// <summary>
        /// Creates a new instance of the <see cref="ListResult{T}" /> class or returns a cached version of the immutable object.
        /// </summary>
        /// <typeparam name="T">The type of the items.</typeparam>
        /// <returns>
        /// The <see cref="ListResult{T}" />.
        /// </returns>
        public static ListResult<T> Create<T>() => ListResult<T>.Empty;

        /// <summary>
        /// Creates a new instance of the <see cref="ListResult{T}" /> class or returns a cached version of the immutable object.
        /// </summary>
        /// <typeparam name="T">The type of the items.</typeparam>
        /// <param name="data">The strongly typed list of results to return.</param>
        /// <returns>
        /// The <see cref="ListResult{T}" />.
        /// </returns>
        public static ListResult<T> Create<T>(ImmutableArray<T> data)
        {
            if (data.IsDefaultOrEmpty)
            {
                return ListResult<T>.Empty;
            }

            return new ListResult<T>(data, data.Length);
        }

        /// <summary>
        /// Creates a new instance of the <see cref="ListResult{T}" /> class or returns a cached version of the immutable object.
        /// </summary>
        /// <typeparam name="T">The type of the items.</typeparam>
        /// <param name="data">The strongly typed list of results to return.</param>
        /// <param name="total">The total.</param>
        /// <returns>
        /// The <see cref="ListResult{T}" />.
        /// </returns>
        public static ListResult<T> Create<T>(ImmutableArray<T> data, int total)
        {
            if (data.IsDefaultOrEmpty && total == 0)
            {
                return ListResult<T>.Empty;
            }

            return new ListResult<T>(data, total);
        }

        /// <summary>
        /// Creates a new instance of the <see cref="ListResult{T}" /> class or returns a cached version of the immutable object.
        /// </summary>
        /// <typeparam name="T">The type of the items.</typeparam>
        /// <param name="data">The strongly typed list of results to return.</param>
        /// <returns>
        /// The <see cref="ListResult{T}" />.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">data</exception>
        public static ListResult<T> Create<T>(IEnumerable<T> data)
        {
            if (data == null)
            {
                throw new ArgumentNullException(nameof(data));
            }

            return Create(data.ToImmutableArray());
        }

        /// <summary>
        /// Creates a new instance of the <see cref="ListResult{T}" /> class or returns a cached version of the immutable object.
        /// </summary>
        /// <typeparam name="T">The type of the items.</typeparam>
        /// <param name="data">The strongly typed list of results to return.</param>
        /// <param name="total">The total.</param>
        /// <returns>
        /// The <see cref="ListResult{T}" />.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">data</exception>
        public static ListResult<T> Create<T>(IEnumerable<T> data, int total)
        {
            if (data == null)
            {
                throw new ArgumentNullException(nameof(data));
            }

            return Create(data.ToImmutableArray(), total);
        }
    }
}
