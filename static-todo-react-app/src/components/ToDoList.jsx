function ToDoList() {
    const tasks = ["Learn React", "Build a project", "Read documentation"];

    return (
        <section>
            <ul className="todo-list">
                {tasks.map((task)=> (
                    <li>
                        {task}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default ToDoList