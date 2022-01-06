using Microsoft.EntityFrameworkCore;

namespace vertical_ait_sample.Models
{
    public class WidgetContext : DbContext
    {
        public WidgetContext(DbContextOptions<WidgetContext> options)
           : base(options)
        {
        }
        public DbSet<Widget> Widgets { get; set; }
    }
}
