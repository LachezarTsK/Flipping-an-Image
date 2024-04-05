
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
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

/**
 * @param {number[]} row
 * @param {number} left
 * @param {number} right
 * @return {void}
 */
function flipAndInvert(row, left, right) {
    let temp = row[left];
    row[left] = row[right] ^ 1;
    row[right] = temp ^ 1;
}
