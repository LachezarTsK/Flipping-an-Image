
class Solution {
    fun flipAndInvertImage(image: Array<IntArray>): Array<IntArray> {
        for (row in image.indices) {
            var left = 0;
            var right = image[row].size - 1;

            while (left <= right) {
                flipAndInvert(image[row], left, right);
                ++left;
                --right;
            }
        }
        return image;
    }

    private fun flipAndInvert(row: IntArray, left: Int, right: Int) {
        val temp = row[left];
        row[left] = row[right] xor 1;
        row[right] = temp xor 1;
    }
}
