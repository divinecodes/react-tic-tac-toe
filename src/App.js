import { useState } from 'react' 

const NUM_OF_ROWS = 3;
const NUM_OF_COLUMNS = 3;
const Square = () =>  {
    const [value, setValue ] = useState(null);

    const handleClick = () => {
        setValue('X');
    }

    return (
        <button
            className="square"
            onClick={handleClick}
        >
            {value}
        </button>
    );
}

export default function Board() {
    return (
        <>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
            <div className="board-row">
                <Square />
                <Square />
                <Square />
            </div>
        </>
    )
}
