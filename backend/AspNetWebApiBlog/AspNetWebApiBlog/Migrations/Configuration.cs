namespace AspNetWebApiBlog.Migrations
{
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;
    using Models;
    using System;
    using System.Collections.Generic;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<AspNetWebApiBlog.Models.ApplicationDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(AspNetWebApiBlog.Models.ApplicationDbContext context)
        {
            InitializeIdentityForEF(context);
            InitializeCategoies(context);
        }

        private void InitializeCategoies(ApplicationDbContext context)
        {
            if (!context.Categories.Any())
            {
                var InitialCategories = new List<Category>()
                {
                    new Category() {CategoryName="Design", CreateDate = DateTime.Now ,Description=" patterns are one of the most effective" },
                    new Category() {CategoryName="Agile", CreateDate =  DateTime.Now, Description = "Agile methods" },
                    new Category() {CategoryName="Refactoring", CreateDate = DateTime.Now, Description= "Code Refactoring" }

                };

                context.Categories.AddRange(InitialCategories);
                context.SaveChanges();
            }
        }

        public static void InitializeIdentityForEF(ApplicationDbContext db)
        {

            if (!db.Users.Any())
            {
                var roleStore = new RoleStore<IdentityRole>(db);
                var roleManager = new RoleManager<IdentityRole>(roleStore);
                var userStore = new UserStore<ApplicationUser>(db);
                var userManager = new UserManager<ApplicationUser>(userStore);

                // Add missing roles
                var role = roleManager.FindByName("Admin");
                if (role == null)
                {
                    role = new IdentityRole("Admin");
                    roleManager.Create(role);
                }

                // Create test users
                var user = userManager.FindByName("admin");
                if (user == null)
                {
                    var newUser = new ApplicationUser()
                    {
                        UserName = "admin",
                        Email = "tungpt.hd@gmail.com",
                        PhoneNumber = "0987654321",
                    };
                    userManager.Create(newUser, "!@#$%^");
                    userManager.SetLockoutEnabled(newUser.Id, false);
                    userManager.AddToRole(newUser.Id, "Admin");
                }
            }
        }
    }
}
