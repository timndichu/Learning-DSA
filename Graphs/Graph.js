class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
    return this;
  }

  //   addEdge(vertex1, vertex2) {
  //     if (this.adjacencyList[vertex1]) {
  //       let vertexArr = this.adjacencyList[vertex1];
  //       if (!vertexArr.includes(vertex2)) vertexArr.push(vertex2);
  //     } else {
  //       this.addVertex(vertex1);
  //       this.addEdge(vertex1, vertex2);
  //     }
  //   }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      let vertexArr = this.adjacencyList[vertex1];
      if (!vertexArr.includes(vertex2)) vertexArr.push(vertex2);
    } else {
      this.addVertex(vertex1);
      this.addEdge(vertex1, vertex2);
    }

    if (this.adjacencyList[vertex2]) {
      let vertexArr = this.adjacencyList[vertex2];
      if (!vertexArr.includes(vertex1)) vertexArr.push(vertex1);
    } else {
      this.addVertex(vertex2);
      this.addEdge(vertex2, vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (v) => v !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (v) => v !== vertex1
    );
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      while (this.adjacencyList[vertex].length) {
        const adjacentVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacentVertex);
      }

      delete this.adjacencyList[vertex];
    }
  }

  DFS_Recursive(start) {
    const visited = {};
    const results = [];
    const adjacencyList = this.adjacencyList;

    //     function dfsNeighbour(vertex, visited, results, adjacencyList) {
    //         console.log(vertex);
    //         if (!vertex) {
    //             return;
    //           }

    //           results.push(vertex);
    //           visited[vertex] = true;

    //           let neighbours = adjacencyList[vertex];

    //           for (let neighbour of neighbours) {
    //             if (!visited[neighbour]) {
    //               dfsNeighbour(neighbour, visited, results, adjacencyList);
    //             }
    //           }
    //     }
    //    dfsNeighbour(vertex, visited, results, this.adjacencyList);

    (function dfsNeighbour(vertex) {
      if (!vertex) {
        return;
      }

      results.push(vertex);
      visited[vertex] = true;

      let neighbours = adjacencyList[vertex];

      for (let neighbour of neighbours) {
        if (!visited[neighbour]) {
          dfsNeighbour(neighbour);
        }
      }
    })(start);

    return results;
  }

  DFS_Iterative(start) {
    let stack = [start];
    let results = [];
    let visited = {};
    visited[start] = true;
    let vertex;

    while (stack.length) {
      vertex = stack.pop();
      results.push(vertex);
      let neighbours = this.adjacencyList[vertex];

      neighbours.forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          stack.push(neighbour);
        }
      });
    }
    return results;
  }

  BFS(start) {
    let queue = [start];
    let results = [];
    let visited = {};
    visited[start] = true;
    let vertex;

    while (queue.length) {
      vertex = queue.shift();

      results.push(vertex);

      let neighbours = this.adjacencyList[vertex];

      neighbours.forEach((neighbour) => {
        if (!visited[neighbour]) {
          visited[neighbour] = true;
          queue.push(neighbour);
        }
      });
    }
    return results;
  }
}

const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");
console.log(graph);
// // graph.removeEdge("B", "C");
// graph.removeVertex("E");
// const recursiveRes = graph.DFS_Recursive("A");
// console.log(recursiveRes);
const iterativeRes = graph.DFS_Iterative("A");
console.log(iterativeRes);
// const bfs = graph.BFS("A");
// console.log(bfs);
