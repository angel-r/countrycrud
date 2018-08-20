using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;
using CrudApi.Code;
using CrudApi.Model;
using Dapper;
using Dapper.Contrib.Extensions;
using Microsoft.Extensions.Options;
using MySql.Data.MySqlClient;

namespace CrudApi.Repositories
{
    public class CountryRepository : ICountryRepository
    {
        private readonly IDbConnection _db;

        public CountryRepository(IOptions<ConnectionStringList> connectionStrings)
        {
            _db = new MySqlConnection(connectionStrings.Value.ConnectionStringMySql);
        }

        public void Dispose()
        {
            _db.Close();
        }

        public async Task<Country> Add(string name)
        {
            _db.Open();
            int id = await  _db.InsertAsync(new Country {Name = name});
            return new Country{Id = id,Name = name};
        }

        
        public async Task<bool> Delete(int id)
        {
            await  _db.DeleteAsync(new Country {Id = id});

            return true;
        }

        public async Task<Country> Detail(int id)
        {
            return await  _db.GetAsync<Country>(id);
        }

             
        public async Task<bool> Edit(Country c)
        {
            await  _db.UpdateAsync(c);

            return true;
        }


        public async Task<IEnumerable<Country>> List()
        {
            return await  _db.QueryAsync<Country>("SELECT * FROM country order by id desc");
        }
        


    }
}
