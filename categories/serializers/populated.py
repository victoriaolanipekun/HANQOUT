from .common import CategorySerializer
from hanqout.serializers.common import HanqoutSerializer

class PopulatedCategorySerializer(CategorySerializer):
    hanqouts = HanqoutSerializer(many=True)