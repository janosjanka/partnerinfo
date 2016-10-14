// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.AspNetCore.Mvc;

namespace Partnerinfo
{
    /// <summary>
    /// Adds extensions methods to the <see cref="Controller" /> class to make it easier to return a <see cref="Partnerinfo.OperationResult" /> with a model.
    /// </summary>
    public static class OperationErrorControllerExtensions
    {
        /// <summary>
        /// Creates a <see cref="OperationErrorResult" /> object that renders a view to the response.
        /// </summary>
        /// <param name="controller">The controller to extend.</param>
        /// <param name="result">The result.</param>
        /// <returns>
        /// The <see cref="OperationErrorResult" /> result that renders a view to the response.
        /// </returns>
        public static OperationErrorResult OperationError(this Controller controller, OperationResult result)
        {
            return new OperationErrorResult(result);
        }
    }
}