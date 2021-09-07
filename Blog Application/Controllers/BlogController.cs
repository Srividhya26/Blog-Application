using Blog_Application.Data;
using Blog_Application.Model;
using Blog_Application.Repository;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog_Application.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BlogController : Controller
    {
        private readonly IUnitOfWork _work;

        public BlogController(IUnitOfWork work)
        {
            _work = work;
        }

        //getting blog
        [HttpGet]
       public IEnumerable<Blog> GetBlogs()
        {
            var result = _work.blogs.GetAll();
            return result;
        }

        // getting single blog
        [HttpGet("{id}")]
        public Blog GetBlogList(int id)
        {
            return _work.blogs.Get(id);
        }


        //create a blog

        [HttpPost]
        public Blog Create(Blog blog)
        {
            _work.blogs.Add(blog);
            _work.save();
            return (blog);
        }

        ////edit a blog
        [HttpPut]
        public void Edit(Blog blog)
        {
            Blog newblog = new()
            {
                BlogTitle = blog.BlogTitle,
                Content = blog.Content
            };

            _work.blogs.Update(newblog);
        }

        ////delete a blog
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var value = _work.blogs.Get(id);
            _work.blogs.Remove(value);
            _work.save();
        }
    }
}
