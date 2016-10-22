// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

namespace Partnerinfo
{
    /// <summary>
    /// Adds extensions methods to the <see cref="Controller" /> class to make it easier to return a <see cref="OkListResult" /> with a model.
    /// </summary>
    public static class OkListResultControllerExtensions
    {
        /// <summary>
        /// Creates a <see cref="OperationErrorResult" /> object that renders a view to the response.
        /// </summary>
        /// <param name="controller">The controller to extend.</param>
        /// <param name="urlHelper">The URL helper that helps generate links.</param>
        /// <param name="data">The content value to negotiate and format in the entity body.</param>
        /// <param name="offset">The number of rows to skip, before starting to return rows from the query expression.</param>
        /// <param name="limit">The number of rows to return, after processing the offset clause.</param>
        /// <returns>
        /// The <see cref="OperationErrorResult" /> result that renders a view to the response.
        /// </returns>
        public static OkListResult OkList(this Controller controller, IUrlHelper urlHelper, IEnumerable<object> data, int offset, int limit)
        {
            return new OkListResult(urlHelper, data, offset, limit);
        }
    }
}