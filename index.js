//  Similar de "SingleLinkedListe""

// Pero....  Each Node Connect to the one Before it and After it..

//  Just like the DOubleLinkedLIst.......


// Vamos a SetUp..

//  NOde has:  -val, -next , -prev

  class Node{
      constructor(val){
          this.val = val;
          this.next = null;
          this.prev = null;
      }
  }
  

// DoubleLinkedList [incluso]
//    -head, -tail, length''

 class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null
        this.length = 0;
       
          }

   //  You can test in your Terimals... If it works...


     push(val){
 //Create a Node... with values pasted in
         let newNode = new Node(val)

         if(this.length === 0){
             this.head = newNode;
             this.tail = newNode
         }else{

//  set the next property on the tail to that node. 
         this.tail.next = newNode;
 //set the previous property on the newly created node..
// The part of the arrow that connect    Second to the last Node. with connection back and forth <======>  Newly added Node
         newNode.prev = this.tail;  // this ispointing the arrow backwords
          this.tail = newNode  //[set the previous [property on the newly created node. to be tail ]]
         }
        this.length++
         return this;
        }
    

     pop(){
            if(!head) return undefined

  
          let poppedNode = this.tail
          if(this.length === 1){
              this.head = null
              this.tail = null
          }else{
             this.tail = poppedNode.prev
              this.tail.next = null;
              poppedNode.prev = null

          }
            this.length--
          return poppedNode;
        }


       // Remove Node fromt the begining. // Codeded myself pseudocode
       shift(){

          if(this.length === 0) return undefined;

          let oldhead = this.head

          if(this.length === 1){
            this.head = null
            this.tail = null
          }else{
            this.head = oldhead.next
            this.head.prev = null
            oldhead.next = null
          }
          this.length--
          return oldhead

       } // end of shift


//  ---------------------------

     unshift(val){
 // create a new node with value pased into the function
       let newNode = new Node(val);

       if(this.length === 0){
 // set the head & tail to become he new Node.
       this.head = newNode;
       this.tail = newNode

       }else{
 // set the prev Property on the head of the list to the newNode       
         this.head.prev = newNode
 // set the next property on the new node to be the head property        
         newNode.next = this.head

  // update the Head of the List  to be the NEWNODE      
         this.head = newNode
       }

       this.length++
//        return the list
       return this

     }

//      -----------------
     get(index){
       if(index < 0 || index >= this.length) return null
       
       
       var count = 0;
       var current = this.head

      
  // if the index is <= to half of the list
     if(index <= this.length/2){

       while(count != index){
         //loop through the list form the Head and loop toward the middle
       current = current.next;
       count++            
       }
     // return the Node it foound. 
       
                       
        }else {

 // we want to start at the other End of the giving list.
             var count = this.length - 1;

             var current = this.tail // we are starting at the end
             while(count !== index){
                current = current.prev
                  count--
             }
           }
            
                 return current

         }


// ------------------------------------------

      set(index, val){

  /*  create a variable which is the result of GET method at the index passed of
  get method at the index passed to the function. 
        */
          let foundNode = this.get(index)
  
 /* if the Get method returns a Valid node, set the value of that node
 to be the value passed to the function. 
  return true
  */          
           if(foundNode !== null){
             foundNode.val = val;
             return true;
           }
   // Else return false.         
         return false;
      }
  // -------------------------------------------


      insert(index, val ){
     if (index < 0 || index >= this.length) return false
     if(index === 0) return this.unshift(val)
     if(index === this.length) this.push(val)
     var newNode = new Node(val)

  // access the index right B4 the one we are looking to get
         let beforeNode = this.get(index -1)
         let afterNode = beforeNode.next
   
   /*Hints. Prev Node most connect to the NEW Node and the Next node most connect to the New Node    
   
    PRev <=>  New NODE  <=>  NEXT NODE

    */
          beforeNode.next = newNode;
          newNode.prev = beforeNode.next;

          newNode.next = afterNode;
          afterNode.prev = newNode;
 
           
          this.length++;
           return true;
    
           }
 //  ---------------------------
           
      remove(index, val){
             if (index < 0 || index >= this.length) return undefined
             if(index === 0) return this.shift()
             if(index === this.length -1 ) this.pop()

// Use Get method to  retrieve the item to be removed.
            let removedNode  = this.get(index)
// Say we have A B C D ...We are removing  "C"   We need to connect  B to D, D to B.

            // removedNode.prev.next = removedNode.next;
            // removedNode.next.prev = removedNode.prev;

                // OR Below... Still works the same
         let beforeNode = removedNode.prev
         let afterNode = removedNode.next
          
          beforeNode.next = afterNode.prev
          afterNode.prev = beforeNode.next
          
// update the next & prev properties to remove the found node Set them to Null.
              removedNode.next = null
              removedNode.prev = null
            
      this.length--
      return removedNode
      }

// ---------------reverse------------

    reverse(){
        
        let node = this.head
        let head = this.tail
        this.tail = node
        
        let next;
        var prev = null
        
        for(var i = 0; i < this.length; i++){
            next = node.next;
            prev.next = prev;
            prev = node;
            node = next;
        }
    return this; 
    }


     }  // end of DoubleLinkedList  


let list = new DoubleLinkedList()
  list.push("Harry")
    list.push("Ron")
      list.push("Hermione")
// -------------------------------------------

      class Node{
    constructor(val){
        this.val = val
        this.next = null;      
        this.prev = null;      
    }
}

class DoublyLinkedList{
    constructor(val){
        this.val = val
        this.next = null;      
    }
    push(val){
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    get(){
        
    }
}

// --------------------------------
// DOubleLinkedLIstExtra implementation. 
class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
            this.length++;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
            this.length++;
         }
        return this;
    }
    insert(){

   let newNode = new Node(val)
   
   let beforeNode = this.get(index -1)
   let afternode = beforeNode.next


      beforeNode.next = newNode;
      newNode.prev = beforeNode.next;
      
      newNode.next = afterNode;
      afterNode.prev = newNode;
      
      this.length++;
      return true;
    }
    
    remove(index, val){
        let removeNode = this.get(index)
        
        let beforeNode = removeNode.prev
        let afterNode = removeNode.next
        
        beforeNode.next = afterNode.prev
        afterNode.prev = beforeNode.next
        
        removeNode.next = null
        removeNode.prev = null
        
        this.length--
        return removeNode
    }
}