// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace Partnerinfo
{
    /// <summary>
    /// An <see cref="HypermediaListResult{T}" /> that when executed performs content negotiation, formats the entity body, and
    /// will produce a <see cref="StatusCodes.Status200OK" /> response if negotiation and formatting succeed.
    /// </summary>
    /// <typeparam name="T">The type of items.</typeparam>
    public class HypermediaListResult<T> : ObjectResult
    {
        private readonly OperationListResultDto<T> _content;
        private readonly int _offset;
        private readonly int _limit;
        private readonly string _routeName;

        /// <summary>
        /// Initializes a new instance of the <see cref="OperationListResultDto{T}" /> class with the values provided.
        /// </summary>
        /// <param name="routeName">Name of the route.</param>
        /// <param name="data">The content value to negotiate and format in the entity body.</param>
        /// <param name="offset">The offset.</param>
        /// <param name="limit">The limit.</param>
        /// <exception cref="System.ArgumentNullException">data</exception>
        public HypermediaListResult(string routeName, ICollection<T> data, int offset, int limit)
            : base(null)
        {
            Debug.Assert(routeName != null);

            if (data == null)
            {
                throw new ArgumentNullException(nameof(data));
            }

            _routeName = routeName;
            //_content = new OperationListResultDto<T>(data.Count > limit ? data.Take(limit).ToList() : data);
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
            
            if (_offset > 0)
            {
                int prevOffset = _offset - _limit;
                context.RouteData.Values["offset"] = prevOffset <= 0 ? 0 : prevOffset;
                _content.PrevLink = urlHelper.Link(_routeName, context.RouteData.Values);
            }

            if (_content.Data.Length > _limit)
            {
                context.RouteData.Values["offset"] = _offset + _limit;
                _content.NextLink = urlHelper.Link(_routeName, context.RouteData.Values);
            }

            return base.ExecuteResultAsync(context);
        }
    }
}