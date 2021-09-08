using Blog_Application.Data;
using Blog_Application.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog_Application.Repository
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly MyDbContext _db;
        private IRepository<Blog> _blogs;
        private IRepository<Comment> _comments;
        public UnitOfWork(MyDbContext db)
        {
            _db = db;
        }

        public IRepository<Blog> blogs => _blogs ??= new Repository<Blog>(_db);
        public IRepository<Comment> comments => _comments ??= new Repository<Comment>(_db);

        public void Dispose()
        {
            _db.Dispose();
        }

        public void save()
        {
            _db.SaveChanges();
        }
    }
}
