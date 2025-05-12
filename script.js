<script>
  function firstNonRepeatedChar(str) {
    if (!str) return null;

    const charCount = {};

    // Count each character
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first character with count 1
    for (let char of str) {
      if (charCount[char] === 1) {
        return char;
      }
    }

    return null;
  }

  // ✅ Sample test cases
  console.log(firstNonRepeatedChar('aabbcdd')); // ➝ 'c'
  console.log(firstNonRepeatedChar('aabbcc'));  // ➝ null
</script>
