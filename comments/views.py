from rest_framework.views import APIView
from rest_framework.response import Response 
from rest_framework import status 

from .serializers.common import CommentSerializer

class CommentListView(APIView):
    #permission_classes = (IsAuthenticated, )
    
    def post(self, request):
        #request.data["owner"] = request.user.id 
        comment_to_create = CommentSerializer(data=request.data) 
        if comment_to_create.is_valid():
            comment_to_create.save()
            return Response(comment_to_create.data, status=status.HTTP_201_CREATED)
        return Response(comment_to_create.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)