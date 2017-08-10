using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using AspNetWebApiBlog.Models;
using System.Web.Http.Cors;

namespace AspNetWebApiBlog.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class CategoriesController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        // GET: api/Categories
        public IQueryable<object> GetCategories()
        {
            return db.Categories.Select((x) => new { x.Id, x.CategoryName, x.CatDescription, x.Image, x.ParentCategory, x.ParentCategoryId, x.Status, x.SubCategories, NumberOfPosts = x.Posts.Count(p => "ENABLE" == p.Status) });
        }

        // GET: api/Categories/5
        [ResponseType(typeof(Category))]
        public IHttpActionResult GetCategory(long id)
        {
            Category category = db.Categories.Find(id);
            if (category == null)
            {
                return NotFound();
            }

            return Ok(category);
        }

        // PUT: api/Categories/5
        [Authorize]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutCategory(long id, Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != category.Id)
            {
                return BadRequest();
            }

            db.Entry(category).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CategoryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Categories
        [Authorize]
        [ResponseType(typeof(Category))]
        public IHttpActionResult PostCategory(Category category)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            db.Categories.Add(category);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = category.Id }, category);
        }

        // DELETE: api/Categories/5
        [Authorize]
        [ResponseType(typeof(Category))]
        public IHttpActionResult DeleteCategory(long id)
        {
            Category category = db.Categories.Find(id);
            if (category == null)
            {
                return NotFound();
            }

            db.Categories.Remove(category);
            db.SaveChanges();

            return Ok(category);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool CategoryExists(long id)
        {
            return db.Categories.Count(e => e.Id == id) > 0;
        }
    }
}