module.exports = {
removeBadPeople:function(people){
    var results = [];
    people.forEach(function(e){
        if (Object.keys(e).length !== 0) {
            if (e.name.length > 0)
                results.push(e)
        }
    });
    return results;
},

sumAgesValid:function(people) {
    results = 0;
    this.removeBadPeople(people).forEach(function(e){
        results += e.age
    });
    return results;
},

sumAgesAll:function(people) {
    results = people.reduce(function(prev,cur, i){
        if(i===1) {
            return prev.age + cur.age
        } else if (Object.keys(cur).length !== 0) {
            return prev + cur.age
        } return prev
    });
    return results
},



};