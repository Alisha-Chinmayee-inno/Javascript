function fibonacci(n) {
    if (n <= 1) {
      return [0];
    } else {
      const sequence = [0, 1];
      for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
      }
      return sequence;
    }
  }
  