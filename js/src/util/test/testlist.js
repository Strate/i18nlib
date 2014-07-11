/*
 * testlist.js - test the basic linked list utility class
 * 
 * Copyright © 2014, JEDLSoft
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function testListConstructorEmpty() {
	var ll = new ilib.List();
	assertNotUndefined(ll);
	
	assertEquals(0, ll.length());
}

function testListConstructorArray() {
    var arr = [0, 1, 2, 3];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
}

function testListConstructorArrayRightElements() {
    var arr = [0, 1, 2, 3];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(0, ll.removeFirst());
	assertEquals(1, ll.removeFirst());
	assertEquals(2, ll.removeFirst());
	assertEquals(3, ll.removeFirst());
}

function testListConstructorRemoveAllElements() {
    var arr = [0, 1, 2, 3];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(0, ll.removeFirst());
	assertEquals(1, ll.removeFirst());
	assertEquals(2, ll.removeFirst());
	assertEquals(3, ll.removeFirst());
	assertUndefined(ll.removeFirst());
}

function testListConstructorOtherList() {
    var arr = [0, 1, 2, 3];
    
    var list1 = new ilib.List(arr);
	assertNotUndefined(list1);

	var list2 = new ilib.List(list1);
	assertNotUndefined(list2);
}

function testListConstructorOtherListRightElements() {
    var arr = [0, 1, 2, 3];
    
    var list1 = new ilib.List(arr);
	assertNotUndefined(list1);

	var list2 = new ilib.List(list1);
	assertNotUndefined(list2);
	
	assertEquals(0, list2.removeFirst());
	assertEquals(1, list2.removeFirst());
	assertEquals(2, list2.removeFirst());
	assertEquals(3, list2.removeFirst());
}

function testListConstructorStringElements() {
    var arr = ["a", "b", "c", "d"];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals("a", ll.removeFirst());
	assertEquals("b", ll.removeFirst());
	assertEquals("c", ll.removeFirst());
	assertEquals("d", ll.removeFirst());
	assertUndefined(ll.removeFirst());
}

function testListConstructorMixedElements() {
    var arr = ["a", 0, "b", 1, "c", 2, "d", 3, true, false, function() {return 4;}];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(11, ll.length());
	assertEquals("a", ll.removeFirst());
	assertEquals(0, ll.removeFirst());
	assertEquals("b", ll.removeFirst());
	assertEquals(1, ll.removeFirst());
	assertEquals("c", ll.removeFirst());
	assertEquals(2, ll.removeFirst());
	assertEquals("d", ll.removeFirst());
	assertEquals(3, ll.removeFirst());
	assertEquals(true, ll.removeFirst());
	assertEquals(false, ll.removeFirst());
	assertEquals("function", typeof(ll.removeFirst()));
	assertUndefined(ll.removeFirst());
}

function testListFirst() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals("a", ll.first());
}

function testListFirstNoRemove() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	assertEquals("a", ll.first());
	assertEquals(4, ll.length());
}

function testListRemoveFirst() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	assertEquals("a", ll.removeFirst());
	assertEquals(3, ll.length());
}

function testListRemoveFirstMultiple() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	assertEquals("a", ll.removeFirst());
	assertEquals(3, ll.length());
	assertEquals(0, ll.removeFirst());
	assertEquals(2, ll.length());
	assertEquals("b", ll.removeFirst());
	assertEquals(1, ll.length());
	assertEquals(1, ll.removeFirst());
	assertEquals(0, ll.length());
}

function testListRemoveFirstEmpty() {
    var arr = ["a"];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(1, ll.length());
	assertEquals("a", ll.removeFirst());
	assertEquals(0, ll.length());
	assertUndefined(ll.removeFirst());
}

function testListRemoveFirstEmptyLengthOkay() {
    var arr = ["a"];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals("a", ll.removeFirst());
	assertEquals(0, ll.length());
	assertUndefined(ll.removeFirst());
	assertEquals(0, ll.length());
}

function testListLast() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(1, ll.last());
}

function testListLastNoRemove() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	assertEquals(1, ll.last());
	assertEquals(4, ll.length());
}

function testListRemoveLast() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	assertEquals(1, ll.removeLast());
	assertEquals(3, ll.length());
}

function testListRemoveLastMultiple() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	assertEquals(1, ll.removeLast());
	assertEquals(3, ll.length());
	assertEquals("b", ll.removeLast());
	assertEquals(2, ll.length());
}

function testListRemoveLastEmpty() {
    var arr = ["a"];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(1, ll.length());
	assertEquals("a", ll.removeLast());
	assertEquals(0, ll.length());
	assertUndefined(ll.removeLast());
}

function testListRemoveLastEmptyLengthOkay() {
    var arr = ["a"];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals("a", ll.removeLast());
	assertEquals(0, ll.length());
	assertUndefined(ll.removeLast());
	assertEquals(0, ll.length());
}

function testListAddLast() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	ll.addLast("c");
	assertEquals(5, ll.length());
}

function testListAddLastRightElement() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	ll.addLast("c");
	assertEquals("c", ll.last());
}

function testListAddLastRightEnd() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	assertEquals("a", ll.first());
	assertEquals(1, ll.last());
	ll.addLast("c");
	assertEquals("c", ll.last());
	assertEquals("a", ll.first());
}

function testListAddLastEmpty() {
    var ll = new ilib.List();
	assertNotUndefined(ll);
	
	assertEquals(0, ll.length());
	ll.addLast("c");
	assertEquals(1, ll.length());
}

function testListAddLastEmptyRightElement() {
    var ll = new ilib.List();
	assertNotUndefined(ll);
	
	assertEquals(0, ll.length());
	ll.addLast("c");
	assertEquals(1, ll.length());
	assertEquals("c", ll.first());
	assertEquals("c", ll.last());
}

function testListAddFirst() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	ll.addFirst("c");
	assertEquals(5, ll.length());
}

function testListAddFirstRightElement() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	ll.addFirst("c");
	assertEquals("c", ll.first());
}

function testListAddFirstRightEnd() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	assertEquals("a", ll.first());
	assertEquals(1, ll.last());
	ll.addFirst("c");
	assertEquals(1, ll.last());
	assertEquals("c", ll.first());
}

function testListAddFirstEmpty() {
    var ll = new ilib.List();
	assertNotUndefined(ll);
	
	assertEquals(0, ll.length());
	ll.addFirst("c");
	assertEquals(1, ll.length());
}

function testListAddFirstEmptyRightElement() {
    var ll = new ilib.List();
	assertNotUndefined(ll);
	
	assertEquals(0, ll.length());
	ll.addFirst("c");
	assertEquals(1, ll.length());
	assertEquals("c", ll.first());
	assertEquals("c", ll.last());
}

function testListClearLength() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(4, ll.length());
	ll.clear();
	assertEquals(0, ll.length());
}

function testListClearNoFirst() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals("a", ll.first());
	ll.clear();
	assertUndefined(ll.first());
}

function testListClearNoLast() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	assertEquals(1, ll.last());
	ll.clear();
	assertUndefined(ll.last());
}

function testListIterator() {
    var arr = ["a", 0, "b", 1];
    
    var ll = new ilib.List(arr);
	assertNotUndefined(ll);
	
	var it = ll.iterator();
	assertNotUndefined(it);
	assertTrue(it.hasNext());
	assertEquals("a", it.next());
	assertTrue(it.hasNext());
	assertEquals(0, it.next());
	assertTrue(it.hasNext());
	assertEquals("b", it.next());
	assertTrue(it.hasNext());
	assertEquals(1, it.next());
	assertFalse(it.hasNext());
	assertUndefined(it.next());
}

function testListIteratorEmpty() {
    var ll = new ilib.List();
	assertNotUndefined(ll);
	
	var it = ll.iterator();
	assertNotUndefined(it);
	assertFalse(it.hasNext());
	assertUndefined(it.next());
}
