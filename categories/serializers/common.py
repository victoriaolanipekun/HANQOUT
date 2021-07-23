from rest_framework import serializers 
from ..models import Hanqout

class HanqoutSerializer(serializers.ModelSerializer):

    class Meta:
        model = Hanqout
        fields = '__all__'