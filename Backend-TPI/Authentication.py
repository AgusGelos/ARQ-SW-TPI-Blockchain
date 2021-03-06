from flask import Flask, request
from flask_jwt import JWT, jwt_required, current_identity
from werkzeug.security import safe_str_cmp

### https://pythonhosted.org/Flask-JWT/

class User(object):
    def __init__(self, id, username, password):
        self.id = id
        self.username = username
        self.password = password

    def __str__(self):
        return "User(id='%s')" % self.id

    def authenticate(username, password):
        user = ''
        #user = username_table.get(username, None)
        if user and safe_str_cmp(user.password.encode('utf-8'), password.encode('utf-8')):
            return user

    def identity(payload):
        user_id = '';
        #user_id = payload['identity']
        bd = ''
        return bd.get(user_id, None)

    app = Flask(__name__)
    app.debug = True
    app.config['SECRET_KEY'] = 'super-secret'

    jwt = JWT(app, authenticate, identity)

    @app.route('/protected')
    @jwt_required()
    def protected():
        return '%s' % current_identity

    if __name__ == '__main__':
        app.run()