using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using System.Linq;
using System.Web;

namespace AspNetWebApiBlog.Models
{
    public class Post
    {
        public long Id { get; private set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Slug { get; set; }
        public string Status { get; set; }
        public string FeatureImage { get; set; }
        public string Content { get; set; }
        public int HitCounter { get; set; }
        public DateTime PostDate { get; set; }
        public long CategoryId { get; set; }
        [ForeignKey("CategoryId")]
        public virtual Category Category { get; set; }
        public string UserId { get; set; }
        [ForeignKey("UserId")]
        public virtual ApplicationUser Author { get; set; }
        public virtual ICollection<Comment> Comments { get; private set; }
    }

}