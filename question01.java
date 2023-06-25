class question01 {

  public static void main(String[] args) {
    int arr[] = {0,1,2,3,1,0,5,3,0};
    moveZeroes(arr);
    for (int i : arr) {
        System.out.print(i+" ");
    }
    System.out.println();
  }

public static void moveZeroes(int[] nums) {
        if (nums == null || nums.length == 0) return;        

        int insertPos = 0;
        for (int num: nums) {
            if (num != 0) nums[insertPos++] = num;
        }        

        while (insertPos < nums.length) {
            nums[insertPos++] = 0;
        }
    }
}
