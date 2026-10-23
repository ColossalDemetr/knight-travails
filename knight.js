const knightMoves = (start, end) => {
    const moves = [[2,1], [2,-1], [-2,1], [-2,-1], [1,2], [1,-2], [-1,2], [-1,-2]];

    const queue = [[start, [start]]];

    while (queue.length > 0) {
        const fifo = queue.shift();
        const [position, path] = fifo;

        if (position[0] === end[0] && position[1] === end[1]) {
            
            console.log(`=> You've made it in ${path.length - 1} moves! Here's your path:`);
                for (const element of path) {
                    console.log(element);
                };
            return;
        } else {
            for (const [dx, dy] of moves) {
                const newPosition = [position[0] + dx, position[1] + dy];

                if (
                    newPosition[0] >= 0 && 
                    newPosition[0] <= 7 && 
                    newPosition[1] >= 0 && 
                    newPosition[1] <= 7
                ) queue.push([newPosition, [...path, newPosition]]);

            };
        };


    };
};

export {knightMoves};