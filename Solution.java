
public class Solution {

    public int[][] flipAndInvertImage(int[][] image) {
        for (int row = 0; row < image.length; ++row) {
            int left = 0;
            int right = image[row].length - 1;

            while (left <= right) {
                flipAndInvert(image[row], left, right);
                ++left;
                --right;
            }
        }
        return image;
    }

    private void flipAndInvert(int[] row, int left, int right) {
        int temp = row[left];
        row[left] = row[right] ^ 1;
        row[right] = temp ^ 1;
    }
}
