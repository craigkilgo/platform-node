const mongoose = require('mongoose');
const Tx = mongoose.model('transactions');
const Names = mongoose.model('names');
const Fv = mongoose.model('fiftyValues');
const crypto = require('crypto');


exports.insert = (req, res, next) => {

    const tx = new Tx({customer:'Walter Hagen',item:'niblick',price:'600'});
    tx.save();
    next();

  };

  exports.fiftyValues = async (req, res, next) => {
    const fv = await Fv.find();

    var rtn = fv.map(function(item) {
    item.hash = crypto.createHash('sha256').update(item.value).digest().toString('hex');
        return item;
    });
    req.fifty = rtn;
    next();
    //res.render('index',{fifty:rtn});

  };

  exports.names = async (req, res, next) => {



    function mergeSort (arr) {
        if (arr.length === 1) {
          // return once we hit an array with a single item
          return arr
        }

        const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
        const left = arr.slice(0, middle); // items on the left side
        const right = arr.slice(middle); // items on the right side

        return merge(
          mergeSort(left),
          mergeSort(right)
        );
      }

      // compare the arrays item by item and return the concatenated result
      function merge (left, right) {
        let result = [];
        let indexLeft = 0;
        let indexRight = 0;

        while (indexLeft < left.length && indexRight < right.length) {
          if (left[indexLeft].name < right[indexRight].name) {
            result.push(left[indexLeft]);
            indexLeft++;
          } else {
            result.push(right[indexRight]);
            indexRight++;
          }
        }
        return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
    }



    //graph and bfs
    class Graph {
        constructor(props) {
          this.neighbors = {}
        }

        addEdge(u, v) {
          if (!this.neighbors[u]) this.neighbors[u] = []
          this.neighbors[u].push(v)
        }

        bfs(start) {
          if (!this.neighbors[start] || !this.neighbors[start].length) {
            return [start]
          }

          var results = {"nodes": []},
              queue = this.neighbors[start],
              count = 1

          while(queue.length) {
            var node = queue.shift()
            if (!results[node] || !results[node].visited) {
              results[node] = {visited: true, steps: count}
              results["nodes"].push(node)
              if (this.neighbors[node]) {
                if (this.neighbors[node].length) {
                  count++
                  queue.push(...this.neighbors[node])
                } else {
                  continue
                }
              }
            }
          }
          return results
        }

        shortestPath(start, end) {
          if (start == end) {
            return [start, end]
          }

          var queue = [start],
              visited = {},
              predecessor = {},
              tail = 0,
              path

          while(tail < queue.length) {
            var u = queue[tail++]
            if (!this.neighbors[u]) {
              continue
            }

            var neighbors = this.neighbors[u]
            for(var i = 0; i < neighbors.length; ++i) {
              var v = neighbors[i]
              if (visited[v]) {
                continue
              }
              visited[v] = true
              if (v === end) {   // Check if the path is complete.
                path = [ v ]   // If so, backtrack through the path.
                while (u !== start) {
                  path.push(u)
                  u = predecessor[u]
                }
                path.push(u)
                path.reverse()
                return path
              }
              predecessor[v] = u
              queue.push(v)
            }
          }

          return path
        }
      }


    const names = await Names.find();

    var rtn = mergeSort(names);
    req.names = rtn;

    var nodes = [];
    var edges = [];
    var z = 0;

    var g = new Graph();

    names.forEach(function(n){
        nodes.push({id:n.id,x:Math.floor((Math.random() * 99)+1),y:Math.floor((Math.random() * 99)+1),size:1});
        let edge = n.friends.split(",");
        edge.forEach(function(e){
            edges.push({id:z,source:n.id,target:e});
            g.addEdge(n.id.toString(),e.toString());
            z++;
        });


    });
    var pathArr = g.shortestPath('6','77');
    var path = pathArr.join("=>");

    console.log('path: '+path);

    req.graph = {nodes,edges,path};

    next();
  };


  exports.final = (req, res) => {
    var stringPairs = [
    {string1:'ethereal',string2:'front'},
    {string1:'ask',string2:'unique'},
    {string1:'bucket',string2:'average'},
    {string1:'plug',string2:'weather'},
    {string1:'trade',string2:'wide'},
    {string1:'card',string2:'copper'},
    {string1:'numberless',string2:''},
    {string1:'fruit',string2:'example'},
    {string1:'slap',string2:'pause'},
    {string1:'jittery',string2:'confused'}];
    var hash = 'acb80281e4e94213c7452a81fa08f61893eff5ffa62d50876da8d1fed4710d95';

    var pairsBool = false;
    console.log('init hash: '+hash);
    stringPairs.forEach(function(pair){

        let pairHash = crypto.createHash('sha256').update(pair.string1+pair.string2).digest().toString('hex');
        //console.log(pairHash);
        if(pairHash==hash){
            pairsBool = true;
            //console.log('found true');
        }
    });

    //random values
    var randomValues = [];
    var i = 0;

    while(i<20){
        randomValues.push(Math.floor(Math.random() * 10000000));
        i++;
    }

    var minmax = {min:randomValues[0],max:randomValues[0],values:randomValues};
    randomValues.forEach(function(v){
        if(v < minmax.min){
            minmax.min = v;
        }
        if(v > minmax.max){
            minmax.max = v;
        }
    });



    //primes----------------------------------------------
   var eratosthenes = function(n) {
      // Eratosthenes algorithm to find all primes under n
      var array = [], upperLimit = Math.sqrt(n), output = [];

      for (var i = 0; i < n; i++) {
          array.push(true);
      }

      for (var i = 2; i <= upperLimit; i++) {
          if (array[i]) {
              for (var j = i * i; j < n; j += i) {
                  array[j] = false;
              }
          }
      }

      for (var i = 2; i < n; i++) {
          if(array[i]) {
              output.push(i);
          }
      }

      return output;
    };

    var primes = eratosthenes(500);

    res.render('index',{fifty:req.fifty,names:req.names,pairsBool,minmax,primes,graph:req.graph});
  };
