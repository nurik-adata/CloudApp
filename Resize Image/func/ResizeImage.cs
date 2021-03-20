using Microsoft.Azure.WebJobs;
using System.IO;
using Microsoft.Extensions.Logging;
using SixLabors.ImageSharp.Processing;
using SixLabors.ImageSharp;

namespace thumbnailFuncAraylym
{
    public static class ResizeImage
    {
        [FunctionName("ResizeImage")]
        public static void Run(
            [BlobTrigger("images/{name}", Connection = "StorageConnection")]Stream image,
            [Blob("thumbnails/s-{name}", FileAccess.Write, Connection = "StorageConnection")]Stream imageResized, ILogger log)
        {
        using (var imageThumb = SixLabors.ImageSharp.Image.Load(image))
        {
            imageThumb.Mutate(i => i.Resize(new ResizeOptions
            {
                Size = new SixLabors.Primitives.Size(300, 300),
                Mode = ResizeMode.Crop
            }));
            imageThumb.SaveAsJpeg(imageResized);
            }
        }
    }
}