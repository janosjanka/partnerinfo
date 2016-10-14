// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Partnerinfo.Identity
{
    /// <summary>
    /// Adds extensions methods to the <see cref="Controller" /> class to make it easier to return a <see cref="OperationResult" /> with a model.
    /// </summary>
    public static class IdentityErrorControllerExtensions
    {
        /// <summary>
        /// Creates a <see cref="OperationErrorResult" /> object that renders a view to the response.
        /// </summary>
        /// <param name="controller">The controller.</param>
        /// <param name="result">The result.</param>
        /// <returns>
        /// The <see cref="OperationErrorResult" /> result that renders a view to the response.
        /// </returns>
        public static IdentityErrorResult IdentityError(this Controller controller, IdentityResult result)
        {
            return new IdentityErrorResult(result);
        }
    }
}