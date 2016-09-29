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
    /// An <see cref="PagedListObjectResult{T}" /> that when executed performs content negotiation, formats the entity body, and
    /// will produce a <see cref="StatusCodes.Status200OK" /> response if negotiation and formatting succeed.
    /// </summary>
    /// <typeparam name="T">The type of items.</typeparam>
    public sealed class PagedListObjectResult<T> : ObjectResult
    {
        private readonly string _routeName;
        private readonly ICollection<T> _data;
        private readonly int _offset;
        private readonly int _limit;

        /// <summary>
        /// Initializes a new instance of the <see cref="PagedListResult{T}" /> class with the values provided.
        /// </summary>
        /// <param name="routeName">Name of the route.</param>
        /// <param name="data">The content value to negotiate and format in the entity body.</param>
        /// <param name="offset">The number of rows to skip, before starting to return rows from the query expression.</param>
        /// <param name="limit">The number of rows to return, after processing the offset clause.</param>
        /// <exception cref="System.ArgumentNullException">data</exception>
        public PagedListObjectResult(string routeName, ICollection<T> data, int offset, int limit) : base(null)
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

            var value = new PagedListResult<T> { Data = _data.Count > _limit ? _data.Take(_limit) : _data };

            if (_offset > 0)
            {
                int prevOffset = _offset - _limit;
                context.RouteData.Values["offset"] = prevOffset <= 0 ? 0 : prevOffset;
                value.PrevLink = urlHelper.Link(_routeName, context.RouteData.Values);
            }

            if (_data.Count > _limit)
            {
                context.RouteData.Values["offset"] = _offset + _limit;
                value.NextLink = urlHelper.Link(_routeName, context.RouteData.Values);
            }

            Value = value;

            return base.ExecuteResultAsync(context);
        }
    }
}