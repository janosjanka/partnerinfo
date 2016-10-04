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
        /// <param name="items">The strongly typed list of results to return.</param>
        /// <returns>
        /// The <see cref="ListResult{T}" />.
        /// </returns>
        public static ListResult<T> Create<T>(ImmutableArray<T> items)
        {
            if (items.IsDefaultOrEmpty)
            {
                return ListResult<T>.Empty;
            }

            return new ListResult<T>(items, items.Length);
        }

        /// <summary>
        /// Creates a new instance of the <see cref="ListResult{T}" /> class or returns a cached version of the immutable object.
        /// </summary>
        /// <typeparam name="T">The type of the items.</typeparam>
        /// <param name="items">The strongly typed list of results to return.</param>
        /// <param name="total">The total number of results before paging is applied.</param>
        /// <returns>
        /// The <see cref="ListResult{T}" />.
        /// </returns>
        public static ListResult<T> Create<T>(ImmutableArray<T> items, int total)
        {
            if (items.IsDefaultOrEmpty && total == 0)
            {
                return ListResult<T>.Empty;
            }

            return new ListResult<T>(items, total);
        }

        /// <summary>
        /// Creates a new instance of the <see cref="ListResult{T}" /> class or returns a cached version of the immutable object.
        /// </summary>
        /// <typeparam name="T">The type of the items.</typeparam>
        /// <param name="items">The strongly typed list of results to return.</param>
        /// <returns>
        /// The <see cref="ListResult{T}" />.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">items</exception>
        public static ListResult<T> Create<T>(IEnumerable<T> items)
        {
            if (items == null)
            {
                throw new ArgumentNullException(nameof(items));
            }

            return Create(items.ToImmutableArray());
        }

        /// <summary>
        /// Creates a new instance of the <see cref="ListResult{T}" /> class or returns a cached version of the immutable object.
        /// </summary>
        /// <typeparam name="T">The type of the items.</typeparam>
        /// <param name="items">The strongly typed list of results to return.</param>
        /// <param name="total">The total number of results before paging is applied.</param>
        /// <returns>
        /// The <see cref="ListResult{T}" />.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">items</exception>
        public static ListResult<T> Create<T>(IEnumerable<T> items, int total)
        {
            if (items == null)
            {
                throw new ArgumentNullException(nameof(items));
            }

            return Create(items.ToImmutableArray(), total);
        }
    }
}
