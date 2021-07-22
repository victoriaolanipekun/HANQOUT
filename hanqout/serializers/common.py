from rest_framework import serializers
from ..models import Hanqout

class HanqoutSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Hanqout # the model it should use
        fields = '__all__' # which fields to serialize
