from rest_framework.authentication import BasicAuthentication
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt

User = get_user_model()

class JWTAuthentication(BasicAuthentication):

    def authenticate(self, request):
        # get the token from the request
        header = request.headers.get('Authorization')

        # if no token in the header, return None
        if not header:
            return None

        # if the token is in the incorrect format, throw an error
        if not header.startswith('Bearer'):
            raise PermissionDenied(detail="Invalid token")

        # if token does start with 'Bearer', need to remove and replace with empty string
        token = header.replace('Bearer ', '')

        try:
            # decode the token to get the payload (info about user that lives on the token), needs the token, the secret and the algorithms
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            print('PAYLOAD', payload)
            # use the 'sub' from the payload to search the DB for a matching user
            user = User.objects.get(pk=payload.get('sub'))
        except jwt.exceptions.InvalidTokenError: # if token is invalid, issue with decoding throw an error
            raise PermissionDenied(detail='Invalid token')
        except User.DoesNotExist: # issue with finding the user, throw an error
            raise PermissionDenied(detail='User not found')
        
        # if all good, token is valid and user has been found
        return (user, token)
