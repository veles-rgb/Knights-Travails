// Check if a move is valid
function isValid(x, y) {
    // x and y must both be between 0 and 7
    if (x >= 0 && x <= 7 && y >= 0 && y <= 7) {
        return true;
    } else {
        return false;
    }
}

// Get all possible (legal) moves
function getKnightMoves(position) {
    // The eight possible L-shaped offsets a knight can make (3 moves)
    const validDirections = [
        [2, 1], [1, 2], [-1, 2], [-2, 1], [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    let results = [];

    // Try each offset, compute the new square, and keep it if valid (legal)
    validDirections.forEach(direction => {
        const newX = position[0] + direction[0];
        const newY = position[1] + direction[1];
        if (isValid(newX, newY)) {
            results.push([newX, newY]);
        }
    });

    return results;
}

// Find the shortest path from start to end (legally)
function knightMoves(start, end) {
    // Already at end point
    if (start.toString() === end.toString()) return [start];

    // Queue holds objects of the form { position, path },
    // where `path` is the list of squares taken to get there
    let queue = [{ position: start, path: [start] }];

    // Keep track of visited squares (as strings) to avoid repeats
    let visited = new Set();
    visited.add(start.toString());

    // Breadth first loop
    while (queue.length > 0) {
        // Dequeue the next square to explore
        const { position: current, path: pathSoFar } = queue.shift();

        // If reached the end position, return the full path
        if (current.toString() === end.toString()) return pathSoFar;

        // Otherwise, look at every legal knight move from here
        let neighbors = getKnightMoves(current);
        for (let square of neighbors) {
            // Only consider squares we haven't seen before 
            if (!visited.has(square.toString())) {
                visited.add(square.toString());
                // Build the new path by appending this square
                let newPath = [...pathSoFar, square];
                // Enqueue for later exploration
                queue.push({ position: square, path: newPath });
            }
        }
    }
    // If no path exists, return null
    return null;
}

// Example: shortest path from [3,3] to [7,5]
console.log(knightMoves([3, 3], [7, 5]));