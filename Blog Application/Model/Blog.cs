using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Blog_Application.Model
{
    public class Blog
    {
        public int Id { get; set; }
        [Required]
        public string BlogTitle { get; set; }
        [Required]
        public string Content { get; set; }
    }
}
