from .common import LocationSerializer
from hanqout.serializers.common import HanqoutSerializer

class PopulatedLocationSerializer(LocationSerializer):
    hanqouts = HanqoutSerializer(many=True)