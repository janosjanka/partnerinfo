﻿// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Partnerinfo.Identity
{
    /// <summary>
    /// Adds extensions methods to the <see cref="Controller" /> class to make it easier to return a <see cref="OpStatusResult" /> with a model.
    /// </summary>
    public static class IdentityControllerExtensions
    {
        /// <summary>
        /// Creates a <see cref="OpStatusActionResult" /> object that renders a view to the response.
        /// </summary>
        /// <param name="controller">The controller.</param>
        /// <param name="result">The result.</param>
        /// <returns>
        /// The <see cref="OpStatusActionResult" /> result that renders a view to the response.
        /// </returns>
        public static IdentityActionResult IdentityResult(this Controller controller, IdentityResult result)
        {
            return IdentityResult(controller, result, null);
        }

        /// <summary>
        /// Creates a <see cref="OpStatusActionResult" /> object that renders a view to the response.
        /// </summary>
        /// <param name="controller">The controller.</param>
        /// <param name="result">The result.</param>
        /// <param name="model">The model.</param>
        /// <returns>
        /// The <see cref="OpStatusActionResult" /> result that renders a view to the response.
        /// </returns>
        public static IdentityActionResult IdentityResult(this Controller controller, IdentityResult result, object model)
        {
            if (model != null)
            {
                controller.ViewData.Model = model;
            }

            return new IdentityActionResult(result);
        }
   }
}