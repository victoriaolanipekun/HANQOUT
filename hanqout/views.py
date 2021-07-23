from rest_framework.views import APIView # class which facilitates sending back json
from rest_framework.response import Response # method to send back a response
from rest_framework import status # methods to send back a status code
from rest_framework.exceptions import NotFound # methods to send back a status code
from rest_framework.exceptions import NotFound # methods to send back a status code
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Hanqout 
from .serializers.common import HanqoutSerializer
from .serializers.populated import PopulatedHanqoutSerializer

class HanqoutListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get(self, _request):
        hanqouts = Hanqout.objects.all() # get everything from the hanqouts table in the db
        print('HANQOUTS', hanqouts)
        serialized_hanqouts = PopulatedHanqoutSerializer(hanqouts, many=True) # transform data into python by running through serializer
        print('SERIALIZED', serialized_hanqouts.data)
        return Response(serialized_hanqouts.data, status=status.HTTP_200_OK) # return data and status code

    def post(self, request):
        #request.data['owner'] = request.user.id
        hanqout_to_add = HanqoutSerializer(data=request.data)
        if hanqout_to_add.is_valid():
            hanqout_to_add.save()
            return Response(hanqout_to_add.data, status=status.HTTP_201_CREATED)
        return Response(hanqout_to_add.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class HanqoutDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly, )

    def get_hanqout(self, pk):
        try:
            return Hanqout.objects.get(pk=pk)
        except Hanqout.DoesNotExist:
            raise NotFound(detail="🆘 Can't find that hanqout")


    def get(self, _request, pk):
        hanqout = self.get_hanqout(pk=pk)
        serialized_hanqout = PopulatedHanqoutSerializer(hanqout)
        return Response(serialized_hanqout.data, status=status.HTTP_200_OK)

    def delete(self, _request, pk):
        hanqout_to_delete = self.get_hanqout(pk=pk)
        hanqout_to_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        hanqout_to_edit = self.get_hanqout(pk=pk)
        updated_hanqout = HanqoutSerializer(hanqout_to_edit, data=request.data)
        if updated_hanqout.is_valid():
            updated_hanqout.save()
            return Response(updated_hanqout.data, status=status.HTTP_202_ACCEPTED)
        return Response(updated_hanqout.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
