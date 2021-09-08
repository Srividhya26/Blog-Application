using Blog_Application.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog_Application.Repository
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<Blog> blogs { get; }
        IRepository<Comment> comments { get; }
        void save();
    }
}
