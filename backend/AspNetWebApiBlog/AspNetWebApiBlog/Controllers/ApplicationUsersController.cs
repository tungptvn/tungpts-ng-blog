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
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;

namespace AspNetWebApiBlog.Controllers
{
    public class ApplicationUsersController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET: api/ApplicationUsers
        //[Authorize(Roles = "Admin")]
        public List<UserBindingModel> GetApplicationUsers()
        {
            return db.Users.OrderByDescending(x=>x.Id).ToList().Select(x => new UserBindingModel(x)).ToList();
        }
        [Authorize(Roles = "Admin")]
        [ResponseType(typeof(void))]
        [HttpPatch]

        [Route("api/ApplicationUsers/ActiveOrDeactive/{id}")]
        public IHttpActionResult ActiveOrDeactive(string id)
        {
            var user = db.Users.Find(id);
            if (user == null) return NotFound();
            user.IsActive = !user.IsActive;
            db.SaveChanges();
            return StatusCode(HttpStatusCode.NoContent);

        }
        // GET: api/ApplicationUsers/5
        [Authorize(Roles = "Admin")]
        public IHttpActionResult GetApplicationUser(string id)
        {
            ApplicationUser applicationUser = db.Users.Find(id);
            if (applicationUser == null)
            {
                return NotFound();
            }

            return Ok(applicationUser);
        }
        [Authorize]
        [ResponseType(typeof(void))]
        // PUT: api/ApplicationUsers/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutApplicationUser(string id, ApplicationUser applicationUser)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var user = db.Users.Find( id);
            if (user == null) return BadRequest ();
            var str = User.Identity.GetUserId();
            if ( User.IsInRole("Admin") || user.Id==id)
            {
                // chi ro cac truong co the cap nhat
           
                user.PhoneNumber = applicationUser.PhoneNumber;
                user.Address = applicationUser.Address;
                user.Age = applicationUser.Age;
                user.FName = applicationUser.FName;
                user.LName = applicationUser.LName;
                user.Gender = applicationUser.Address;
            }

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                return NotFound();
            }

            return StatusCode(HttpStatusCode.NoContent);
        }
        [Authorize]
        [HttpGet]
        [Route("api/ApplicationUsers/GetCurrentUserRoles")]
        public List<IdentityRole> GetCurrentUserRoles()
        {
            var user = User.Identity.GetUserId();
            var rt = new List<IdentityRole>();

            if (user != null) rt = db.UserRoles.Where(x => x.UserId == user)
                    .Select(x => db.Roles.FirstOrDefault(r => r.Id == x.RoleId)).ToList();

            return rt;

        }


        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ApplicationUserExists(string id)
        {
            return db.Users.Count(e => e.Id == id) > 0;
        }
    }
}