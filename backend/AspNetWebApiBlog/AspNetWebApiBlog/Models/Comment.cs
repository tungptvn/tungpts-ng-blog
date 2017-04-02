using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace AspNetWebApiBlog.Models
{
    public class Comment
    {
        public long Id { get; set; }
        public string  Content { get; set; }
        public DateTime CommentDate { get; set; }
        public string UserId { get; set; }

        [ForeignKey("UserId")]
        public virtual ApplicationUser User { get; set; }
        public long PostId { get; set; }
        [ForeignKey("PostId")]
        public virtual Post Post { get; set; }
    }
}