import { ChevronRight, Trash } from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';

function TaskArea({ id, title, status, DeleteEvent, DetailsEvent, CompleteEvent }) {
    let [IsCompleted, setIsCompleted] = useState(status);

    function CheckEvent() {
        setIsCompleted(!IsCompleted);
        CompleteEvent();
    }

    return (
        <div className="TaskArea">
            <input className='TaskItemSmall' type="checkbox" id={id} checked={IsCompleted} onChange={CheckEvent} />
            {
                IsCompleted ?
                    <h2 className='TaskItemLarge' id='Completed' >{title}</h2> :
                    <h2 className='TaskItemLarge' >{title}</h2>
            }
            <Trash className='TaskItem' id='Trash' onClick={DeleteEvent} />
            <ChevronRight className='TaskItem' onClick={DetailsEvent}/>
        </div>
    );
}

TaskArea.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    status: PropTypes.bool,
    DeleteEvent: PropTypes.func,
    DetailsEvent: PropTypes.func,
    CompleteEvent: PropTypes.func
}

export default TaskArea;