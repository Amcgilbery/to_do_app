from .database import get_connection

def create_task(task):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("INSERT INTO tasks (name) VALUES (?)", (task.name,))
    conn.commit()
    task_id = cur.lastrowid
    conn.close()
    return {"id": task_id, "name": task.name, "completed": False}

def get_tasks():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("SELECT * FROM tasks")
    rows = cur.fetchall()
    conn.close()
    return [dict(row) for row in rows]

def delete_task(task_id):
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
    conn.commit()
    conn.close()

def toggle_task(task_id: int):
    conn = get_connection()
    cur = conn.cursor()

    # Flip the completed field (0 -> 1, 1 -> 0)
    cur.execute("""
        UPDATE tasks
        SET completed = NOT completed
        WHERE id = ?
    """, (task_id,))

    conn.commit()

    # Return the updated task
    cur.execute("SELECT * FROM tasks WHERE id = ?", (task_id,))
    row = cur.fetchone()
    conn.close()
    return dict(row) if row else None
