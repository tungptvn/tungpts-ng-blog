namespace AspNetWebApiBlog.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class add_Status_hitCouter : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Categories", "Status", c => c.String());
            AddColumn("dbo.Posts", "HitCounter", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Posts", "HitCounter");
            DropColumn("dbo.Categories", "Status");
        }
    }
}
