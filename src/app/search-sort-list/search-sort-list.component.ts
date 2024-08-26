import { Component, OnInit } from '@angular/core';

interface Item {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-search-sort-list',
  templateUrl: './search-sort-list.component.html',
  styleUrls: ['./search-sort-list.component.scss']
})
export class SearchSortListComponent implements OnInit {
  items: Item[] = [
    { id: 1, name: 'Laptop', price: 1500 },
    { id: 2, name: 'Phone', price: 800 },
    { id: 3, name: 'Tablet', price: 600 },
    { id: 4, name: 'Monitor', price: 300 },
    { id: 5, name: 'Keyboard', price: 100 },
    { id: 6, name: 'Mouse', price: 50 },
    { id: 7, name: 'Speaker', price: 200 },
    { id: 8, name: 'Headphones', price: 150 },
    { id: 9, name: 'Charger', price: 30 },
    { id: 10, name: 'Camera', price: 1200 }
  ];

  sortedItems: Item[] = [];

  ngOnInit() {
    this.sortedItems = [...this.items];
  }

  // Binary Search for item by name
  searchItem(name: string): Item | null {
    const sortedByName = [...this.items].sort((a, b) => a.name.localeCompare(b.name));
    let left = 0;
    let right = sortedByName.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (sortedByName[mid].name.toLowerCase() === name.toLowerCase()) {
        return sortedByName[mid];
      } else if (sortedByName[mid].name.toLowerCase() < name.toLowerCase()) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return null;
  }

  // Quick Sort for sorting items
  quickSort(items: Item[], key: keyof Item, asc: boolean = true): Item[] {
    if (items.length <= 1) return items;

    const pivot = items[items.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < items.length - 1; i++) {
      if (asc ? items[i][key] < pivot[key] : items[i][key] > pivot[key]) {
        left.push(items[i]);
      } else {
        right.push(items[i]);
      }
    }

    return [
      ...this.quickSort(left, key, asc),
      pivot,
      ...this.quickSort(right, key, asc)
    ];
  }

  sortItemsByName(asc: boolean) {
    this.sortedItems = this.quickSort(this.sortedItems, 'name', asc);
  }

  sortItemsByPrice(asc: boolean) {
    this.sortedItems = this.quickSort(this.sortedItems, 'price', asc);
  }

  onSearch(name: string) {
    const result = this.searchItem(name);
    if (result) {
      this.sortedItems = [result];
    } else {
      alert('Item not found');
      this.sortedItems = [...this.items];
    }
  }

  resetList() {
    this.sortedItems = [...this.items];
  }
}

class LRUCache {
  maxSize: number;
  cache: Map<any, any>;
  constructor(maxSize: number) {
    this.maxSize = maxSize;
    this.cache = new Map();
  }

  

  get(key: string) {
    if (!this.cache.has(key)) {
      return null;
    }
    const value = this.cache.get(key);
    // Move the accessed key to the end (most recently used)
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  put(key: string, value: number) {
    if (this.cache.has(key)) {
      // If key exists, delete it so we can update it later
      this.cache.delete(key);
    } else if (this.cache.size >= this.maxSize) {
      // If the cache is full, delete the least recently used item (first item)
      const leastRecentlyUsedKey = this.cache.keys().next().value;
      this.cache.delete(leastRecentlyUsedKey);
    }
    // Insert the key-value pair as the most recently used
    this.cache.set(key, value);
  }

  size() {
    return this.cache.size;
  }
}

// Usage Example
const lruCache = new LRUCache(3);

lruCache.put('a', 1);
lruCache.put('b', 2);
lruCache.put('c', 3);

console.log(lruCache.get('a')); // Outputs 1
lruCache.put('d', 4); // Evicts key 'b'

console.log(lruCache.get('b')); // Outputs null (because 'b' was evicted)
console.log(lruCache.get('c')); // Outputs 3
console.log(lruCache.get('d')); // Outputs 4

console.log(lruCache.size()); // Outputs 3
