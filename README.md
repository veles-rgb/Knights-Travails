# Knight’s Travails

A JavaScript solution to find the shortest path a knight can take on an 8×8 chessboard using Breadth-First Search (BFS).

This project was developed as part of [The Odin Project](https://www.theodinproject.com/lessons/javascript-knights-travails).

## How It Works

- **Implicit Graph**: Treat each square as a node and each legal knight move as an edge.
- **Move Generation**: `getKnightMoves(position)` computes all legal L-shaped jumps from a given square.
- **Breadth-First Search**: `knightMoves(start, end)` uses a queue to explore moves layer by layer, guaranteeing the shortest possible path.
