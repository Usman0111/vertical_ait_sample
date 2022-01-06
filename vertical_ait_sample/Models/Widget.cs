namespace vertical_ait_sample.Models
{
    public class Widget
    {
        public long Id { get; set; }
        public string? Name { get; set; }

        public string? Type { get; set; }

        public string? SubType { get; set; }

        public DateTime Created { get; set; } = DateTime.Now;

    }
}
