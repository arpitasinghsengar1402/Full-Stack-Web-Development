// dom traversing

// //get rootnode
// const rootnode=document.getRootNode()
// // console.log(rootnode)
 
// //get childnode
// // const rootnode=document.getRootNode()
// // console.log(rootnode.childNodes)

// //child of html
// // const rootnode=document.getRootNode()
// const htmlelementnode=rootnode.childNodes[0]
// // console.log(htmlelementnode)
// // console.dir(htmlelementnode)
// const headelementnode=htmlelementnode.childNodes[0]
// const textnode1=htmlelementnode.childNodes[1]
// const bodyelementnode=htmlelementnode.childNodes[2]
// // console.log(headelementnode.nextSibling)
// console.log(headelementnode.nextElementSibling)

// const h1=document.querySelector("h1");
// const div =h1.parentNode;
// div.style.color="yellow";
// div.style.backgroundColor="pink";

// const h1=document.querySelector("h1");
// const body =h1.parentNode.parentNode;
// body.style.color="yellow";
// body.style.backgroundColor="pink";

// const body=document.body
// console.log(body)

// const head=document.querySelector("head")
// console.log(head)
// const title=head.querySelector("title")
// console.log(title)
// console.log(title.childNodes)

const container=document.querySelector(".container")
console.log(container)
console.log(container.childNodes)
console.log(container.children)