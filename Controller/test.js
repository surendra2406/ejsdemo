// const connection = require("../databaseConnection")
exports.test =((req, res)=>{


    
    //const data =connection.connectionFind('user')
    //console.log(data)





    const month =["jan", "feb", "march", "april"];

    const posts = [
        {title: "Post 1", name: "Danny"},
        {title: "Post 2", name: "Alex"},
        {title: "Post 3", name: "Matt"},
        {title: "Post 4", name: ["surendra", "kumar", "yadav"]},
        ];
    //    const person = '{"name":"John", "age":31, "city":"New York"}'
    //  console.log(JSON.parse(person));

    //  const obj = {name: "John", age: 30, city: "New York"};
    //  console.log(JSON.stringify(obj));


    //  const ob ={
    //     "name":"ptere",
    //     "age":100,
    //     "cars":["Ford2", "BMW3", "Fiat"]
    //     }
        // const ob ={
        //     name:"ptere",
        //     age:100,
        //     cars:["Ford2", "BMW3", "Fiat4"]
        //     }
        // console.log(ob);

    


    res.render('test',
        {month:month,
        post: posts, 
        hello:"good morning",
        user:{name:"surendra YAdav", id:10}})
})
