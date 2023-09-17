const band={
    bandname:"led zepplin",
    famoussong:"stairway to heaven",
    year:1968,
    anothersong:"kashmir"
}

let {bandname,famoussong,...restprops} =band
console.log(bandname)
console.log(restprops)