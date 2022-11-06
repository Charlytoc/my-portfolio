from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     email = db.Column(db.String(120), unique=True, nullable=False)
#     password = db.Column(db.String(80), unique=False, nullable=False)
#     is_active = db.Column(db.Boolean(), unique=False, nullable=False)

#     def __repr__(self):
#         return f'<User {self.email}>'

#     def serialize(self):
#         return {
#             "id": self.id,
#             "email": self.email,
#             # do not serialize the password, its a security breach
#         }

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    name = db.Column(db.String(120), unique=False, nullable=True)
    country = db.Column(db.String(120), unique=False, nullable=True)

    post = db.relationship('Post', backref='user', lazy=True)


    def __repr__(self):

        return f'<User {self.email}>'
    
    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "name": self.name,
            "country": self.name
        }

class Post(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.String(120), unique=False, nullable=False)
    date = db.Column(db.date(), unique=False, nullable=False)
    image_url = db.Column(db.String(200), unique=False, nullable=True)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'),
        nullable=False)
    
    def __repr__(self):
        return f'<User {self.email}>'
    
    def serialize(self):
        return {
            
        }
