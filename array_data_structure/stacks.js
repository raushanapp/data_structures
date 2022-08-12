//  build own data stucture itself stacks
let stack=[]
let top = -1
push(10)
push(20)
push(30)
push(40)
push(50)
console.log(peek(),"peak")
pop()
pop()
pop()
pop()
push("Masai")
pop()
pop()
pop()

console.log(stack[stack.length-1],"length")
// push data in stack
function push(data) {
    // if (top === stack.length-1) {
    //     return "overFlow"   if size are define then condition should able else not an issue
    // }
    stack[++top] = data;
}
// pop from data form top of stacks 
function pop() {
  if(top === -1) {
      return "underFlow"   
    }
    return stack[top--]
}
// peack the data from peack 
function peek() {
    if (top === -1) return "underFlow"
    return stack[top]
}