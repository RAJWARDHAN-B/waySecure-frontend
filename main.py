from fastapi import FastAPI
from pydantic import BaseModel
from safe_route import get_safest_route, get_alt_routes

import uvicorn

app = FastAPI()

@app.get("/")
def home():
    return {'health check': 'ok'}

@app.get("/{name}")
def hello(name: str):
    return {'message': f'hello there, {name}'}

class coordinates(BaseModel):
    start:list
    end:list

@app.post('/safe_route')
def predict_route(data : coordinates):
    start_lat, start_lon=data.start
    end_lat, end_lon=data.end

    origin=[start_lon, start_lat]
    destination=[end_lon, end_lat]

    route = get_safest_route(origin, destination)

    return {"route": route}

    