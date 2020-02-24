let { Test } = require('./test');

/*
Task
You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.

Empty positions are marked .. Walls are marked W. Start and exit positions are empty in all test cases.
 */

function pathFinder(maze) {
    // Turn maze from string to nested array
    let chart = [];
    for (let c of maze.split("\n")) {
        chart.push([...c]);
        console.log(chart);
    }

    let size = chart.length;

    // Make toVisit frontier
    let toVisit = new Set();
    toVisit.add([0, 0]);

    // Check if we already are in the exit
    let end = size - 1;
    // Size 1 maze
    if (end == 0)
        return true;

    while (toVisit.size > 0) {
        // Pop value from set
        let pos = toVisit.values().next().value;
        toVisit.delete(pos);

        let [x, y] = pos;
        chart[x][y] = "*"; // Mark as visited

        // Iterate over adjancets
        for ([x, y] of [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]]) {
            // Check exit
            if (end == x && end == y)
                return true;
            // Check array out of boundary
            if (x < 0 || y < 0 || x >= size || y >= size)
                continue;
            // Check if wall or already visited
            let value = chart[x][y];
            if (value != "W" && value != "*")
                toVisit.add([x, y]);
        }
    }
    return false;
}

Test(`.W.
.W.
...`, true, pathFinder);

Test(`......
......
......
......
......
......`, true, pathFinder);

Test(`......
......
......
......
.....W
....W.`, false, pathFinder);