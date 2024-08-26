import { Component } from '@angular/core';

interface Item {
  id: number;
  name: string;
  date: Date;
  status: string;
}

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss'],
})
export class DataTableComponent {
  data: Item[] = [
    { id: 1, name: 'Item A', date: new Date('2024-01-01'), status: 'Active' },
    { id: 2, name: 'Item B', date: new Date('2024-02-01'), status: 'Inactive' },
    // Add more items if needed
  ];

  sortedData: Item[] = [...this.data];
  sortedColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  sort(column: keyof Item) {
    console.log('sortedData', this.sortedData);
    console.log('column', column);
    console.log('this.sortedColumn ', this.sortedColumn);

    if (this.sortedColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortedColumn = column;
      this.sortDirection = 'asc';
    }

    // Apply the sorting
    this.sortedData = this.quickSort(
      [...this.sortedData],
      column,
      this.sortDirection
    );
    // console.log('sortedData', this.sortedData);
  }

  quickSort(
    array: Item[],
    column: keyof Item,
    direction: 'asc' | 'desc'
  ): Item[] {
    console.log('array', array);
    console.log('column', column);
    console.log('direction', direction);

    const compare = (a: Item, b: Item) => {
      if (a[column] < b[column]) return direction === 'asc' ? -1 : 1;
      if (a[column] > b[column]) return direction === 'asc' ? 1 : -1;
      return 0;
    };

    return array.sort(compare);
  }
}

function findLargestNumber(nums: any) {
  let largestNumber = 0;

  for (let index = 0; index < nums.length; index++) {
    if (largestNumber < nums[index]) {
      largestNumber = nums[index];
    }
  }
  return largestNumber;
}
// console.log(findLargestNumber([1, 5, 3, 9, 2])); // Output: 9
// console.log(findLargestNumber([-1, -5, -3, -9, -2])); // Output: -1
// console.log(findLargestNumber([])); // Output: null
function isPalindrome(str: string): boolean {
  // Normalize the string: remove non-alphanumeric characters and convert to lowercase
  const normalizedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  // Reverse the normalized string
  const reversedStr = normalizedStr.split('').reverse().join('');

  // Compare the normalized string with its reversed version
  return normalizedStr === reversedStr;
}

// // Test cases
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome("Hello, World!")); // Output: false
// console.log(isPalindrome("Was it a car or a cat I saw?")); // Output: true
// console.log(isPalindrome("")); // Output: true

function countVowels(str: any) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];

  let count = 0;

  for (let index = 0; index < str.length; index++) {
    // for (let j = 0; j < vowels.length; j++) {
    if (vowels.includes(str[index].toLowerCase())) {
      count++;
    }

    // }
  }

  return count;
}

// console.log(countVowels("Hello World!")); // Output: 3
// console.log(countVowels("Angular")); // Output: 3
// console.log(countVowels("JavaScript is Awesome")); // Output: 8
// console.log(countVowels("XYZ")); // Output: 0

function firstNonRepeatingCharacter(str: string): string | null {
  const charFrequency: { [key: string]: number } = {};

  // console.log('checkNumber', charFrequency);

  // First pass: Count the frequency of each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }

  // Second pass: Find the first character with a frequency of 1
  for (let i = 0; i < str.length; i++) {
    if (charFrequency[str[i]] > 1) {
      return str[i];
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

// Test cases
// console.log(firstNonRepeatingCharacter("swiss")); // Output: "w"
// console.log(firstNonRepeatingCharacter("hello")); // Output: "h"
// console.log(firstNonRepeatingCharacter("aabbcc")); // Output: null
// console.log(firstNonRepeatingCharacter("")); // Output: null

function findLongestWord(sentence: string): string {
  // Your code here

  let checkSentences= sentence.split(' ');
  let longestWord='';
  for (let index = 0; index < checkSentences.length; index++) {
    // checkSentences = sentence.split(' ');

    if(checkSentences[index].length > longestWord.length){
      longestWord = checkSentences[index];
    }

  }
  return longestWord;
}

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog.'));
// Output: "jumped"

// console.log(findLongestWord("I love programming."));
// // Output: "programming"

// console.log(findLongestWord("Angular is awesome!"));
// Output: "Angular"

function areAnagrams(str1: string, str2: string): boolean {
  // Step 1: Normalize the strings by converting to lowercase and removing non-alphabetic characters
  const normalize = (str: string) => 
    str.toLowerCase().replace(/[^a-z]/g, '');

  const normalizedStr1 = normalize(str1);
  const normalizedStr2 = normalize(str2);

  // Step 2: Sort the characters in the strings
  const sortedStr1 = normalizedStr1.split('').sort().join('');
  const sortedStr2 = normalizedStr2.split('').sort().join('');

  // Step 3: Compare the sorted strings
  return sortedStr1 === sortedStr2;
}


// console.log(areAnagrams("listen", "silent")); 
// // Output: true

// console.log(areAnagrams("hello", "olelh")); 
// // Output: true

// console.log(areAnagrams("test", "taste")); 
// Output: false