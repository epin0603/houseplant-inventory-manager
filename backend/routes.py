from flask import request, jsonify
from backend.app import app, db
from backend.models import Plant
from datetime import datetime

@app.route('/plants', methods=['GET'])
def get_plants():
    plants = Plant.query.all()
    return jsonify([plant.to_dict() for plant in plants])

@app.route('/plants', methods=['POST'])
def add_plant():
    data = request.json
    purchase_date = datetime.strptime(data['purchase_date'], '%Y-%m-%d').date()

    new_plant = Plant(
        name = data['name'],
        species = data['species'],
        purchase_date = purchase_date,
        care_history = data.get('care_history'),
        image_url = data.get('image_url')
    )

    db.session.add(new_plant)
    db.session.commit()
    return jsonify(new_plant.to_dict()), 201

@app.route('/plants/<int:id>', methods=['PUT'])
def update_plant(id):
    plant = Plant.query.get_or_404(id)
    data = request.json
    purchase_date = datetime.strptime(data['purchase_date'], '%Y-%m-%d').date()

    plant.name = data['name']
    plant.species = data['species']
    plant.purchase_date = purchase_date
    plant.care_history = data.get('care_history')
    plant.image_url = data.get('image_url')
    db.session.commit()
    return jsonify(plant.to_dict())

@app.route('/plants/<int:id>', methods=['DELETE'])
def delete_plant(id):
    plant = Plant.query.get_or_404(id)
    db.session.delete(plant)
    db.session.commit()
    return '', 204

@app.route('/plants/<int:id>', methods=['GET'])
def get_plant(id):
    plant = Plant.query.get(id)
    if plant is None:
        return jsonify({"error": "Plant not found"}), 404
    return jsonify(plant.to_dict())