using Blog_Application.Data;
using Blog_Application.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog_Application.Repository
{
    public class BlogRepository : Repository<Blog>,IBlogRepository
    {
        private readonly MyDbContext _db;
        public BlogRepository(MyDbContext db) : base(db)
        {
            _db = db;
        }
       
    }
}
