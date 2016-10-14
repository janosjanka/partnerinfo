// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace Partnerinfo
{
    /// <summary>
    /// Adds extensions methods to the <see cref="Controller" /> class to make it easier to return a <see cref="ListObjectResult{T}" /> with a model.
    /// </summary>
    public static class ListControllerExtensions
    {
        /// <summary>
        /// Creates a <see cref="OperationActionResult" /> object that renders a view to the response.
        /// </summary>
        /// <param name="controller">The controller.</param>
        /// <param name="routeName">Name of the route.</param>
        /// <param name="data">The data.</param>
        /// <param name="offset">The offset.</param>
        /// <param name="limit">The limit.</param>
        /// <returns>
        /// The <see cref="OperationActionResult" /> result that renders a view to the response.
        /// </returns>
        public static ListObjectResult ListResult(this Controller controller, string routeName, IEnumerable<object> data, int offset, int limit)
        {
            return new ListObjectResult(routeName, data, offset, limit);
        }
    }
}