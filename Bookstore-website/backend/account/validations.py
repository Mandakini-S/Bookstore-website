from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model

UserModel = get_user_model()

def custom_validation(data):
    email = data['email'].strip()
    username = data['username'].strip()
    password = data['password'].strip()

    if not email or UserModel.objects.filter(email=email).exists():
        raise ValidationError('Choose another email')
    
    if not password or len(password) < 8:
        raise ValidationError('Choose another password, min 8 characters')
    
    if not username:
        raise ValidationError('Choose another username')

    return {
        'email': email,
        'username': username,
        'password': password
    }

def validate_email(email):
    email = email.strip()
    if not email:
        raise ValidationError('An email is needed')
    return True

def validate_username(username):
    username = username.strip()
    if not username:
        raise ValidationError('Choose another username')
    return True

def validate_password(password):
    password = password.strip()
    if not password:
        raise ValidationError('A password is needed')
    return True
