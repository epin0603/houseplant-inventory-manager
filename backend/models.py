from backend.app import db

class Plant(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(80), nullable = False)
    species = db.Column(db.String(120), nullable = False)
    purchase_date = db.Column(db.Date, nullable = False)
    care_history = db.Column(db.Text, nullable = True)
    image_url = db.Column(db.String(200), nullable = True)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'species': self.species,
            'purchase_date': str(self.purchase_date),
            'care_history': self.care_history,
            'image_url': self.image_url
        }

    def __repr__(self):
        return f'<Plant {self.name}>'