
function flipAndInvertImage(image: number[][]): number[][] {
    for (let row = 0; row < image.length; ++row) {
        let left = 0;
        let right = image[row].length - 1;

        while (left <= right) {
            flipAndInvert(image[row], left, right);
            ++left;
            --right;
        }
    }
    return image;
};


function flipAndInvert(row: number[], left: number, right: number): void {
    let temp = row[left];
    row[left] = row[right] ^ 1;
    row[right] = temp ^ 1;
}
