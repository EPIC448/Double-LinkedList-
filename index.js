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

//              set the next property on the tail to that node. 
         this.tail.next = newNode;
         //set the previous property on the newly created node..
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

  // update the head to be the new node       
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

  /*  create a variable which is the result of GET method at tthe index passed of
  get method at the index passed to the function. 
        */
          let foundNode = this.get(index)
  
 /* if the Get method returns a Valid node, set the value of that node
 to be the value passed to the function. 
  return true
  */          
           if(foundNode != null){
             foundNode.val = val;
             return true;
           }
   // Else return false.         
         return false;
      }
    



     }  // end of DoubleLinkedList  


let list = new DoubleLinkedList()
  list.push("Harry")
    list.push("Ron")
      list.push("Hermione")