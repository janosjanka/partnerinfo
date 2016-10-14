// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace Partnerinfo
{
    /// <summary>
    /// An <see cref="ListObjectResult{T}" /> that when executed performs content negotiation, formats the entity body, and
    /// will produce a <see cref="StatusCodes.Status200OK" /> response if negotiation and formatting succeed.
    /// </summary>
    /// <typeparam name="T">The type of items.</typeparam>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.ObjectResult" />
    public sealed class ListObjectResult<T> : ObjectResult
    {
        private readonly string _routeName;
        private readonly ICollection<T> _data;
        private readonly int _offset;
        private readonly int _limit;

        /// <summary>
        /// Initializes a new instance of the <see cref="ListResult{T}" /> class with the values provided.
        /// </summary>
        /// <param name="routeName">Name of the route.</param>
        /// <param name="data">The content value to negotiate and format in the entity body.</param>
        /// <param name="offset">The number of rows to skip, before starting to return rows from the query expression.</param>
        /// <param name="limit">The number of rows to return, after processing the offset clause.</param>
        public ListObjectResult(string routeName, ICollection<T> data, int offset, int limit)
            : base(null)
        {
            Debug.Assert(routeName != null);
            Debug.Assert(data != null);

            _routeName = routeName;
            _data = data;
            _offset = offset;
            _limit = limit;
        }

        /// <summary>
        /// Creates an <see cref="T:System.Net.Http.HttpResponseMessage" /> asynchronously.
        /// </summary>
        /// <param name="context">The context.</param>
        /// <returns>
        /// A task that, when completed, contains the <see cref="T:System.Net.Http.HttpResponseMessage" />.
        /// </returns>
        public override Task ExecuteResultAsync(ActionContext context)
        {
            var urlHelper = context.HttpContext.RequestServices.GetRequiredService<IUrlHelper>();

            Debug.Assert(urlHelper != null);

            // When you query a collection of items from a DB store, use 'limit + 1' to be able
            // to calculate the next page of lists without having to calculate the total number of results.
            // Of course, this method just works with offset/limit paging strategy which is also supported by
            // Microsoft SQL Server 2012. See: https://technet.microsoft.com/en-us/library/gg699618(v=sql.110).aspx

            var result = new ListResult<T>
            {
                Data = _data.Count > _limit ? _data.Take(_limit) : _data
            };

            if (_offset > 0)
            {
                int prevOffset = _offset - _limit;
                context.RouteData.Values["offset"] = prevOffset <= 0 ? 0 : prevOffset;
                result.Paging.Previous = urlHelper.Link(_routeName, context.RouteData.Values);
            }

            if (_data.Count > _limit)
            {
                context.RouteData.Values["offset"] = _offset + _limit;
                result.Paging.Next = urlHelper.Link(_routeName, context.RouteData.Values);
            }

            Value = result;

            return base.ExecuteResultAsync(context);
        }
    }
}