//getting and setting attributes of elememts

let coderdostlink=document.querySelector('a')
console.log(coderdostlink)
console.log(coderdostlink.getAttribute('href'))

//set the attributes

coderdostlink.setAttribute('href',"https://youtu.be/Vq-bgH0yq6Y?si=EHT32pO9Ch66GlXi")
console.log(coderdostlink)
console.log(coderdostlink.getAttribute('href'))
coderdostlink.innerText="Master class of web development"