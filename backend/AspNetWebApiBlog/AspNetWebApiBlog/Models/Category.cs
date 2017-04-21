using System;
using System.Collections.Generic;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace AspNetWebApiBlog.Models
{
    public class Category
    {
        public long Id { get; private set; }
        public string CategoryName { get;  set; }
        public string Image { get; set; }
        public string CatDescription { get; set; }
        public DateTime CreateDate { get; set; }
        public string Status { get; set; }
        public long? ParentCategoryId { get; private set; }
        public virtual Category ParentCategory { get; private set; }
        public virtual ICollection<Category> SubCategories { get; private set; }
    }
    public class CategoryConfiguration : EntityTypeConfiguration<Category>
    {
        public CategoryConfiguration()
        {
            this.HasKey(x => x.Id);

            this.HasMany(x => x.SubCategories)
            .WithOptional(y => y.ParentCategory)
            .Map(m => m.MapKey("ParentCategoryId"));
        }
    }
}