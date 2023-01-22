import { useState } from 'react';

import { CheckIcon } from '@heroicons/react/24/outline'

const EditForm = ({ editedTask, updateTask}) => {
    const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        updateTask({...editedTask, name: updatedTaskName});
    }

    return (
    <div
        role="dialog"
        aria-labeledby="editTask"
        // onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
        >
        <form
            className="todo"
            onSubmit={handleFormSubmit}
        >
        <div className="wrapper">
            <input
                type="text"
                id="editTask"
                className="input"
                value={updatedTaskName}
                onInput={(e) => setUpdatedTaskName(e.target.value)}
                required
                autoFocus
                maxLength={60}
                placeholder="Update Task"
            />
            <label
                htmlFor="editTask"
                className="label"
                >Update Task</label>
        </div>
        <button
            className="btn"
            aria-label={`Confirm edited task to now read ${updatedTaskName}`}
            type="submit"
            >
            <CheckIcon strokeWidth={2} />
        </button>
        </form>
    </div>
    )
}

export default EditForm
