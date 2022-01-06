#nullable disable
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using vertical_ait_sample.Models;

namespace vertical_ait_sample.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WidgetsController : ControllerBase
    {
        private readonly WidgetContext _context;

        public WidgetsController(WidgetContext context)
        {
            _context = context;
        }

        // GET: api/Widgets
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Widget>>> GetWidgets()
        {
            return await _context.Widgets.ToListAsync();
        }

        // POST: api/Widgets
        [HttpPost]
        public async Task<ActionResult<Widget>> PostWidget(Widget widget)
        {
            _context.Widgets.Add(widget);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Widget), new { id = widget.Id }, widget);
        }

    }
}
