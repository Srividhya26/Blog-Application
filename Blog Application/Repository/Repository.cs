using Blog_Application.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog_Application.Repository
{
    public class Repository<T> : IRepository<T> where T:class
    {
        private readonly MyDbContext _db;

        public Repository(MyDbContext db)
        {
            _db = db;
        }

        public T Get(int id)
        {
            return _db.Set<T>().Find(id);
        }

        public IEnumerable<T> GetAll()
        {
            return _db.Set<T>().ToList();
        }

        public void Add(T entity)
        {
            _db.Set<T>().Add(entity);
        }

        public void Remove(T entity)
        {
            _db.Set<T>().Remove(entity);
        }

        public void Update(T entity)
        {
            _db.Update(entity);
        }

        public void Update(int id)
        {
            var entity = _db.Find<T>(id);
            _db.Update(entity);
        }
    }
}
