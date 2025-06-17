import Jimp from 'jimp';

const inputPath = './input.jpg';
const outputPath = './output.jpg';

Jimp.read(inputPath)
    .then(image => {
        return image
        .greyscale()
        .writeAsync(outputPath)
        .then(() => {
                console.log(`Converted image to black & white as ${outputPath}`);
            });
})
.catch(err => {
        console.error('Error processing the image:', err);
    });
