namespace AspNetWebApiBlog.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class fix_unique_discription : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Categories", "CatDescription", c => c.String());
            AddColumn("dbo.Posts", "PostDescription", c => c.String());
            DropColumn("dbo.Categories", "Description");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Categories", "Description", c => c.String());
            DropColumn("dbo.Posts", "PostDescription");
            DropColumn("dbo.Categories", "CatDescription");
        }
    }
}
