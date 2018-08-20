using System.Collections.Generic;
using System.Threading.Tasks;
using CrudApi.Model;

namespace CrudApi.Repositories
{
    public interface ICountryRepository
    {
        Task<Country> Add(string name);
        Task<bool> Delete(int id);
        Task<Country> Detail(int id);
        void Dispose();
        Task<bool> Edit(Country c);
        Task<IEnumerable<Country>> List();
    }
}