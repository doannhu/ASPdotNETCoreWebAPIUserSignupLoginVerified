using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace ASPdotNETCoreWebAPIUserSignupLoginVerified.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostsController : ControllerBase
    {
        private readonly DataContext _dataContext;
        public PostsController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpPost("create-post")]
        public async Task<ActionResult<Post>> CreatePostAsync(Post postToCreate)
        {
            _dataContext.Posts.Add(postToCreate);
            await _dataContext.SaveChangesAsync();

           return Ok("Post successfully created!");
        }

        [HttpGet("get-post-by-id/{issueId}")]
        public async Task<ActionResult<Post>> GetPostAsync(int issueId)
        {
            var post = await _dataContext.Posts.FindAsync(issueId);

            if (post == null)
            {
                return NotFound();
            }

            return post;
        }
        [HttpGet("get-all-posts")]
        public async Task<ActionResult<List<Post>>> GetAllPostsAsync()
        {
            return Ok(await _dataContext.Posts.ToListAsync());
        }

        [HttpPut("update-post")]
        public async Task<IActionResult> UpdatePostAsync(int issueId, Post post)
        {
            //if (issueId != post.IssueId)
            //{
            //   return BadRequest();
            //}

            _dataContext.Entry(post).State = EntityState.Modified;

            try
            {
                await _dataContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!postExists(post.IssueId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return Ok("Successful update");
        }
        private bool postExists(int issueId)
        {
            return _dataContext.Posts.Any(e => e.IssueId == issueId);
        }

        [HttpDelete("delete-post/{issueId}")]
        public async Task<IActionResult> DeleteTodoItem(int issueId)
        {
            var post = await _dataContext.Posts.FindAsync(issueId);
            if (post == null)
            {
                return NotFound();
            }

            _dataContext.Posts.Remove(post);
            await _dataContext.SaveChangesAsync();

            return Ok("Post has been deleted!");
        }
    }
}
