export function mergeSortAnimations( array ) { 
    const arrayCopy = [ ...array ];
    const len = arrayCopy.length;
    const aux = Array(len);
    const animations = [];
    mergeSortHelper(arrayCopy, aux, 0, len - 1, animations);
    return animations;
}

function mergeSortHelper(array, aux, start, end, animations) { 
    if (start >= end) return;
    const middle = start + Math.floor((end - start) / 2);
    mergeSortHelper(array, aux, start, middle, animations);
    mergeSortHelper(array, aux, middle + 1, end, animations);
    merge(array, aux, start, middle, end, animations);
    }

function merge(array, aux, start, middle, end, animations){
    for (let i = start; i <= end; i++) aux[i] = array[i];
    let i = start;
    let j = middle + 1;
    for (let k = start; k <= end; k++) {
      if (i > middle) {
        animations.push([[j], false]);
        animations.push([[k, aux[j]], true]);
        array[k] = aux[j++];
      } else if (j > end) {
        animations.push([[i], false]);
        animations.push([[k, aux[i]], true]);
        array[k] = aux[i++];
      } else if (aux[j] < aux[i]) {
        animations.push([[i, j], false]);
        animations.push([[k, aux[j]], true]);
        array[k] = aux[j++];
      } else {
        animations.push([[i, j], false]);
        animations.push([[k, aux[i]], true]);
        array[k] = aux[i++];
      }
    }
  }
