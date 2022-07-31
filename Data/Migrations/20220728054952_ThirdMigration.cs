using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ASPdotNETCoreWebAPIUserSignupLoginVerified.Data.Migrations
{
    public partial class ThirdMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Posts",
                columns: table => new
                {
                    IssueId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Project = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    IssueType = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    ReportDate = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Summary = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Description = table.Column<string>(type: "TEXT", maxLength: 100000, nullable: false),
                    ReportedBy = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    AssignedTo = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Status = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Posts", x => x.IssueId);
                });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "IssueId", "AssignedTo", "Description", "IssueType", "Project", "ReportDate", "ReportedBy", "Status", "Summary" },
                values: new object[] { 1, "User 1", "When searching for a customer 1 site using our new API, not seeing the name. Example JSON follows...", "minor", "Web app bug tracking", "11-2-2022", "Admin", "ongoing", "Bad JSON data coming back from API on port8081" });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "IssueId", "AssignedTo", "Description", "IssueType", "Project", "ReportDate", "ReportedBy", "Status", "Summary" },
                values: new object[] { 2, "User 2", "When searching for a customer 2 site using our new API, not seeing the name. Example JSON follows...", "minor", "Web app bug tracking", "12-3-2022", "Admin", "ongoing", "Bad JSON data coming back from API on port8082" });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "IssueId", "AssignedTo", "Description", "IssueType", "Project", "ReportDate", "ReportedBy", "Status", "Summary" },
                values: new object[] { 3, "User 3", "When searching for a customer 3 site using our new API, not seeing the name. Example JSON follows...", "minor", "Web app bug tracking", "13-4-2022", "Admin", "ongoing", "Bad JSON data coming back from API on port8083" });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "IssueId", "AssignedTo", "Description", "IssueType", "Project", "ReportDate", "ReportedBy", "Status", "Summary" },
                values: new object[] { 4, "User 4", "When searching for a customer 4 site using our new API, not seeing the name. Example JSON follows...", "minor", "Web app bug tracking", "14-5-2022", "Admin", "ongoing", "Bad JSON data coming back from API on port8084" });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "IssueId", "AssignedTo", "Description", "IssueType", "Project", "ReportDate", "ReportedBy", "Status", "Summary" },
                values: new object[] { 5, "User 5", "When searching for a customer 5 site using our new API, not seeing the name. Example JSON follows...", "minor", "Web app bug tracking", "15-6-2022", "Admin", "ongoing", "Bad JSON data coming back from API on port8085" });

            migrationBuilder.InsertData(
                table: "Posts",
                columns: new[] { "IssueId", "AssignedTo", "Description", "IssueType", "Project", "ReportDate", "ReportedBy", "Status", "Summary" },
                values: new object[] { 6, "User 6", "When searching for a customer 6 site using our new API, not seeing the name. Example JSON follows...", "minor", "Web app bug tracking", "16-7-2022", "Admin", "ongoing", "Bad JSON data coming back from API on port8086" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Posts");
        }
    }
}
