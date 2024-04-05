
using System;

public class Solution
{
    public int[][] FlipAndInvertImage(int[][] image)
    {
        for (int row = 0; row < image.Length; ++row)
        {
            int left = 0;
            int right = image[row].Length - 1;

            while (left <= right)
            {
                FlipAndInvert(image[row], left, right);
                ++left;
                --right;
            }
        }
        return image;
    }

    private void FlipAndInvert(int[] row, int left, int right)
    {
        int temp = row[left];
        row[left] = row[right] ^ 1;
        row[right] = temp ^ 1;
    }
}
