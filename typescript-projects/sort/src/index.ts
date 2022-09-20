import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numColl = new NumbersCollection([1, 2, -45, 0, 7]);
const charsColl = new CharactersCollection("xaaa");
// charsColl.sort();
// console.log(charsColl.data)
const linkedList = new LinkedList();

linkedList.addLast(200);
linkedList.addLast(-1);
linkedList.addLast(0);
linkedList.addLast(19);
linkedList.addLast(2);
// linkedList.removeLast();
// // console.log(linkedList.compare(2,3));
// linkedList.swap(0,1);
// linkedList.print()
linkedList.sort();
linkedList.print();
