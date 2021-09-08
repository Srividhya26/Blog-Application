using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog_Application.Repository
{
    public interface IRepository<T> where T:class
    {
        T Get(int id);
        IEnumerable<T> GetAll();
        void Add(T entity);
        void Remove(T entity);
        void Update(T entity);
        void Update(int id);
    }
}
