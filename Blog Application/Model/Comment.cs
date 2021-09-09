using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Blog_Application.Model
{
    public class Comment
    {
        [Key]
        public int CommentId { get; set; }
        public string CommentSection { get; set; }
    }
}
