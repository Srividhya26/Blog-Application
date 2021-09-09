using Blog_Application.Model;
using Blog_Application.Repository;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog_Application.Controllers
{

    [ApiController]
    [Route("[Controller]")]

    public class CommentController : Controller
    {
        private readonly IUnitOfWork _work;
        public CommentController(IUnitOfWork work)
        {
            _work = work;
        }

        //Get comments
        [HttpGet]
        public ObjectResult GetComment()
        {
            List<Comment> comments = _work.comments.GetAll().ToList();

            return Ok(comments);
        }

        //Get comment by ID
        [HttpGet("{id}")]
        public ObjectResult GetCommentById(int id)
        {
            Comment comments = _work.comments.Get(id);
            if (comments == null)
            {
                throw new Exception("Not Found");
            }
            return Ok(comments);
        }

        //Add Comment
        [HttpPost]
        public OkResult PostNewComment(Comment comment)
        {
            if (!ModelState.IsValid)
            {
                throw new Exception("Invalid data.");
            }

            _work.comments.Add(comment);
            _work.save();

            return Ok();
        }

        //Delete Method
        [HttpDelete]
        public OkResult DeleteComment(int id)
        {
            var comment = _work.comments.Get(id);

            if (comment == null)
            {
                throw new Exception("Not Found");
            }

            _work.comments.Remove(comment);
            _work.save();

            return Ok();
        }

        //}
    }
