console.log('when i pass in 1 and 2 I expect 3 and got', addinator(1, 2));

console.log('when i pass in -1 and 2 I expect 1 and got', addinator(-1, 2));

console.log('when i pass in 1.5 and 2.5 I expect 4 and got', addinator(1.5, 2.5));


console.log('when i pass in "1" and "2" I expect "3" and got', addinator('1', '2'));

console.log('when i pass in 3 I expect 3 and got', addinator(3));

console.log('when i pass in the string of ten the number 3 i expect NaN and got', addinator('ten', 3));