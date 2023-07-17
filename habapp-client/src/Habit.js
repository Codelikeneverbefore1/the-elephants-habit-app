import React from "react"

const Habit = () => {
    return (
        <div>
            <h2>New Habit</h2>
            <form>
                <label>Habit Name</label>
                <input
                    type="text"
                    required
                />
                <label>Habit Goal</label>
                <input
                    type="text"
                    required
                />    
                <label>Habit Duration</label>
                <input
                    type="text"
                    required
                />
                <button>Submit Habit</button>        
            </form>   

        </div>
    )
}

export default Habit