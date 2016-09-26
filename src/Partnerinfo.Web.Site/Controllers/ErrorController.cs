// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using Microsoft.AspNetCore.Mvc;

namespace Partnerinfo.Controllers
{
    /// <summary>
    /// Provides methods that respond to HTTP requests that are made to an ASP.NET MVC Web site.
    /// </summary>
    public sealed class ErrorController : Controller
    {
        /// <summary>
        /// Creates a ViewResult object that renders a view to the response.
        /// </summary>
        public IActionResult Index() => View();
    }
}