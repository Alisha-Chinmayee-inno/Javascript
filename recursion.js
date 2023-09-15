function sumFromOneToN(n) {
    // Base case: If n is 1, the sum is 1.
    if (n === 1) {
      return 1;
    } else {
      // Recursive case: Sum from 1 to n = n + sum from 1 to (n-1)
      return n + sumFromOneToN(n - 1);
    }
  }
  
  // Example usage:
  const result = sumFromOneToN(5); // Calculates the sum from 1 to 5
  console.log(result); // Output: 15
  