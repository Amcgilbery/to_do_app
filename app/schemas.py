from pydantic import BaseModel

class TaskCreate(BaseModel):
    name: str

class Task(TaskCreate):
    id: int
    completed: bool
