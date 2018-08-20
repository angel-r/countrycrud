using Dapper.Contrib.Extensions;

namespace CrudApi.Model
{
    [Table ("country")]
    public class Country
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
