namespace AspNetWebApiBlog.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class add_comment : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Comments",
                c => new
                    {
                        Id = c.Long(nullable: false, identity: true),
                        Content = c.String(),
                        CommentDate = c.DateTime(nullable: false),
                        UserId = c.String(maxLength: 128),
                        PostId = c.Long(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Posts", t => t.PostId, cascadeDelete: true)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId)
                .Index(t => t.UserId)
                .Index(t => t.PostId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Comments", "UserId", "dbo.AspNetUsers");
            DropForeignKey("dbo.Comments", "PostId", "dbo.Posts");
            DropIndex("dbo.Comments", new[] { "PostId" });
            DropIndex("dbo.Comments", new[] { "UserId" });
            DropTable("dbo.Comments");
        }
    }
}
