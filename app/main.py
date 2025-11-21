from fastapi import FastAPI
from app import database, crud, schemas

app = FastAPI(title="Todo Tracker (Local Dev)")

@app.on_event("startup")
def startup():
    database.init_db()

@app.get("/")
def root():
    return {"status": "ok", "message": "Todo tracker running locally"}

@app.post("/tasks", response_model=schemas.Task)
def create_task(task: schemas.TaskCreate):
    return crud.create_task(task)

@app.get("/tasks", response_model=list[schemas.Task])
def list_tasks():
    return crud.get_tasks()

@app.delete("/tasks/{task_id}")
def delete_task(task_id: int):
    crud.delete_task(task_id)
    return {"status": "deleted"}
