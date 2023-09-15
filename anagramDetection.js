function areAnagrams(str1, str2) {
    const cleanStr1 = str1.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    const cleanStr2 = str2.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
  }
  