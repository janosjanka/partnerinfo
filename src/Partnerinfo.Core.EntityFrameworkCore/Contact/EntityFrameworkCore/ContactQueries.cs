// Copyright (c) János Janka. All rights reserved.
// Licensed under the Apache License, Version 2.0. See License.txt in the project root for license information.

using System;
using System.Linq;
using System.Linq.Expressions;

namespace Partnerinfo.Contact.EntityFrameworkCore
{
    internal static class ContactQueries
    {
        /// <summary>
        /// Filters a sequences of items based on predicates.
        /// </summary>
        internal static IQueryable<ContactItem> Where(this IQueryable<ContactItem> query, int id)
        {
            return query.Where(c => c.Id == id);
        }

        /// <summary>
        /// Filters a sequences of items based on predicates.
        /// </summary>
        internal static IQueryable<ContactItem> Offset(this IQueryable<ContactItem> query, int offset, int limit)
        {
            return query.Skip(offset).Take(limit);
        }

        /// <summary>
        /// Sorts the items of a sequence according to a key.
        /// </summary>
        internal static IQueryable<ContactItem> OrderBy(this IQueryable<ContactItem> query, ContactSortOrder orderBy)
        {
            if (orderBy == ContactSortOrder.Recent)
            {
                return query.OrderByDescending(c => c.ModifiedDate);
            }

            if (orderBy == ContactSortOrder.Email)
            {
                return query.OrderBy(c => c.Email);
            }

            return query.OrderBy(c => c.Id);
        }

        /// <summary>
        /// Projects each item of a sequence into a new form.
        /// </summary>
        public static IQueryable<ContactItem> Select(this IQueryable<ContactItem> query, ContactField fields)
        {
            Expression<Func<ContactItem, ContactItem>> selector = e => new ContactItem
            {
                Id = e.Id
            };

            if (fields.HasFlag(ContactField.Sponsor))
            {

            }

            return query.Select(selector);
        }
    }
}
