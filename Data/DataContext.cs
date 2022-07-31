using ASPdotNETCoreWebAPIUserSignupLoginVerified.Models;
using Microsoft.EntityFrameworkCore;

namespace ASPdotNETCoreWebAPIUserSignupLoginVerified.Data
{
    public class DataContext: DbContext
    {
        public DbSet<User> Users => Set<User>();
        public DbSet<Post> Posts => Set<Post>();

        protected override void OnConfiguring(DbContextOptionsBuilder dbContextOptionsBuilder) => dbContextOptionsBuilder.UseSqlite("Data Source=./Data/AppDB.db");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {   
            User[] usersToSeed = new User[3];
            usersToSeed[0] = new User { Id = 1, Email = "admin@mail.com"};
            usersToSeed[1] = new User { Id = 2, Email = "general@mail.com" };
            usersToSeed[2] = new User { Id = 3, Email = "captain@mail.com" };

            Post[] postsToSeed = new Post[6];
            for (int i = 1; i <= 6; i++)
            {
                postsToSeed[i - 1] = new Post
                {
                    IssueId = i,
                    Project = $"Web app bug tracking",
                    IssueType = $"minor",
                    ReportDate = $"1{i}-{i + 1}-2022",
                    Summary = $"Bad JSON data coming back from API on port808{i}",
                    Description = $"When searching for a customer {i} site using our new API, not seeing the name. Example JSON follows...",
                    ReportedBy = $"Admin",
                    AssignedTo = $"User {i}",
                    Status = $"ongoing",
                };
            }

            modelBuilder.Entity<Post>().HasData(postsToSeed);

            modelBuilder.Entity<User>().HasData(usersToSeed);
        }
    }
}
