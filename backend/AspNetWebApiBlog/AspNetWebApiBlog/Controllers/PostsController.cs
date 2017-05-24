using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http.Description;
using AspNetWebApiBlog.Models;
using System.Web.Http.Cors;
using System.Security.Claims;
using System.Web;
using Microsoft.AspNet.Identity;
using System.Web.Http;

namespace AspNetWebApiBlog.Controllers
{
    [EnableCors(origins: "http://localhost:3000", headers: "*", methods: "*")]
    public class PostsController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();
        public PostsController()
        {
            db.Configuration.LazyLoadingEnabled = false;
        }

        // GET: api/Posts
        public IQueryable<Post> GetPosts()
        {
            return db.Posts.Include("Category").Include("Author").OrderByDescending(x=>x.Id);
        }

        // GET: api/Posts/5
        [ResponseType(typeof(Post))]
        public IHttpActionResult GetPost(long id)
        {
            Post post = db.Posts.Include("Category").Include("Author").Where(x=>x.Id== id).FirstOrDefault();
            if (post == null)
            {
                return NotFound();
            }

            return Ok(post);
        }
        // GET: api/GetPostByCategory/5
        [Route("api/GetPostByCategory/{id}")]
        [HttpGet]
        [ResponseType(typeof(Post))]
        public IQueryable<Post> GetPostByCategory(long id)
        {
            return db.Posts.Where(x => x.CategoryId == id).OrderByDescending(x => x.Id);
        }

        // PUT: api/Posts/5
       [Authorize]
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPost(long id, Post post)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != post.Id)
            {
                return BadRequest();
            }

            db.Entry(post).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PostExists(id))
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

        // POST: api/Posts
     
        [ResponseType(typeof(Post))]
        [Authorize]
        public IHttpActionResult PostPost(Post post)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            post.UserId = HttpContext.Current.User.Identity.GetUserId();
            db.Posts.Add(post);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = post.Id }, post);
        }

        // DELETE: api/Posts/5
      
        [ResponseType(typeof(Post))]
        [Authorize]
        public IHttpActionResult DeletePost(long id)
        {
            Post post = db.Posts.Find(id);
            if (post == null)
            {
                return NotFound();
            }

            db.Posts.Remove(post);
            db.SaveChanges();

            return Ok(post);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PostExists(long id)
        {
            return db.Posts.Count(e => e.Id == id) > 0;
        }
    }
}