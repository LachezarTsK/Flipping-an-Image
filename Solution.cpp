
#include <span>
#include <vector>
using namespace std;

class Solution {

public:
    vector<vector<int>> flipAndInvertImage(vector<vector<int>>& image) const {
        for (size_t row = 0; row < image.size(); ++row) {
            int left = 0;
            int right = image[row].size() - 1;

            while (left <= right) {
                flipAndInvert(image[row], left, right);
                ++left;
                --right;
            }
        }
        return image;
    }

private:
    void flipAndInvert(span<int> row, int left, int right) const {
        int temp = row[left];
        row[left] = row[right] ^ 1;
        row[right] = temp ^ 1;
    }
};
