from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app import database, crud, schemas

app = FastAPI(title="Todo Tracker (Local Dev)")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Wide open for local dev
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

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

@app.patch("/tasks/{task_id}/toggle", response_model=schemas.Task)
def toggle_task_endpoint(task_id: int):
    task = crud.toggle_task(task_id)
    if task:
        return task
    return {"error": "Task not found"}
