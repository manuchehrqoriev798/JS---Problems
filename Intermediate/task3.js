let obj = { name: "John", age: 30 };
obj.gender = "male";
obj.age = 31;
delete obj.name;
console.log(`Updated object: ${JSON.stringify(obj)}`);
