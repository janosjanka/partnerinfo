// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.DependencyInjection;

namespace Partnerinfo
{
    /// <summary>
    /// An <see cref="OkListResult" /> that when executed performs content negotiation, formats the entity body, and
    /// will produce a <see cref="StatusCodes.Status200OK" /> response if negotiation and formatting succeed.
    /// </summary>
    /// <remarks>
    /// We do not use generic types for API results to decrease code size but we need LINQ to ensure the corresponding number of items.
    /// To do this, the simplest solution is to use the <see cref="IEnumerable{T}" /> covariant interface.
    /// </remarks>
    /// <seealso cref="Microsoft.AspNetCore.Mvc.OkObjectResult" />
    public sealed class OkListResult : OkObjectResult
    {
        private readonly string _routeName;
        private readonly IEnumerable<object> _data;
        private readonly int _count;
        private readonly int _offset;
        private readonly int _limit;

        /// <summary>
        /// Initializes a new instance of the <see cref="OkListResultValue" /> class with the values provided.
        /// </summary>
        /// <param name="routeName">Name of the route.</param>
        /// <param name="data">The content value to negotiate and format in the entity body.</param>
        /// <param name="offset">The number of rows to skip, before starting to return rows from the query expression.</param>
        /// <param name="limit">The number of rows to return, after processing the offset clause.</param>
        public OkListResult(string routeName, IEnumerable<object> data, int offset, int limit)
            : base(null)
        {
            Debug.Assert(routeName != null);
            Debug.Assert(data != null);

            _routeName = routeName;
            _data = data;
            _count = data.Count(); // https://github.com/dotnet/corefx/blob/master/src/System.Linq/src/System/Linq/Count.cs (Optimized)
            _offset = offset;
            _limit = limit;
        }

        /// <summary>
        /// Executes the result operation of the action method synchronously. This method is called by MVC to process
        /// the result of an action method.
        /// </summary>
        /// <param name="context">The context in which the result is executed. The context information includes
        /// information about the action that was executed and request information.</param>
        public override void ExecuteResult(ActionContext context)
        {
            var urlHelper = context.HttpContext.RequestServices.GetRequiredService<IUrlHelper>();

            Debug.Assert(urlHelper != null);

            // When you query a collection of items from a DB store, use 'limit + 1' to be able
            // to calculate the next page of lists without having to calculate the total number of results.
            // Of course, this method just works with offset/limit paging strategy which is also supported by
            // Microsoft SQL Server 2012. See: https://technet.microsoft.com/en-us/library/gg699618(v=sql.110).aspx

            var result = new OkListResultValue { Data = _count > _limit ? _data.Take(_limit) : _data };

            if (_offset > 0)
            {
                int prevOffset = _offset - _limit;
                context.RouteData.Values["offset"] = prevOffset <= 0 ? 0 : prevOffset;
                result.PrevLink = urlHelper.Link(_routeName, context.RouteData.Values);
            }

            if (_count > _limit)
            {
                context.RouteData.Values["offset"] = _offset + _limit;
                result.NextLink = urlHelper.Link(_routeName, context.RouteData.Values);
            }

            Value = result;

            base.ExecuteResult(context);
        }
    }
}