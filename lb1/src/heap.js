import { FinancialRecord } from "./FinancialRecord.js";

class HeapSort {
  constructor(heap) {
    this.heap = heap;
  }

  getSorted() {
    const heapCopy = this.heap._heap.map(item => {
      if (item instanceof FinancialRecord) {
        return item.clone();
      }

      return { ...item };
    });

    const result = [];

    while (heapCopy.length >= 1) {
      result.push(this.heap.extractTop(heapCopy));
    }

    return result;
  }
}

class Heap {
  _heap = [];

  add(element) {
    const index = this._heap.push(element);

    this.siftup(index);

    return this;
  }

  fromArray(array) {
    this._heap = array;

    this._heap.forEach((_, index) => {
      this.siftdown(this._heap, this._heap.length - 1 - index);
    });

    return this;
  }

  extractTop(heap = this._heap) {
    const last = heap.length - 1;

    [heap[0], heap[last]] = [heap[last], heap[0]];

    const element = heap.pop();

    this.siftdown(heap, 0);

    return element;
  }

  getPrint() {
    console.log(
      "Heap:",
      this._heap.map(item => item.toString()),
    );
  }

  siftup(i) {
    let parent = Math.floor(i - 1 / 2);

    while (i !== 0 && Number(this._heap[i]) > Number(this._heap[parent])) {
      [this._heap[i], this._heap[parent]] = [this._heap[parent], this._heap[i]];

      i = parent;
      parent = Math.floor(i - 1 / 2);
    }
  }

  siftdown(heap, i) {
    let left = i * 2 + 2;
    let right = i * 2 + 1;

    while (
      (left < heap.length && Number(heap[i]) < Number(heap[left])) ||
      (right < heap.length && Number(heap[i]) < Number(heap[right]))
    ) {
      let smallest = right;

      if (right >= heap.length || Number(heap[left]) > Number(heap[right])) {
        smallest = left;
      }

      [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
      i = smallest;
      left = i * 2 + 2;
      right = i * 2 + 1;
    }
  }
}

export {Heap, HeapSort};
