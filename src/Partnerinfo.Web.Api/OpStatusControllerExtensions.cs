// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.AspNetCore.Mvc;

namespace Partnerinfo
{
    /// <summary>
    /// Adds extensions methods to the <see cref="Controller" /> class to make it easier to return a <see cref="Partnerinfo.OpStatusResult" /> with a model.
    /// </summary>
    public static class OpStatusControllerExtensions
    {
        /// <summary>
        /// Creates a <see cref="OpStatusActionResult" /> object that renders a view to the response.
        /// </summary>
        /// <param name="controller">The controller.</param>
        /// <param name="result">The result.</param>
        /// <returns>
        /// The <see cref="OpStatusActionResult" /> result that renders a view to the response.
        /// </returns>
        public static OpStatusActionResult OpStatusResult(this Controller controller, OpStatusResult result)
        {
            return OpStatusResult(controller, result, null);
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
        public static OpStatusActionResult OpStatusResult(this Controller controller, OpStatusResult result, object model)
        {
            if (model != null)
            {
                controller.ViewData.Model = model;
            }

            return new OpStatusActionResult(result);
        }
   }
}